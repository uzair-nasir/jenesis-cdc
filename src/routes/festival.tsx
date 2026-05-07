import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import festival from "@/assets/festival.jpg";

export const Route = createFileRoute("/festival")({
  head: () => ({
    meta: [
      { title: "Riverfront Soul Festival 2026 — Jenesis CDC" },
      { name: "description", content: "September 12–13, 2026 in Franklin, Virginia. Where culture meets community transformation." },
      { property: "og:title", content: "Riverfront Soul Festival 2026" },
      { property: "og:description", content: "An intergenerational cultural experience activating community connection, economic growth, and cultural preservation." },
      { property: "og:image", content: festival },
    ],
  }),
  component: FestivalPage,
});

const experiences = [
  { title: "Music Stage", body: "Headliners and community artists across genres rooted in soul." },
  { title: "Artist Village", body: "Local makers, painters, and crafters celebrating Tidewater talent." },
  { title: "Wellness Pavilion", body: "Mind, body, and spirit — yoga, screenings, and conversation." },
  { title: "Taste of Franklin", body: "Regional food and beverage from Black-owned and local vendors." },
  { title: "Civic Education", body: "Voter resources, civic dialogues, and youth-led panels." },
  { title: "Storytelling Circles", body: "Oral history and intergenerational exchange." },
];

const impact = ["Economic Growth", "Cultural Preservation", "Community Connection", "Civic Engagement"];

const budget = [
  ["Talent & Entertainment", "$20,000"],
  ["Production", "$15,000"],
  ["Marketing", "$12,000"],
  ["Security and Medical Team", "$3,000"],
  ["Operations & Travel", "$10,000"],
  ["Community Programming", "$10,000"],
  ["Youth Intern Stipends", "$10,000"],
];

