import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import family from "@/assets/family.jpg";
import town from "@/assets/town.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jenesis CDC" },
      { name: "description", content: "Jenesis CDC ignites new beginnings by empowering communities through education, economic opportunity, and sustainable growth." },
      { property: "og:title", content: "About Jenesis CDC" },
      { property: "og:description", content: "Mission, vision, and values of Jenesis Community Development Corporation." },
      { property: "og:image", content: family },
    ],
  }),
  component: AboutPage,
});

const values = [
  "We believe that on the other side of at-risk situations, there is thriving, not just surviving.",
  "We believe in building strong communities with radical love that transcends cultural and economic barriers.",
  "We believe that second chances demand better choices.",
];

function AboutPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Jenesis CDC"
        title={<>New beginnings, built together — across generations.</>}
        intro="Jenesis CDC exists to ignite new beginnings by empowering communities through education, economic opportunity, and sustainable growth."
        image={family}
      />

      <section className="py-20 md:py-28">
        <div className="container-edge grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
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
              environments that support, inspire, and equip young people to
              live and lead. Through community-driven action and
              cross-generational connection, Jenesis CDC is building a future
              rooted in purpose, wellness, and shared success.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <div className="rounded-xl border p-8" style={{ borderColor: "var(--border)", background: "var(--sand)" }}>
              <div className="eyebrow mb-3">Our Region</div>
              <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>Western Tidewater, Virginia</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Centered in Franklin and the surrounding communities, our work
                connects rural, suburban, and historically under-resourced
                neighborhoods.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="mission" className="py-20 md:py-24" style={{ background: "var(--sand)" }}>
        <div className="container-edge grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="card-quiet h-full">
              <div className="eyebrow mb-3">Mission</div>
              <p className="text-lg leading-relaxed text-foreground/90">
                The Jenesis CDC mission is to build strong, sustainable
                communities by supporting and investing in resilient young
                people and families who need educational, economic, and health
                services to transform adversity into a prosperous legacy.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-quiet h-full">
              <div className="eyebrow mb-3">Vision</div>
              <p className="text-lg leading-relaxed text-foreground/90">
                Jenesis CDC envisions a future where strong, sustainable
                communities thrive across the Commonwealth of Virginia. Through
                strategic investments in education, economic empowerment, and
                health services, we foster equitable opportunities that uplift
                individuals and families.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="served" className="py-20 md:py-28">
        <div className="container-edge">
          <Reveal>
            <div className="eyebrow mb-4">Core Values</div>
            <h2 className="text-3xl md:text-5xl max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
              What we believe shapes how we serve.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card-quiet h-full">
                  <div className="text-3xl text-primary leading-none" style={{ fontFamily: "var(--font-display)" }}>“</div>
                  <p className="mt-2 text-base leading-relaxed text-foreground/85">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={town} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "oklch(0.26 0.09 17 / 0.85)" }} />
        </div>
        <div className="relative container-edge py-20 text-ivory text-center">
          <h2 className="text-3xl md:text-4xl max-w-2xl mx-auto text-ivory" style={{ fontFamily: "var(--font-display)" }}>
            Help us build the next chapter of community life in Western Tidewater.
          </h2>
          <div className="mt-7 flex justify-center gap-3 flex-wrap">
            <Link to="/coalition" className="btn-gold">Join the Coalition</Link>
            <Link to="/contact" className="btn-ghost-light">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
