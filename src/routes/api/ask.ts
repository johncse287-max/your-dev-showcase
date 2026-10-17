import { createFileRoute } from "@tanstack/react-router";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai/run-id";
import { ASSISTANT_INSTRUCTIONS } from "@/lib/ai/portfolio-knowledge";

const MAX_MESSAGES = 20;
const MAX_CHARS = 1000;

export const Route = createFileRoute("/api/ask")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return Response.json({ error: "Assistant is not configured." }, { status: 500 });

        let messages: UIMessage[];
        try {
          const body = (await request.json()) as { messages?: UIMessage[] };
          messages = Array.isArray(body.messages) ? body.messages.slice(-MAX_MESSAGES) : [];
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }
        const tooLong = messages.some((m) =>
          m.parts?.some((p) => p.type === "text" && p.text.length > MAX_CHARS),
        );
        if (!messages.length || tooLong) {
          return Response.json({ error: "Please keep questions under 1000 characters." }, { status: 400 });
        }

        const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));
        const provider = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey,
          headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
          fetch: runIdFetch.fetch,
        });
        const result = streamText({
          model: provider.responses("openai/gpt-6-astra"),
          instructions: ASSISTANT_INSTRUCTIONS,
          messages: await convertToModelMessages(messages),
          abortSignal: request.signal,
          providerOptions: {
            openai: {
              forceReasoning: true,
              reasoningEffort: "low",
              reasoningSummary: "auto",
              store: false,
              include: ["reasoning.encrypted_content"],
            },
          },
        });
        return withLovableAiGatewayRunIdHeader(
          result.toUIMessageStreamResponse({
            originalMessages: messages,
            onError: (e) => {
              const status = (e as { statusCode?: number })?.statusCode;
              if (status === 429) return "The assistant is busy. Please try again in a moment.";
              if (status === 402 || status === 403) return "The assistant is temporarily unavailable.";
              console.error("ask error", e);
              return "Something went wrong. Please try again.";
            },
          }),
          runIdFetch,
        );
      },
    },
  },
});
