import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Collab } from "@/components/site/Collab";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Brand Collabs — Shri Nidhi | Campaigns, Reels & Ad Films";
const description =
  "Collaborate with Shri Nidhi on fashion campaigns, ad films, short-form reels and product storytelling — plus the web builds that carry them.";

export const Route = createFileRoute("/collab")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollabPage,
});

function CollabPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <Collab />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
