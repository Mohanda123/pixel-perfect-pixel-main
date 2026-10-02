import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer, FloatingActions } from "@/components/site/Sections";
import { whyDetails } from "@/lib/offerings";

export const Route = createFileRoute("/why-ssm/")({
  head: () => ({ meta: [
    { title: "Why SSM | SSM Tuition Centre" },
    { name: "description", content: "Discover the teaching approach at SSM Tuition Centre: individual attention, regular practice, online classes and home tuition." },
    { property: "og:title", content: "Why SSM | SSM Tuition Centre" },
    { property: "og:description", content: "Explore the reasons families choose SSM Tuition Centre in Dharmapuri." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WhyIndex,
});

function WhyIndex() {
  return <div className="pb-20 sm:pb-0"><Nav /><main>
    <section className="bg-secondary pt-28 pb-16 sm:pt-36"><div className="mx-auto max-w-6xl px-5"><p className="text-xs font-bold uppercase text-royal">The SSM approach</p><h1 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">Why SSM</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Patient teaching, regular practice and attention to each learner. Discover how we support students in and beyond the classroom.</p></div></section>
    <section className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 sm:py-24">{whyDetails.map((item) => <Link key={item.slug} to={`/why-ssm/${item.slug}`} className="group flex flex-col rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]"><h2 className="text-xl font-semibold text-primary">{item.title}</h2><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.intro}</p><span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-royal">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</section>
  </main><Footer /><FloatingActions /></div>;
}
