import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { SectionHeading } from "./SectionHeading";
import logo from "@/assets/logo.png";

const suggestions = [
  "What real projects has Imtiaz delivered?",
  "Which frontend skills does he have?",
  "What digital marketing services does he offer?",
  "Where did he study?",
];

export function AskAssistant() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({ api: "/api/ask" }),
    onError: (e) => setError(e.message || "Something went wrong. Please try again."),
  });
  const busy = status === "submitted" || status === "streaming";

  const ask = (text: string) => {
    const t = text.trim();
    if (!t || busy) return;
    setError(null);
    void sendMessage({ text: t });
    setInput("");
  };

  return (
    <section id="ask" className="section-pad">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// ask"
          title="Ask About My Work"
          description="Recruiters can ask quick questions. Answers are AI-generated from this portfolio only — please confirm details by email."
        />
        <div className="card-glass flex h-[32rem] flex-col rounded-2xl p-4">
          <Conversation className="flex-1">
            <ConversationContent>
              {messages.length === 0 ? (
                <ConversationEmptyState
                  icon={<img src={logo} alt="" width={48} height={48} className="rounded-lg" />}
                  title="Portfolio assistant"
                  description="Ask about experience, projects, skills or services."
                >
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => ask(s)}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </ConversationEmptyState>
              ) : (
                messages.map((m) => (
                  <Message from={m.role} key={m.id}>
                    <MessageContent
                      className={
                        m.role === "user"
                          ? "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground"
                          : "bg-transparent"
                      }
                    >
                      {m.parts.map((p, i) =>
                        p.type === "text" ? (
                          m.role === "user" ? (
                            <span key={i}>{p.text}</span>
                          ) : (
                            <MessageResponse key={i}>{p.text}</MessageResponse>
                          )
                        ) : null,
                      )}
                    </MessageContent>
                  </Message>
                ))
              )}
              {status === "submitted" && <Shimmer className="text-sm">Thinking...</Shimmer>}
              {error && (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>
          <PromptInput onSubmit={(msg) => ask(msg.text ?? "")} className="mt-3">
            <PromptInputTextarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about Imtiaz's work…"
              maxLength={1000}
              aria-label="Your question"
            />
            <PromptInputFooter className="justify-end">
              <PromptInputSubmit status={status} onStop={stop} disabled={!busy && !input.trim()} />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </section>
  );
}
