import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi, I'm Jenesis Guide. Ask me about our programs, the Coalition, the Riverfront Soul Festival, sponsorship, or how to get in touch.";

const FALLBACK_UNKNOWN =
  "I may not have that information yet. Please contact Jenesis CDC directly at jenesiscdc@gmail.com.";

function localAnswer(qRaw: string): string {
  const q = qRaw.toLowerCase();
  const has = (...keys: string[]) => keys.some((k) => q.includes(k));

  if (has("contact", "email", "reach")) {
    return "You can contact Jenesis CDC at jenesiscdc@gmail.com.";
  }
  if (has("sponsor", "tier", "title sponsor", "gold sponsor")) {
    return "Riverfront Soul Festival sponsorship includes Community ($500), Bronze ($1,500), Silver ($3,500), Gold ($7,500), and Title ($20,000). Custom sponsorships are available. Email jenesiscdc@gmail.com to confirm.";
  }
  if (has("festival", "riverfront", "soul")) {
    return "Riverfront Soul Festival 2026 takes place September 12-13, 2026 in Franklin, Virginia. It is an intergenerational cultural experience with music, art, wellness, civic education, and storytelling.";
  }
  if (has("ceed promise")) {
    return "CEED Promise supports K-12 students and families through educational ecosystems, community partnerships, mentoring, and empowerment pathways.";
  }
  if (has("ceed corps", "young adult", "workforce")) {
    return "CEED Corps builds young adult leadership and workforce readiness through community-based engagement, training, mentorship, and real-world development opportunities.";
  }
  if (has("garden")) {
    return "The Jenesis CDC Community Garden brings together education, nutrition, faith, and environmental stewardship through hands-on gardening experiences.";
  }
  if (has("pillar", "four program", "generational")) {
    return "Our four program pillars are Generational Health, Generational Wealth, Generational Legacy, and Generational Transitions.";
  }
  if (has("coalition", "partner")) {
    return "The Coalition brings together education, healthcare, economic development, media, social services, faith-based, workforce, business, and community leaders to close the opportunity gap. Email jenesiscdc@gmail.com or use the contact form to become a partner.";
  }
  if (has("serve", "audience", "who do you")) {
    return "Jenesis CDC serves school-age children, foster care youth and aged-out young adults, economically disadvantaged families, returning citizens, unhoused families, and children of senior-age guardians.";
  }
  if (has("impact", "framework")) {
    return "Our Points of Impact framework spans Physiological Needs, Healthy Environments and Safety, Relationship, Self-Esteem, and Self-Actualization.";
  }
  if (has("mission", "vision")) {
    return "Our mission is to build strong, sustainable communities by investing in resilient young people and families. We envision strong, sustainable communities thriving across Virginia.";
  }
  if (has("about", "what is jenesis", "who is jenesis")) {
    return "Jenesis Community Development Corporation is a nonprofit serving the Western Tidewater region of Virginia through education, economic empowerment, health services, and strategic partnerships.";
  }
  if (has("designer", "uzair", "designed", "built")) {
    return "This website was designed by Uzair Nasir.";
  }
  if (has("volunteer")) {
    return "We welcome volunteers across our programs and the Community Garden. Visit the Contact page and select Volunteer, or email jenesiscdc@gmail.com.";
  }
  if (has("location", "where", "region")) {
    return "Jenesis CDC serves the Western Tidewater region of Virginia, centered in Franklin and surrounding communities.";
  }
  return FALLBACK_UNKNOWN;
}

