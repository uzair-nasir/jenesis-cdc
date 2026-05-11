import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
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
  { title: "Generational Health", body: "Mental, spiritual, and physical wellness that helps individuals and families move from instability toward wholeness." },
  { title: "Generational Wealth", body: "Housing, entrepreneurship, career development, and asset-building pathways that support long-term economic mobility." },
  { title: "Generational Legacy", body: "Education, strategic civic planning, and leadership development that prepare the next generation to lead." },
  { title: "Generational Transitions", body: "Support for estates, family life, culture, and life-stage transitions that strengthen families across generations." },
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
  { label: "Physiological Needs", body: "Food insecurity, short-term housing needs, clothing, healthcare." },
  { label: "Healthy Environments & Safety", body: "Employment, health, housing sustainability." },
  { label: "Relationship", body: "Faith-based connection, spiritual development, domestic supports, community-building." },
  { label: "Self-Esteem", body: "Mental health services, small groups." },
  { label: "Self-Actualization", body: "Wealth-building, asset strategy, college and career, entrepreneurship." },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative" style={{ background: "var(--ivory)" }}>
        <div className="container-edge pt-14 md:pt-20 pb-14 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-5">Western Tidewater, Virginia</div>
            <h1
              className="text-[40px] sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Designing new opportunities for new beginnings.
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
              Jenesis CDC builds strong, sustainable communities through education,
              economic empowerment, health services, and strategic partnerships
              across the Western Tidewater region.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/programs" className="btn-primary">Explore Our Programs</Link>
              <Link to="/coalition" className="btn-outline">Join the Coalition</Link>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Serving young people, families, and communities across Virginia.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img src={hero} alt="Community members of Western Tidewater" className="h-full w-full object-cover" />
              </div>
              <div
                className="hidden md:block absolute -bottom-8 -left-8 w-[54%] aspect-[4/3] overflow-hidden rounded-xl border-4"
                style={{ borderColor: "var(--ivory)" }}
              >
                <img src={garden} alt="Community garden" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Build People / Partners / Capacity band */}
        <div style={{ background: "var(--burgundy)" }}>
          <div className="container-edge grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ivory/15">
            {[
              { k: "Build", v: "People", body: "Investing in young people, families, and leaders across generations." },
              { k: "Build", v: "Partners", body: "Aligning a coalition of education, faith, workforce, and civic leaders." },
              { k: "Build", v: "Capacity", body: "Designing systems and resources for long-term community well-being." },
            ].map((m) => (
              <div key={m.v} className="py-8 md:py-9 px-2 md:px-8 text-ivory">
                <div className="text-[10px] tracking-[0.22em] uppercase text-ivory/60">{m.k}</div>
                <div className="mt-1 text-2xl md:text-[28px]" style={{ fontFamily: "var(--font-display)" }}>{m.v}</div>
                <p className="mt-2 text-sm text-ivory/75 leading-relaxed max-w-xs">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / ABOUT */}
      <section className="py-20 md:py-24">
        <div className="container-edge grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="About Jenesis CDC"
              title="A nonprofit rooted in community, built for generations."
            />
          </div>
          <div className="md:col-span-7 md:pt-10">
            <p className="text-lg leading-relaxed text-foreground/85">
              Jenesis Community Development Corporation exists to ignite new
              beginnings by empowering communities through education, economic
              opportunity, and sustainable growth. We are committed to building
              stronger, more connected communities across the Western Tidewater
              Region, where people, resources, and opportunities come together
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
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section id="pillars" className="py-20 md:py-24" style={{ background: "var(--sand)" }}>
        <div className="container-edge">
          <SectionHeader
            title="Four Program Pillars"
            intro="Each pillar guides how Jenesis CDC invests in people, families, and long-term community well-being."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <article key={p.title} className="rounded-lg border bg-card p-7 h-full flex flex-col" style={{ borderColor: "var(--border)" }}>
                <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 md:py-24">
        <div className="container-edge grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <img src={family} alt="A multigenerational family" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-7">
            <SectionHeader
              title="Who We Are Called to Serve"
              intro="We walk alongside individuals and families facing challenging life experiences, connecting them with support and resources needed to overcome barriers and build stability."
            />
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {served.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--burgundy)" }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section id="programs" className="py-20 md:py-24" style={{ background: "var(--ivory)" }}>
        <div className="container-edge">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              title="Programs That Build Pathways"
              intro="From K-12 education to young adult leadership and family stability."
            />
            <Link to="/programs" className="btn-outline self-start">All Programs</Link>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              { title: "CEED Promise", img: education, hash: "ceed-promise", body: "CEED Promise supports K-12 students and families through educational ecosystems, community partnerships, mentoring, and empowerment pathways." },
              { title: "CEED Corps", img: youth, hash: "ceed-corps", body: "CEED Corps builds young adult leadership and workforce readiness through community-based engagement, training, mentorship, and real-world development opportunities." },
              { title: "Community Garden", img: garden, hash: "community-garden", body: "The Jenesis CDC Community Garden brings together education, nutrition, faith, and environmental stewardship through hands-on gardening experiences." },
            ].map((c) => (
              <Link key={c.title} to="/programs" hash={c.hash} className="block rounded-lg overflow-hidden border bg-card transition-colors hover:border-primary" style={{ borderColor: "var(--border)" }}>
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={c.img} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT MODEL */}
      <section id="impact" className="py-20 md:py-24" style={{ background: "var(--burgundy)", color: "var(--ivory)" }}>
        <div className="container-edge">
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">Points of Impact</div>
          <h2 className="text-3xl md:text-5xl max-w-3xl leading-[1.05] text-ivory" style={{ fontFamily: "var(--font-display)" }}>
            Bridging Resources, Breaking Barriers, Building Dreams
          </h2>
          <p className="mt-5 max-w-2xl text-ivory/75 leading-relaxed">
            A tiered framework that meets people where they are and builds toward long-term self-sufficiency.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {impactTiers.map((t, i) => (
              <div
                key={t.label}
                className="rounded-lg border border-ivory/15 p-6 h-full flex flex-col"
                style={{ background: "color-mix(in oklab, var(--ivory) 6%, transparent)" }}
              >
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-gold">
                  Level {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-xl text-ivory" style={{ fontFamily: "var(--font-display)" }}>{t.label}</h3>
                <p className="mt-2 text-sm text-ivory/75 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COALITION CTA */}
      <section className="py-20 md:py-24">
        <div className="container-edge grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img src={coalition} alt="Coalition partners meeting" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-6">
            <SectionHeader
              eyebrow="The Coalition"
              title="A coordinated network closing the opportunity gap."
              intro="Jenesis CDC brings together leaders from education, healthcare, economic development, social services, faith institutions, workforce organizations, and community leaders to align expertise around shared outcomes."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" search={{ interest: "Coalition Partner" } as never} className="btn-primary">Become a Coalition Partner</Link>
              <Link to="/coalition" className="btn-outline">About the Coalition</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FESTIVAL CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={festival} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.26 0.09 17 / 0.82) 0%, oklch(0.26 0.09 17 / 0.55) 100%)" }} />
        </div>
        <div className="relative container-edge py-20 md:py-24 text-ivory">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">September 12-13, 2026 in Franklin, VA</div>
            <h2 className="text-4xl md:text-5xl text-ivory" style={{ fontFamily: "var(--font-display)" }}>
              Riverfront Soul Festival 2026
            </h2>
            <p className="mt-5 text-lg text-ivory/85 leading-relaxed">
              An intergenerational cultural experience activating community
              connection, economic growth, and cultural preservation through music,
              art, wellness, and civic engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/festival" className="btn-gold">View Festival Details</Link>
              <Link to="/festival" hash="sponsor" className="btn-ghost-light">Sponsorship Opportunities</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
