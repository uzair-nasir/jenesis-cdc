import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

const interests = [
  "Coalition Partner",
  "Sponsor",
  "Festival Question",
  "Volunteer",
  "Community Garden",
  "CEED Promise",
  "CEED Corps",
  "General Question",
] as const;

const searchSchema = z.object({
  interest: z.enum(interests).optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact | Jenesis CDC" },
      { name: "description", content: "Reach Jenesis CDC about coalition partnership, sponsorship, volunteering, and community programs." },
      { property: "og:title", content: "Contact | Jenesis CDC" },
      { property: "og:description", content: "Connect with our team about partnership and programs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { interest } = useSearch({ from: "/contact" });
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string>(interest ?? "Coalition Partner");

  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something together."
        intro="Tell us how you'd like to engage. We'll be in touch within a few business days."
      />

      <section className="py-20 md:py-28">
        <div className="container-edge grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-xl border p-10 text-center" style={{ borderColor: "var(--border)", background: "var(--sand)" }}>
                <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>Thank you.</h2>
                <p className="mt-3 text-muted-foreground">We've received your message and will respond shortly.</p>
              </div>
            ) : (
              <form
                className="rounded-xl border p-7 md:p-9 space-y-5"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" id="name" required />
                  <Field label="Email" id="email" type="email" required />
                </div>
                <Field label="Organization" id="org" />
                <div>
                  <label htmlFor="interest" className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {interests.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    maxLength={2000}
                    className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">Send Message</button>
              </form>
            )}
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="rounded-xl p-8" style={{ background: "var(--burgundy)", color: "var(--ivory)" }}>
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">Reach Us</div>
              <h2 className="mt-2 text-2xl text-ivory" style={{ fontFamily: "var(--font-display)" }}>Email</h2>
              <a href="mailto:jenesiscdc@gmail.com" className="mt-2 inline-block text-ivory/90 hover:text-gold">jenesiscdc@gmail.com</a>
              <div className="mt-8 h-px bg-ivory/20" />
              <div className="mt-6">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">Region</div>
                <p className="mt-2 text-ivory/85">Western Tidewater, Virginia, including Franklin and surrounding communities.</p>
              </div>
              <div className="mt-8 h-px bg-ivory/20" />
              <div className="mt-6">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">Response Time</div>
                <p className="mt-2 text-ivory/85">We typically respond within 2–3 business days.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
        {label}{required && " *"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        maxLength={200}
        className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        style={{ borderColor: "var(--border)" }}
      />
    </div>
  );
}