export function JenesisGuide() {
  const [open, setOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open, thinking]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setShowPreview(false);
    }
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || thinking) return;
    setInput("");
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setThinking(true);

    const startedAt = Date.now();
    let reply = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      if (res.ok) {
        const data = (await res.json()) as { reply?: string };
        reply = (data.reply || "").trim();
      }
    } catch {
      // network error -> fall through to local
    }

    if (!reply) reply = localAnswer(text);

    const elapsed = Date.now() - startedAt;
    const minDelay = 800;
    if (elapsed < minDelay) {
      await new Promise((r) => setTimeout(r, minDelay - elapsed));
    }

    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    setThinking(false);
  };

  return (
    <>
      {!open && (
        <div
          className="fixed z-50 right-4 sm:right-6 flex flex-col items-end gap-2"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 96px)" }}
        >
          {showPreview && (
            <div
              className="hidden md:flex items-start gap-2 max-w-[280px] rounded-lg border px-3.5 py-2.5 text-sm shadow-md"
              style={{
                background: "var(--ivory)",
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              <span className="leading-snug">
                Questions about programs, sponsorship, or getting involved?
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPreview(false);
                }}
                aria-label="Dismiss preview"
                className="shrink-0 -mr-1 -mt-0.5 p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          <button
            onClick={() => setOpen(true)}
            aria-label="Open Jenesis Guide chat"
            className="group inline-flex items-center gap-3 rounded-full pl-3 pr-5 py-2.5 shadow-lg border transition-colors"
            style={{
              background: "var(--burgundy)",
              color: "var(--ivory)",
              borderColor: "var(--gold)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--burgundy-deep)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--burgundy)";
            }}
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ background: "oklch(1 0 0 / 0.12)" }}
            >
              <MessageCircle className="h-4 w-4" style={{ color: "var(--ivory)" }} />
            </span>
            <span className="flex flex-col items-start leading-tight text-left">
              <span className="text-sm font-semibold">Ask Jenesis Guide</span>
              <span
                className="hidden md:block text-[10.5px] tracking-wide"
                style={{ color: "oklch(1 0 0 / 0.7)" }}
              >
                Programs · Coalition · Festival
              </span>
            </span>
          </button>
        </div>
      )}

      {open && (
        <div
          className="fixed z-50 flex flex-col overflow-hidden border shadow-2xl right-3 left-3 sm:left-auto sm:right-6 rounded-lg sm:w-[370px]"
          style={{
            background: "var(--ivory)",
            borderColor: "var(--border)",
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 96px)",
            maxHeight: "min(78vh, 560px)",
          }}
          role="dialog"
          aria-label="Jenesis Guide"
        >
          <div
            className="flex items-start justify-between px-5 py-4"
            style={{ background: "var(--burgundy)", color: "var(--ivory)" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ background: "oklch(1 0 0 / 0.12)" }}
              >
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <div
                  className="text-base font-semibold leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Jenesis Guide
                </div>
                <div className="text-[11px] tracking-wide" style={{ color: "oklch(1 0 0 / 0.7)" }}>
                  Community information assistant
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-ivory/80 hover:text-gold p-1 -mr-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            style={{ background: "var(--sand)" }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[88%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user" ? "ml-auto" : ""
                }`}
                style={
                  m.role === "user"
                    ? { background: "var(--charcoal)", color: "var(--ivory)" }
                    : {
                        background: "var(--ivory)",
                        color: "var(--foreground)",
                        border: "1px solid var(--border)",
                      }
                }
              >
                {m.content}
              </div>
            ))}
            {thinking && (
              <div
                className="max-w-[60%] rounded-lg px-3.5 py-2.5 text-sm flex items-center gap-1.5"
                style={{
                  background: "var(--ivory)",
                  color: "var(--muted-foreground)",
                  border: "1px solid var(--border)",
                }}
                aria-live="polite"
              >
                <span className="text-[11px] tracking-wide mr-1">Jenesis Guide is typing</span>
                <Dot />
                <Dot delay={0.15} />
                <Dot delay={0.3} />
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
            className="border-t flex gap-2 p-3"
            style={{ borderColor: "var(--border)", background: "var(--ivory)" }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about programs, coalition, or the festival"
              className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              style={{ borderColor: "var(--border)" }}
              disabled={thinking}
            />
            <button
              type="submit"
              disabled={thinking || !input.trim()}
              className="rounded-md px-3 py-2 text-sm font-semibold disabled:opacity-60"
              style={{ background: "var(--burgundy)", color: "var(--ivory)" }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{
        background: "var(--burgundy)",
        animation: "jg-blink 1s infinite",
        animationDelay: `${delay}s`,
      }}
    />
  );
}
