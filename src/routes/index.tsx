import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Stats } from "@/components/site/Stats";
import { Collab } from "@/components/site/Collab";
import { Reels } from "@/components/site/Reels";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Shri Nidhi — Model, Actor & Senior Web Developer in Bangalore";
const description =
  "Portfolio of Shri Nidhi: Bangalore-based model & actor, content creator and senior web developer. Fashion shoots, brand collabs, reels and premium web builds.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Stats />
        <Collab />
        <Reels />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
