import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import coalition from "@/assets/coalition.jpg";

export const Route = createFileRoute("/coalition")({
  head: () => ({
    meta: [
      { title: "Coalition | Jenesis CDC" },
      { name: "description", content: "Join a powerful network of partners aligning expertise to close the opportunity gap." },
      { property: "og:title", content: "Be Part of the Coalition" },
      { property: "og:description", content: "Education, healthcare, workforce, faith, social services, and businesses united for shared outcomes." },
      { property: "og:image", content: coalition },
    ],
  }),
  component: CoalitionPage,
});

const categories = [
  "Education",
  "Economic Development",
  "Empowerment",
  "Healthcare",
  "Media",
  "Social Services",
  "Faith-Based Institutions",
  "Workforce Organizations",
  "Businesses",
  "Community Leaders",
];

function CoalitionPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="The Coalition"
        title="Be part of the Coalition."
        intro="A powerful network of businesses and organizations united by a shared mission: to close the opportunity gap by delivering the resources and support families need to thrive."
        image={coalition}
      />

      <section className="py-20 md:py-28">
        <div className="container-edge grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/85">
              Jenesis CDC brings together leaders from education, healthcare,
              economic development, media, social services, faith-based
              institutions, workforce organizations, businesses, and community
              leaders to form a coordinated system of support. Rather than
              working in silos, coalition partners align their expertise and
              resources to address challenges holistically.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Through community assessments and data management systems,
              Jenesis CDC identifies root-cause barriers to stability and
              develops practical action plans focused on sustainable outcomes.
              Each coalition partner plays a specific role, delivering targeted
              services that support educational achievement, economic mobility,
              health, and overall well-being.
            </p>
            <div className="mt-8">
              <Link to="/contact" search={{ interest: "Coalition Partner" } as never} className="btn-primary">Become a Coalition Partner</Link>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <div className="rounded-xl border p-8" style={{ borderColor: "var(--border)", background: "var(--sage)" }}>
              <div className="eyebrow mb-3">How it works</div>
              <ol className="space-y-4 text-sm text-foreground/90">
                <li><span className="font-semibold">01.</span> Community assessment identifies root-cause barriers.</li>
                <li><span className="font-semibold">02.</span> Partners align around specific outcomes.</li>
                <li><span className="font-semibold">03.</span> Services are coordinated through shared data.</li>
                <li><span className="font-semibold">04.</span> Families experience holistic, sustained support.</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="categories" className="py-20 md:py-24" style={{ background: "var(--sand)" }}>
        <div className="container-edge">
          <Reveal>
            <div className="eyebrow mb-4">Coalition Partner Categories</div>
            <h2 className="text-3xl md:text-5xl max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
              Ten sectors. One coordinated effort.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {categories.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <div className="rounded-md border bg-card px-5 py-5 text-sm font-medium hover:border-primary transition-colors" style={{ borderColor: "var(--border)" }}>
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
