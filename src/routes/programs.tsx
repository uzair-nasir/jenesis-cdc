import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import education from "@/assets/education.jpg";
import youth from "@/assets/youth.jpg";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | Jenesis CDC" },
      { name: "description", content: "CEED Promise, CEED Corps, and the Community Garden — programs that build pathways from education to economic mobility." },
      { property: "og:title", content: "Programs | Jenesis CDC" },
      { property: "og:description", content: "Programs that build pathways from K–12 education to young-adult workforce readiness." },
      { property: "og:image", content: education },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    name: "CEED Promise",
    img: education,
    body: "CEED Promise is a collaborative project where community organizations committed to the next generation of home-grown leadership invest in education and economic empowerment. CEED Promise leverages community networks and relationships to design inspiring teaching and learning experiences for K–12 students and their families.",
  },
  {
    name: "CEED Corps",
    img: youth,
    body: "CEED Corps is a collaborative project that leverages community networks and relationships to develop teaching and learning experiences that build talent pipelines for viable and sustainable economies. Young adults ages 18–25 participate in activities sponsored by partnering organizations that connect learning to asset-building and community development.",
  },
  {
    name: "Community Garden",
    img: garden,
    body: "The Jenesis CDC Community Garden is an interdisciplinary educational initiative designed to engage, empower, and nourish the community. Rooted in agricultural practice and biblical teaching, the garden creates a living classroom where participants learn sustainable farming, environmental stewardship, healthy eating, discipline, and community care.",
  },
];

const pathway = [
  "Parents · Grandparents · Caregivers",
  "Youth & Students",
  "Public School System",
  "Colleges & Careers",
  "Jenesis Households",
];

function ProgramsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Programs"
        title={<>Programs that build pathways.</>}
        intro="Each program is designed to interconnect, from K-12 education to young adult leadership and family stability."
        image={education}
      />

      <section className="py-20 md:py-28">
        <div className="container-edge space-y-24">
          {programs.map((p, i) => {
            const slug = p.name.toLowerCase().replace(/\s+/g, "-");
            return (
              <Reveal key={p.name}>
                <article id={slug} className="grid md:grid-cols-12 gap-10 items-center scroll-mt-28">
                  <div className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
                    <div className="aspect-[5/4] overflow-hidden rounded-xl">
                      <img src={p.img} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{p.name}</h2>
                    <p className="mt-5 text-base leading-relaxed text-foreground/85">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "var(--sand)" }}>
        <div className="container-edge">
          <h2 className="text-3xl md:text-5xl max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            From caregiver to community leader, a connected journey.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {pathway.map((step, i) => (
              <div key={step} className="rounded-lg border bg-card p-5 h-full" style={{ borderColor: "var(--border)" }}>
                <div className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--burgundy)" }}>
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-sm font-medium text-foreground leading-snug">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container-edge">
          <Link to="/contact" className="btn-primary">Partner with a Program</Link>
        </div>
      </section>
    </Layout>
  );
}
