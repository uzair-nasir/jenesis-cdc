import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

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

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  organization: z.string().trim().max(150).optional(),
  interest: z.enum(interests),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact | Jenesis CDC" },
      {
        name: "description",
        content:
          "Reach Jenesis CDC about coalition partnership, sponsorship, volunteering, and community programs.",
      },
      { property: "og:title", content: "Contact | Jenesis CDC" },
      {
        property: "og:description",
        content: "Connect with our team about partnership and programs.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { interest } = useSearch({ from: "/contact" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    interest: (interest ?? "Coalition Partner") as (typeof interests)[number],
    message: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v as never }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = `Jenesis CDC Website Inquiry - ${result.data.interest}`;
    const bodyLines = [
      `Name: ${result.data.name}`,
      `Email: ${result.data.email}`,
      `Organization: ${result.data.organization || "(not provided)"}`,
      `Interest: ${result.data.interest}`,
      "",
      "Message:",
      result.data.message,
    ];
    const mailto = `mailto:jenesiscdc@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something together."
        intro="Tell us how you'd like to engage and we'll be in touch within a few business days."
      />

      <section className="py-20 md:py-28">
        <div className="container-edge grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            {submitted ? (
              <div
                className="rounded-xl border p-10"
                style={{ borderColor: "var(--border)", background: "var(--sand)" }}
              >
                <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                  Thank you.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Your email client should now be open with your message ready to send. If
                  nothing opened, please email us directly at{" "}
                  <a
                    href="mailto:jenesiscdc@gmail.com"
                    className="underline"
                    style={{ color: "var(--burgundy)" }}
                  >
                    jenesiscdc@gmail.com
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="rounded-xl border p-7 md:p-9 space-y-5"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    id="name"
                    required
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    error={errors.name}
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    error={errors.email}
                  />
                </div>
                <Field
                  label="Organization"
                  id="organization"
                  value={form.organization}
                  onChange={(v) => update("organization", v)}
                  error={errors.organization}
                />
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2"
                  >
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={(e) =>
                      update("interest", e.target.value)
                    }
                    className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {interests.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    maxLength={2000}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ borderColor: "var(--border)" }}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Open Email to Send
                  </button>
                  <p className="text-xs text-muted-foreground">
                    This will open your default email client addressed to jenesiscdc@gmail.com.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl p-8" style={{ background: "var(--burgundy)", color: "var(--ivory)" }}>
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">
                Reach Us
              </div>
              <h2 className="mt-2 text-2xl text-ivory" style={{ fontFamily: "var(--font-display)" }}>
                Email
              </h2>
              <a
                href="mailto:jenesiscdc@gmail.com"
                className="mt-2 inline-block text-ivory/90 hover:text-gold"
              >
                jenesiscdc@gmail.com
              </a>
              <div className="mt-8 h-px bg-ivory/20" />
              <div className="mt-6">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">
                  Region
                </div>
                <p className="mt-2 text-ivory/85">
                  Western Tidewater, Virginia, including Franklin and surrounding communities.
                </p>
              </div>
              <div className="mt-8 h-px bg-ivory/20" />
              <div className="mt-6">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold">
                  Response Time
                </div>
                <p className="mt-2 text-ivory/85">
                  We typically respond within 2 to 3 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
  value,
  onChange,
  error,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        maxLength={200}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        style={{ borderColor: "var(--border)" }}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
