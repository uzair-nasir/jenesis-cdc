import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import datagen from "@/assets/datagen-logo.jpg";
import education from "@/assets/education.jpg";

export const Route = createFileRoute("/datagen-scholar")({
  head: () => ({
    meta: [
      { title: "DataGen Scholar — Jenesis CDC" },
      { name: "description", content: "This website was created through the SaNDAI DataGen Scholar Program — a Learn-and-Earn initiative preparing students for AI-shaped careers." },
      { property: "og:title", content: "Designed Through the DataGen Scholar Program" },
      { property: "og:description", content: "A Learn-and-Earn initiative preparing students for leadership in an AI-shaped economy." },
      { property: "og:image", content: education },
    ],
  }),
  component: DataGenPage,
});

const highlights = [
  { title: "Learn and Earn Model", body: "Students complete lessons, webinars, and projects while gaining paid learning experience." },
  { title: "Real-World Projects", body: "Scholars apply AI, data, design, and communication skills to practical client-focused work." },
  { title: "Career-Ready Skills", body: "The program emphasizes AI literacy, data fluency, digital problem-solving, and professional readiness." },
  { title: "Portfolio Development", body: "Students complete meaningful projects that demonstrate their skills to colleges, employers, and community partners." },
];

function DataGenPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="DataGen Scholar"
        title="Designed through the DataGen Scholar Program."
        intro="This website was created through the SaNDAI DataGen Scholar Program — a Learn-and-Earn initiative that prepares high school and early college students for leadership in an economy shaped by artificial intelligence, data, and digital technology."
      />

      <section className="py-20 md:py-28">
        <div className="container-edge grid lg:grid-cols-12 gap-12">
          {/* Left: program */}
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="rule" />
              <span className="eyebrow">About the Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Student talent. Real-world impact. Community-centered design.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              Developed under SaNDAI Cares and supported by SaNDAI Global, the
              DataGen Scholar Program helps students build practical skills
              through structured learning, mentorship, credentials, and
              real-world project experience. Students gain exposure to AI
              literacy, data analytics, career readiness, digital tools, and
              professional workflows while building portfolios that prepare
              them for college, internships, and the future workforce.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-md border p-5" style={{ borderColor: "var(--border)", background: "var(--sand)" }}>
                  <div className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>{h.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: designer card */}
          <Reveal className="lg:col-span-5" delay={120}>
            <aside className="rounded-xl border p-7 sticky top-28" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
              <div className="flex items-center gap-3">
                <img src={datagen} alt="DataGen Scholar" width={56} height={56} className="h-14 w-14 rounded-md object-contain bg-ivory" />
                <div>
                  <div className="eyebrow">Website Designer</div>
                  <div className="text-lg" style={{ fontFamily: "var(--font-display)" }}>Uzair Nasir</div>
                </div>
              </div>
              <div className="mt-6 h-px" style={{ background: "var(--gold)" }} />
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Role</dt>
                  <dd className="mt-1">Website Designer & DataGen Scholar</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">School</dt>
                  <dd className="mt-1">Thomas Jefferson High School for Science and Technology</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Focus Areas</dt>
                  <dd className="mt-1">Cybersecurity, engineering, applied technology, AI-assisted development</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Project Contribution</dt>
                  <dd className="mt-1">Designed and built the Jenesis CDC website as a DataGen Scholar project.</dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-foreground/85 leading-relaxed">
                Designed and developed by Uzair Nasir, a DataGen Scholar and student at Thomas Jefferson High School for Science and Technology. Uzair created this website as a real-world project applying skills in web design, applied technology, data communication, and AI-assisted development.
              </p>
              <a href="#" className="mt-6 btn-outline w-full">View Designer Profile</a>
            </aside>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
