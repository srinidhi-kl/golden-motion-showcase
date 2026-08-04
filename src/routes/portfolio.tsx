import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Gallery } from "@/components/site/Gallery";
import { Reels } from "@/components/site/Reels";
import { Collab } from "@/components/site/Collab";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Portfolio — Shri Nidhi | Modeling, Reels & Brand Collabs";
const description =
  "Browse Shri Nidhi's modeling portfolio: fashion, casual, traditional and lifestyle shoots, plus short-form reels and brand collaborations.";

export const Route = createFileRoute("/portfolio")({
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
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <Gallery />
        <Reels />
        <Collab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
