import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/react-start";

const KNOWLEDGE = `
ORGANIZATION
Jenesis Community Development Corporation (Jenesis CDC) is a nonprofit community development organization serving the Western Tidewater region of Virginia. Jenesis CDC builds strong, sustainable communities through education, economic empowerment, health services, and strategic partnerships.

MISSION
Build strong, sustainable communities by supporting and investing in resilient young people and families who need educational, economic, and health services to transform adversity into a prosperous legacy.

VISION
Strong, sustainable communities across Virginia through strategic investments in education, economic empowerment, and health services.

FOUR PROGRAM PILLARS
- Generational Health: mental, spiritual, and physical wellness moving individuals and families from instability toward wholeness.
- Generational Wealth: housing, entrepreneurship, career development, and asset-building pathways for long-term economic mobility.
- Generational Legacy: education, strategic civic planning, and leadership development that prepare the next generation to lead.
- Generational Transitions: support for estates, family life, culture, and life-stage transitions that strengthen families across generations.

WHO JENESIS CDC SERVES
- School-age children in public schools
- Foster care children and aged-out young adults
- Economically disadvantaged families
- Returning citizens
- Unhoused families
- Children of senior-age guardians

PROGRAMS
CEED Promise: supports K-12 students and families through educational ecosystems, community partnerships, mentoring, and empowerment pathways.
CEED Corps: builds young adult leadership and workforce readiness through community-based engagement, training, mentorship, and real-world development opportunities.
Community Garden: brings together education, nutrition, faith, and environmental stewardship through hands-on gardening experiences.

COALITION
The Coalition is a network of businesses and organizations united by a shared mission to close the opportunity gap by delivering resources and support families need to thrive. Jenesis CDC brings together leaders from education, healthcare, economic development, media, social services, faith-based institutions, workforce organizations, businesses, and community leaders.

POINTS OF IMPACT
- Physiological Needs: food insecurity, short-term housing needs, clothing, healthcare
- Healthy Environments and Safety: employment, health, housing sustainability
- Relationship: faith-based connection, spiritual development, domestic supports, community-building
- Self-Esteem: mental health services, small groups
- Self-Actualization: wealth-building, asset strategy, college and career, entrepreneurship

RIVERFRONT SOUL FESTIVAL
Riverfront Soul Festival 2026 takes place September 12-13, 2026 in Franklin, Virginia. It is an intergenerational cultural experience focused on community connection, economic growth, cultural preservation, music, art, wellness, civic education, and storytelling.

FESTIVAL EXPERIENCE AREAS
Music Stage, Artist Village, Wellness Pavilion, Taste of Franklin, Civic Education, Storytelling Circles.

FESTIVAL SPONSORSHIP TIERS
- Title Sponsor: $20,000
- Gold Sponsor: $7,500
- Silver Sponsor: $3,500
- Bronze Sponsor: $1,500
- Community Sponsor: $500
- Custom sponsorships available for youth programming, wellness initiatives, and community engagement activations.

CONTACT
Email: jenesiscdc@gmail.com
Region: Western Tidewater, Virginia (centered in Franklin and surrounding communities).

WEBSITE CREDIT
This website was designed by Uzair Nasir.
`.trim();

const SYSTEM_PROMPT = `You are Jenesis Guide, the community information assistant for Jenesis CDC. Answer questions only using the provided Jenesis CDC website knowledge base below. Keep answers concise (under 90 words), clear, and warm. If the answer is not clearly in the knowledge base, reply exactly: "I may not have that information yet. Please contact Jenesis CDC directly at jenesiscdc@gmail.com." Do not invent facts. Do not answer questions unrelated to Jenesis CDC. Do not use emojis or markdown headings.

KNOWLEDGE BASE:
${KNOWLEDGE}`;

type ChatMsg = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = (await request.json()) as { messages?: ChatMsg[] };
          const messages = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
          if (messages.length === 0) {
            return new Response(JSON.stringify({ error: "No message" }), { status: 400 });
          }

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(JSON.stringify({ error: "AI not configured" }), { status: 503 });
          }

          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Lovable-API-Key": apiKey,
              "X-Lovable-AIG-SDK": "raw",
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
              temperature: 0.2,
              max_tokens: 300,
            }),
          });

          if (!res.ok) {
            const status = res.status;
            return new Response(JSON.stringify({ error: `Upstream ${status}` }), { status: 502 });
          }
          const data = (await res.json()) as {
            choices?: { message?: { content?: string } }[];
          };
          const reply = data.choices?.[0]?.message?.content?.trim() ?? "";
          if (!reply) {
            return new Response(JSON.stringify({ error: "Empty reply" }), { status: 502 });
          }
          return Response.json({ reply });
        } catch (err) {
          console.error("chat error", err);
          return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
        }
      },
    },
  },
});
