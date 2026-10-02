import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  Hero,
  Stats,
  Why,
  Programs,
  Journey,
  Experience,
  Progress,
  Results,
  Admissions,
  Faq,
  Contact,
  Footer,
  FloatingActions,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SSM Tuition Centre, Dharmapuri | We Teach You Reach" },
      {
        name: "description",
        content:
          "20+ years of tuition in Dharmapuri. CBSE & State Board, all subjects, individual attention, home tuition and online classes.",
      },
      { property: "og:title", content: "SSM Tuition Centre | We Teach You Reach" },
      {
        property: "og:description",
        content: "CBSE & State Board tuition in Oddapatti, Dharmapuri. Admissions open.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="pb-20 sm:pb-0">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Why />
        <Programs />
        <Journey />
        <Experience />
        <Progress />
        <Results />
        <Admissions />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
