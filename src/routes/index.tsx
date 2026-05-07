import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-community.jpg";
import garden from "@/assets/garden.jpg";
import education from "@/assets/education.jpg";
import family from "@/assets/family.jpg";
import youth from "@/assets/youth.jpg";
import coalition from "@/assets/coalition.jpg";
import festival from "@/assets/festival.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const pillars = [
  {
    n: "01",
    title: "Generational Health",
    body: "Mental, spiritual, and physical wellness that helps individuals and families move from instability toward wholeness.",
  },
  {
    n: "02",
    title: "Generational Wealth",
    body: "Housing, entrepreneurship, career development, and asset-building pathways that support long-term economic mobility.",
  },
  {
    n: "03",
    title: "Generational Legacy",
    body: "Education, strategic civic planning, and leadership development that prepare the next generation to lead.",
  },
  {
    n: "04",
    title: "Generational Transitions",
    body: "Support for estates, family life, culture, and life-stage transitions that strengthen families across generations.",
  },
];

const served = [
  "School-age children in public schools",
  "Foster care children and aged-out young adults",
  "Economically disadvantaged families",
  "Returning citizens",
  "Unhoused families",
  "Children of senior-age guardians",
];

const impactTiers = [
  { tier: "I", label: "Physiological Needs", body: "Food insecurity, short-term housing, clothing, healthcare." },
  { tier: "II", label: "Healthy Environments & Safety", body: "Employment, health, housing sustainability." },
  { tier: "III", label: "Relationship", body: "Faith-based connection, spiritual development, domestic supports, community-building." },
  { tier: "IV", label: "Self-Esteem", body: "Mental health services and small groups." },
  { tier: "V", label: "Self-Actualization", body: "Wealth-building, asset strategy, college and career, entrepreneurship." },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--burgundy-deep)" }}>
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.26 0.09 17 / 0.55), oklch(0.26 0.09 17 / 0.85))" }} />
        </div>
        <div className="relative container-edge pt-24 md:pt-32 pb-20 md:pb-28 text-ivory">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">Western Tidewater · Virginia</span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.02] tracking-tight text-ivory"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Designing New Opportunities for New Beginnings.
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-ivory/85 leading-relaxed">
            Jenesis CDC builds strong, sustainable communities through education,
            economic empowerment, health services, and strategic partnerships
            across the Western Tidewater region.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/programs" className="btn-gold">Explore Our Programs</Link>
            <Link to="/coalition" className="btn-ghost-light">Join the Coalition</Link>
          </div>
          <p className="mt-10 text-sm text-ivory/65">
            Serving young people, families, and communities across Virginia.
          </p>
        </div>

        {/* mission bar */}
        <div className="relative" style={{ background: "var(--burgundy)" }}>
          <div className="container-edge grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ivory/15">
            {[
              { k: "Build", v: "People" },
              { k: "Build", v: "Partners" },
              { k: "Build", v: "Capacity" },
            ].map((m) => (
              <div key={m.v} className="py-7 md:py-8 px-2 md:px-8 text-ivory">
                <div className="text-[11px] tracking-[0.22em] uppercase text-ivory/60">{m.k}</div>
                <div className="mt-1 text-2xl md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / ABOUT BLOCK */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5">
            <SectionHeader
              eyebrow="About Jenesis CDC"
              title={<>A nonprofit rooted in <em className="not-italic" style={{ color: "var(--burgundy)" }}>community</em>, built for generations.</>}
            />
          </Reveal>
          <Reveal className="md:col-span-7 md:pt-12" delay={120}>
            <p className="text-lg leading-relaxed text-foreground/85">
              Jenesis Community Development Corporation exists to ignite new
              beginnings by empowering communities through education, economic
              opportunity, and sustainable growth. We are committed to building
              stronger, more connected communities across the Western Tidewater
              Region — where people, resources, and opportunities come together
              to create lasting impact.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At our core, we focus on the next generation by fostering
              environments that support, inspire, and equip young people to live
              and lead.
            </p>
            <div className="mt-7">
              <Link to="/about" className="btn-outline">Read Our Story</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="py-20 md:py-28" style={{ background: "var(--sand)" }}>
        <div className="container-edge">
          <Reveal>
            <SectionHeader
              eyebrow="Four Program Pillars"
              title="The framework that shapes every initiative."
              intro="Each pillar guides how we invest in people, families, and the long arc of community well-being."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="card-quiet h-full flex flex-col">
                  <div
                    className="text-xs font-semibold tracking-[0.22em]"
                    style={{ color: "var(--burgundy)" }}
                  >
                    {p.n}
                  </div>
                  <h3 className="mt-4 text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                    {p.body}
                  </p>
                  <div className="mt-6 h-px" style={{ background: "var(--gold)" }} />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <img src={family} alt="A multigenerational family at home" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="md:col-span-7" delay={100}>
            <SectionHeader
              eyebrow="Who We Are Called to Serve"
              title="We walk alongside the people most often left behind."
              intro="We connect individuals and families facing challenging life experiences with the support and resources needed to overcome barriers and build stability."
            />
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {served.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--burgundy)" }} />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="py-20 md:py-28" style={{ background: "var(--ivory)" }}>
        <div className="container-edge">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHeader
                eyebrow="Programs"
                title={<>Programs that build <em className="not-italic" style={{ color: "var(--burgundy)" }}>pathways</em>.</>}
              />
              <Link to="/programs" className="btn-outline self-start">All Programs</Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              { title: "CEED Promise", img: education, body: "An ecosystem of community partners, mentors, and educators investing in K–12 students and their families." },
              { title: "CEED Corps", img: youth, body: "Young adults ages 18–25 build talent pipelines through asset-building and community development experiences." },
              { title: "Community Garden", img: garden, body: "An interdisciplinary educational initiative rooted in agricultural practice, healthy eating, and community care." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <article className="group rounded-xl overflow-hidden border bg-card transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_oklch(0.2_0.05_17/0.35)]" style={{ borderColor: "var(--border)" }}>
                  <div className="aspect-[5/4] overflow-hidden">
                    <img src={c.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT MODEL */}
      <section className="py-20 md:py-28" style={{ background: "var(--burgundy)", color: "var(--ivory)" }}>
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">Points of Impact</span>
            </div>
            <h2 className="text-3xl md:text-5xl max-w-3xl leading-[1.05] text-ivory" style={{ fontFamily: "var(--font-display)" }}>
              Bridging resources, breaking barriers, building dreams.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-3">
            {impactTiers.map((t, i) => (
              <Reveal key={t.tier} delay={i * 70}>
                <div
                  className="grid grid-cols-12 items-center gap-4 rounded-lg border border-ivory/15 px-5 md:px-7 py-5 md:py-6 transition-colors hover:bg-ivory/5"
                  style={{
                    marginLeft: `${i * 4}%`,
                  }}
                >
                  <div className="col-span-2 md:col-span-1 font-display text-2xl text-gold" style={{ fontFamily: "var(--font-display)" }}>{t.tier}</div>
                  <div className="col-span-10 md:col-span-4 text-base md:text-lg font-medium text-ivory">{t.label}</div>
                  <div className="col-span-12 md:col-span-7 text-sm text-ivory/75">{t.body}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COALITION CTA */}
      <section className="py-20 md:py-28">
        <div className="container-edge grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img src={coalition} alt="Coalition partners meeting" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="md:col-span-6" delay={120}>
            <SectionHeader
              eyebrow="The Coalition"
              title="A coordinated network closing the opportunity gap."
              intro="Jenesis CDC brings together leaders from education, healthcare, economic development, social services, faith institutions, workforce organizations, and community leaders to align expertise around shared outcomes."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/coalition" className="btn-primary">Become a Coalition Partner</Link>
              <Link to="/coalition" className="btn-outline">Learn More</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FESTIVAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={festival} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.26 0.09 17 / 0.92) 0%, oklch(0.26 0.09 17 / 0.55) 100%)" }} />
        </div>
        <div className="relative container-edge py-20 md:py-28 text-ivory">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">September 12–13, 2026 · Franklin, VA</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-ivory" style={{ fontFamily: "var(--font-display)" }}>
              Riverfront Soul Festival 2026
            </h2>
            <p className="mt-5 text-lg text-ivory/85 leading-relaxed">
              A powerful intergenerational cultural experience activating community
              connection, economic growth, and cultural preservation through music,
              art, wellness, and civic engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/festival" className="btn-gold">Festival Details</Link>
              <Link to="/festival" className="btn-ghost-light">Sponsor the Festival</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
