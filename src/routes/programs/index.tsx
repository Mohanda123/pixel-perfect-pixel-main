import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer, FloatingActions } from "@/components/site/Sections";
import { programDetails } from "@/lib/offerings";

export const Route = createFileRoute("/programs/")({
  head: () => ({ meta: [
    { title: "Learning Programs | SSM Tuition Centre" },
    { name: "description", content: "Explore CBSE, State Board and all-subject tuition programs at SSM Tuition Centre in Dharmapuri." },
    { property: "og:title", content: "Learning Programs | SSM Tuition Centre" },
    { property: "og:description", content: "CBSE, State Board and all-subject tuition support at SSM Tuition Centre." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProgramsIndex,
});

function ProgramsIndex() {
  return <div className="pb-20 sm:pb-0"><Nav /><main>
    <section className="bg-secondary pt-28 pb-16 sm:pt-36"><div className="mx-auto max-w-6xl px-5"><p className="text-xs font-bold uppercase text-royal">Learning at SSM</p><h1 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">Our Programs</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Choose support that fits your child's school syllabus and learning needs.</p></div></section>
    <section className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-3 sm:py-24">{programDetails.map((item) => <Link key={item.slug} to={`/programs/${item.slug}`} className="group flex flex-col rounded-lg border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]"><h2 className="text-2xl font-semibold text-primary">{item.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.intro}</p><ul className="mt-6 flex-1 space-y-3">{item.highlights.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />{point}</li>)}</ul><span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-royal">Explore Program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</section>
  </main><Footer /><FloatingActions /></div>;
}
