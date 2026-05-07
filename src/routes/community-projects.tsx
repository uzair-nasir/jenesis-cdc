import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import garden from "@/assets/garden.jpg";
import education from "@/assets/education.jpg";
import youth from "@/assets/youth.jpg";

export const Route = createFileRoute("/community-projects")({
  head: () => ({
    meta: [
      { title: "Community Projects — Jenesis CDC" },
      { name: "description", content: "Community Garden, CEED Promise, and CEED Corps — practical projects that strengthen Western Tidewater." },
      { property: "og:title", content: "Community Projects — Jenesis CDC" },
      { property: "og:description", content: "Education, nutrition, faith, and stewardship in action." },
      { property: "og:image", content: garden },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Community Garden",
    img: garden,
    body: "The Jenesis CDC Community Garden brings together education, nutrition, faith, and environmental stewardship. Through hands-on gardening experiences, community members learn sustainable farming techniques, healthy food practices, and the value of shared responsibility.",
  },
  {
    title: "CEED Promise",
    img: education,
    body: "CEED Promise supports K–12 students and families through educational ecosystems, community partnerships, mentoring, and empowerment pathways.",
  },
  {
    title: "CEED Corps",
    img: youth,
    body: "CEED Corps builds young adult leadership and workforce readiness through community-based engagement, training, mentorship, and real-world development opportunities.",
  },
];

function ProjectsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Community Projects"
        title="Practical work, lasting community impact."
        intro="Our projects are designed to nourish, educate, and empower — turning local resources into long-term outcomes."
        image={garden}
      />
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group rounded-xl overflow-hidden border bg-card transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_oklch(0.2_0.05_17/0.35)]" style={{ borderColor: "var(--border)" }}>
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
