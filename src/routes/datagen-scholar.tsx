import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import datagen from "@/assets/datagen-logo.jpg";
import education from "@/assets/education.jpg";

export const Route = createFileRoute("/datagen-scholar")({
  head: () => ({
    meta: [
      { title: "DataGen Scholar | Jenesis CDC" },
      { name: "description", content: "This website was created through SaNDAI's DataGen Scholar Program — a Learn-and-Earn initiative preparing students for AI-shaped careers." },
      { property: "og:title", content: "Designed Through the DataGen Scholar Program" },
      { property: "og:description", content: "A Learn-and-Earn initiative preparing students for leadership in an AI-shaped economy." },
      { property: "og:image", content: education },
    ],
  }),
  component: DataGenPage,
});

const highlights = [
  { title: "Learn and Earn", body: "Students complete lessons, webinars, and projects while gaining paid learning experience." },
  { title: "Real-World Projects", body: "Scholars apply AI, data, design, and communication skills to practical client-focused work." },
  { title: "Career-Ready Skills", body: "The program emphasizes AI literacy, data fluency, digital problem-solving, and professional readiness." },
  { title: "Portfolio Development", body: "Students complete meaningful projects that demonstrate their skills to colleges, employers, and community partners." },
];

function DataGenPage() {
  return (
    <Layout>
      <section className="border-b" style={{ borderColor: "var(--border)", background: "var(--sand)" }}>
        <div className="container-edge py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <div className="eyebrow mb-5">DataGen Scholar</div>
            <h1 className="text-4xl md:text-[52px] leading-[1.05]" style={{ fontFamily: "var(--font-display)" }}>
              Designed Through the DataGen Scholar Program
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              This website was created through SaNDAI's DataGen Scholar Program, a
              Learn-and-Earn initiative that helps students build practical skills
              in AI, data, digital tools, and real-world project work.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <div className="rounded-xl bg-ivory border p-5 inline-flex items-center gap-4" style={{ borderColor: "var(--border)" }}>
              <img src={datagen} alt="DataGen Scholar" width={56} height={56} className="h-14 w-14 rounded-md object-contain" />
              <div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Powered by</div>
                <div className="text-base font-semibold" style={{ fontFamily: "var(--font-display)" }}>SaNDAI Cares</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageHeader
        eyebrow=""
        title={<>Student talent. Real-world impact. Community-centered design.</>}
        intro="Developed under SaNDAI Cares and supported by SaNDAI Global, the DataGen Scholar Program gives students structured learning, mentorship, credentials, and project experience. Scholars apply skills in AI literacy, data analytics, communication, and digital problem-solving to meaningful community-based work."
      />

      <section className="py-20 md:py-28">
        <div className="container-edge">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <div className="card-quiet h-full">
                  <div className="text-xs font-semibold tracking-[0.22em]" style={{ color: "var(--burgundy)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-3 text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>{h.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "var(--sand)" }}>
        <div className="container-edge">
          <Reveal>
            <div className="max-w-3xl">
              <div className="eyebrow mb-4">Website Designer</div>
              <h2 className="text-3xl md:text-[40px] leading-[1.1]" style={{ fontFamily: "var(--font-display)" }}>
                Uzair Nasir
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                Uzair Nasir is a DataGen Scholar and student at Thomas Jefferson
                High School for Science and Technology with interests in
                cybersecurity, engineering, applied technology, and AI-assisted
                development. He designed and built the Jenesis CDC website as a
                real-world DataGen Scholar project.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Web Design", "Applied Technology", "AI-Assisted Development", "Data Communication"].map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", background: "var(--ivory)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