const tiers = [
  {
    name: "Title Sponsor",
    price: "$20,000",
    featured: true,
    benefits: [
      "Naming integration on all marketing, social media, and event signage",
      "Sponsored experience zone, booth, or platform",
      "Youth intern sponsor",
      "Onstage presence and mention during the event",
      "Thought leader opportunity for future initiatives",
      "10 VIP tickets",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "$7,500",
    benefits: [
      "Prominent logo placement on marketing materials and event signage",
      "Recognition on stage during the event",
      "Vendor / activation space on-site",
      "6 VIP passes",
      "Featured social media spotlight before and after the event",
      "Inclusion in email marketing campaigns",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "$3,500",
    benefits: [
      "Logo placement on select promotional materials",
      "Vendor booth space",
      "4 VIP passes",
      "Social media recognition",
    ],
  },
  {
    name: "Bronze Sponsor",
    price: "$1,500",
    benefits: [
      "Logo placement on event signage",
      "2 VIP passes",
      "Name recognition on website and program",
    ],
  },
  {
    name: "Community Sponsor",
    price: "$500",
    benefits: ["Name listing on website and select materials"],
  },
];

function FestivalPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={festival} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.26 0.09 17 / 0.5), oklch(0.26 0.09 17 / 0.85))" }} />
        </div>
        <div className="relative container-edge py-24 md:py-32 text-ivory">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">Franklin, VA · September 12–13, 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl max-w-4xl text-ivory leading-[1.02]" style={{ fontFamily: "var(--font-display)" }}>
            Riverfront Soul Festival 2026
          </h1>
          <p className="mt-5 text-xl text-ivory/85" style={{ fontFamily: "var(--font-display)" }}>
            Where culture meets community transformation.
          </p>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-ivory/80 leading-relaxed">
            A powerful intergenerational cultural experience designed to activate
            community connection, economic growth, and cultural preservation.
            Through music, art, wellness, and civic engagement, the festival
            transforms public space into a living ecosystem of opportunity,
            healing, and celebration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#sponsor" className="btn-gold">Become a Sponsor</a>
            <a href="mailto:jenesiscdc@gmail.com" className="btn-ghost-light">Contact Festival Team</a>
          </div>
        </div>
      </section>

      {/* Experience Areas */}
      <section className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="rule" />
              <span className="eyebrow">Experience Areas</span>
            </div>
            <h2 className="text-3xl md:text-5xl max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
              Six experiences. One riverfront weekend.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((e, i) => (
              <Reveal key={e.title} delay={i * 70}>
                <div className="card-quiet h-full">
                  <div className="text-[11px] font-semibold tracking-[0.22em]" style={{ color: "var(--burgundy)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-xl" style={{ fontFamily: "var(--font-display)" }}>{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-20" style={{ background: "var(--sand)" }}>
        <div className="container-edge">
          <Reveal>
            <div className="grid md:grid-cols-4 gap-6">
              {impact.map((i) => (
                <div key={i} className="border-t pt-5" style={{ borderColor: "var(--burgundy)" }}>
                  <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">Impact</div>
                  <div className="mt-2 text-2xl" style={{ fontFamily: "var(--font-display)" }}>{i}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sponsorship */}
      <section id="sponsor" className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="rule" />
              <span className="eyebrow">Sponsorship</span>
            </div>
            <h2 className="text-4xl md:text-6xl max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
              Lead the experience.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Partner with Jenesis CDC to power a weekend of cultural and economic activation in Franklin, Virginia.
            </p>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5">
              <div className="rounded-xl border p-8" style={{ borderColor: "var(--border)", background: "var(--ivory)" }}>
                <div className="eyebrow mb-3">Estimated Budget</div>
                <ul className="divide-y" style={{ borderColor: "var(--border)" }}>
                  {budget.map(([k, v]) => (
                    <li key={k} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-foreground/85">{k}</span>
                      <span className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>{v}</span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between py-4 mt-2" style={{ borderTop: "1px solid var(--burgundy)" }}>
                    <span className="text-base font-semibold">Total Estimated Budget</span>
                    <span className="text-2xl" style={{ fontFamily: "var(--font-display)", color: "var(--burgundy)" }}>$80,000</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <div className="lg:col-span-7 space-y-5">
              {tiers.map((t, i) => (
                <Reveal key={t.name} delay={i * 70}>
                  <div
                    className={`rounded-xl border p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_oklch(0.2_0.05_17/0.35)]`}
                    style={{
                      borderColor: t.featured ? "var(--burgundy)" : "var(--border)",
                      background: t.featured ? "var(--burgundy)" : "var(--card)",
                      color: t.featured ? "var(--ivory)" : undefined,
                    }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)", color: t.featured ? "var(--ivory)" : undefined }}>
                        {t.name}
                      </h3>
                      <div className="text-2xl" style={{ fontFamily: "var(--font-display)", color: t.featured ? "var(--gold)" : "var(--burgundy)" }}>
                        {t.price}
                      </div>
                    </div>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {t.benefits.map((b) => (
                        <li key={b} className={`flex items-start gap-2.5 text-sm ${t.featured ? "text-ivory/90" : "text-foreground/85"}`}>
                          <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: t.featured ? "var(--gold)" : "var(--burgundy)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}

              <Reveal>
                <div className="rounded-xl border-2 border-dashed p-7" style={{ borderColor: "var(--gold)" }}>
                  <div className="eyebrow mb-2" style={{ color: "var(--gold)" }}>Custom Sponsor</div>
                  <p className="text-sm text-foreground/85">
                    Available for youth programming, wellness initiatives, and community engagement activations.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="mt-14 rounded-xl p-8 md:p-10 text-center" style={{ background: "var(--charcoal)", color: "var(--ivory)" }}>
              <h3 className="text-2xl md:text-3xl text-ivory" style={{ fontFamily: "var(--font-display)" }}>
                Ready to confirm your partnership?
              </h3>
              <p className="mt-3 text-ivory/80">Email <a href="mailto:jenesiscdc@gmail.com" className="text-gold underline">jenesiscdc@gmail.com</a> to confirm your partnership.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
