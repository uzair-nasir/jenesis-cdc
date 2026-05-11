import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "bot"; text: string };

const greeting =
  "Hi, I'm Jenesis Guide. Ask me about our programs, coalition, the Riverfront Soul Festival, sponsorship, or how to get in touch.";

function answer(qRaw: string): string {
  const q = qRaw.toLowerCase();
  const has = (...keys: string[]) => keys.some((k) => q.includes(k));

  if (has("contact", "email", "reach", "phone", "address")) {
    return "You can contact Jenesis CDC at jenesiscdc@gmail.com.";
  }
  if (has("sponsor", "sponsorship", "tier", "title sponsor", "gold sponsor")) {
    return "Riverfront Soul Festival sponsorship opportunities range from Community Sponsor at $500 to Title Sponsor at $20,000. You can email jenesiscdc@gmail.com to confirm your partnership.";
  }
  if (has("festival", "riverfront", "soul")) {
    return "Riverfront Soul Festival 2026 takes place September 12-13, 2026 in Franklin, Virginia. It's an intergenerational cultural experience with music, art, wellness, civic education, and storytelling. See the Riverfront Soul Festival page for details.";
  }
  if (has("ceed promise", "promise")) {
    return "CEED Promise supports K-12 students and families through educational ecosystems, community partnerships, mentoring, and empowerment pathways.";
  }
  if (has("ceed corps", "corps", "young adult", "workforce")) {
    return "CEED Corps builds young adult leadership and workforce readiness through community engagement, training, mentorship, and real-world development opportunities for ages 18-25.";
  }
  if (has("garden")) {
    return "The Jenesis CDC Community Garden brings together education, nutrition, faith, and environmental stewardship through hands-on gardening experiences.";
  }
  if (has("pillar", "four program", "generational")) {
    return "Our four program pillars are Generational Health, Generational Wealth, Generational Legacy, and Generational Transitions. Each one shapes how we invest in people, families, and long-term community well-being.";
  }
  if (has("coalition", "partner", "partnership")) {
    return "The Coalition is a network of education, healthcare, economic development, media, social services, faith-based, workforce, business, and community leaders working together to close the opportunity gap. Visit the Coalition page or email jenesiscdc@gmail.com to become a partner.";
  }
  if (has("serve", "who", "audience", "families", "youth")) {
    return "Jenesis CDC walks alongside school-age children, foster care youth, economically disadvantaged families, returning citizens, unhoused families, and children of senior-age guardians.";
  }
  if (has("impact", "points of impact", "framework")) {
    return "Our Points of Impact framework spans five levels: Physiological Needs, Healthy Environments and Safety, Relationship, Self-Esteem, and Self-Actualization.";
  }
  if (has("mission", "vision")) {
    return "Our mission is to build strong, sustainable communities by investing in resilient young people and families. We envision a future where strong, sustainable communities thrive across the Commonwealth of Virginia.";
  }
  if (has("about", "what is", "who is jenesis", "jenesis cdc")) {
    return "Jenesis Community Development Corporation is a nonprofit serving the Western Tidewater region of Virginia through education, economic empowerment, health services, and strategic partnerships.";
  }
  if (has("designer", "uzair", "datagen", "scholar", "website")) {
    return "This website was built through SaNDAI's DataGen Scholar Program. The website designer is Uzair Nasir, a DataGen Scholar.";
  }
  if (has("volunteer")) {
    return "We welcome volunteers across our programs and the Community Garden. Visit the Contact page and select Volunteer, or email jenesiscdc@gmail.com.";
  }
  if (has("location", "where", "region")) {
    return "Jenesis CDC serves the Western Tidewater region of Virginia, centered in Franklin and surrounding communities.";
  }
  return "I may not have that information yet. Please contact Jenesis CDC directly at jenesiscdc@gmail.com.";
}

export function JenesisGuide() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: greeting }]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }, { role: "bot", text: answer(text) }]);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Jenesis Guide chat"
          className="fixed bottom-5 right-5 z-50 rounded-full px-5 py-3 text-sm font-semibold shadow-lg"
          style={{ background: "var(--burgundy)", color: "var(--ivory)" }}
        >
          Ask Jenesis Guide
        </button>
      )}

      {open && (
        <div
          className="fixed bottom-5 right-5 z-50 w-[min(92vw,360px)] rounded-lg border overflow-hidden shadow-2xl flex flex-col"
          style={{ background: "var(--ivory)", borderColor: "var(--border)", maxHeight: "min(80vh, 560px)" }}
          role="dialog"
          aria-label="Jenesis Guide"
        >
          <div className="flex items-start justify-between px-5 py-4" style={{ background: "var(--burgundy)", color: "var(--ivory)" }}>
            <div>
              <div className="text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>Jenesis Guide</div>
              <div className="text-[11px] tracking-wide text-ivory/75">Community information assistant</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-ivory/80 hover:text-gold text-lg leading-none px-1"
            >
              ×
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: "var(--sand)" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-md px-3 py-2 text-sm leading-snug ${m.role === "user" ? "ml-auto" : ""}`}
                style={
                  m.role === "user"
                    ? { background: "var(--charcoal)", color: "var(--ivory)" }
                    : { background: "var(--ivory)", color: "var(--foreground)", border: "1px solid var(--border)" }
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t flex gap-2 p-3"
            style={{ borderColor: "var(--border)", background: "var(--ivory)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about programs, coalition, festival, or sponsorship"
              className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              style={{ borderColor: "var(--border)" }}
            />
            <button
              type="submit"
              className="rounded-md px-3 py-2 text-sm font-semibold"
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
