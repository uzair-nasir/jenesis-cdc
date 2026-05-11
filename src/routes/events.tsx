import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import festival from "@/assets/festival.jpg";
import garden from "@/assets/garden.jpg";
import coalition from "@/assets/coalition.jpg";
import education from "@/assets/education.jpg";
import youth from "@/assets/youth.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Jenesis CDC" },
      { name: "description", content: "Festivals, garden volunteer days, coalition meetings, youth workshops, and family engagement events." },
      { property: "og:title", content: "Events | Jenesis CDC" },
      { property: "og:description", content: "Upcoming gatherings across Western Tidewater." },
      { property: "og:image", content: festival },
    ],
  }),
  component: EventsPage,
});

const events = [
  {
    img: festival,
    date: "September 12-13, 2026",
    location: "Franklin, Virginia",
    title: "Riverfront Soul Festival 2026",
    body: "A two-day intergenerational celebration of music, art, wellness, and civic engagement.",
    cta: "Festival Details",
    href: "/festival",
  },
  {
    img: garden,
    date: "Recurring · Saturdays",
    location: "Community Garden",
    title: "Community Garden Volunteer Days",
    body: "Hands-on stewardship: planting, harvesting, and learning sustainable practices together.",
    cta: "Volunteer",
    href: "/contact",
  },
  {
    img: coalition,
    date: "Quarterly",
    location: "Western Tidewater",
    title: "Coalition Partner Meetings",
    body: "Aligning education, healthcare, workforce, and faith leaders on shared community outcomes.",
    cta: "Join the Coalition",
    href: "/coalition",
  },
  {
    img: youth,
    date: "Monthly",
    location: "Various locations",
    title: "Youth Leadership Workshops",
    body: "Skill-building for emerging leaders ages 14–25 through mentorship and applied learning.",
    cta: "Get Involved",
    href: "/contact",
  },
  {
    img: education,
    date: "Ongoing",
    location: "Schools & community sites",
    title: "CEED Promise Family Engagement",
    body: "Caregivers and students working alongside mentors to design pathways to college and career.",
    cta: "Learn More",
    href: "/programs",
  },
];

function EventsPage() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Events"
        title="Where the work meets the community."
        intro="Gatherings, workshops, and celebrations that move our shared mission forward."
        image={festival}
      />
      <section className="py-20 md:py-28">
        <div className="container-edge grid gap-8 md:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={(i % 2) * 100}>
              <article className="group rounded-xl overflow-hidden border bg-card transition-shadow duration-300 hover:shadow-[0_18px_40px_-22px_oklch(0.2_0.05_17/0.35)] h-full flex flex-col" style={{ borderColor: "var(--border)" }}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={e.img} alt={e.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--burgundy)" }}>
                    {e.date} · {e.location}
                  </div>
                  <h3 className="mt-3 text-2xl" style={{ fontFamily: "var(--font-display)" }}>{e.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{e.body}</p>
                  <a href={e.href} className="mt-6 text-sm font-semibold tracking-wide hover:underline" style={{ color: "var(--burgundy)" }}>
                    {e.cta} →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
