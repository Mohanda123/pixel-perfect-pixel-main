import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer, FloatingActions } from "@/components/site/Sections";
import { SITE } from "@/lib/site";
import classroomImg from "@/assets/classroom.jpg";
import heroImg from "@/assets/hero-learning.jpg";

type Detail = {
  slug: string;
  title: string;
  intro: string;
  highlights: readonly string[];
  approach: string;
};

export function DetailPage({ detail, category, siblings }: { detail: Detail; category: "why" | "programs"; siblings: readonly Detail[] }) {
  const isProgram = category === "programs";
  const prefix = isProgram ? "/programs" : "/why-ssm";
  return (
    <div className="pb-20 sm:pb-0">
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-secondary pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="kolam-bg pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-6xl px-5">
            <Link to={isProgram ? "/programs" : "/why-ssm"} className="inline-flex items-center gap-2 text-sm font-semibold text-royal hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> {isProgram ? "All programs" : "Why SSM"}
            </Link>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-xs font-bold uppercase text-royal">{isProgram ? "Learning program" : "The SSM approach"}</p>
                <h1 className="mt-4 text-4xl font-semibold text-primary sm:text-5xl">{detail.title}</h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{detail.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
  href="https://wa.me/916369005011"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 rounded-full bg-navy-gradient px-6 py-3 text-sm font-semibold text-on-navy"
>
  <MessageCircle className="h-4 w-4" />
  WhatsApp: +91 63690 05011
</a>

<a
  href="tel:+916369005011"
  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary"
>
  <Phone className="h-4 w-4" />
  Call: +91 63690 05011
</a>
                </div>
              </div>
              <img src={isProgram ? heroImg : classroomImg} alt={isProgram ? "Teacher guiding students" : "Students learning together"} className="aspect-[4/3] w-full rounded-lg object-cover shadow-[var(--shadow-soft)]" />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase text-royal">What to expect</p>
              <h2 className="mt-3 text-3xl font-semibold text-primary">Learning with purpose</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{detail.approach}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {detail.highlights.map((item) => <li key={item} className="flex min-h-28 items-start gap-3 rounded-lg border border-border bg-card p-5 text-sm font-medium leading-relaxed text-primary"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal" />{item}</li>)}
            </ul>
          </div>
        </section>
        <section className="bg-secondary py-16 sm:py-20">
  <div className="mx-auto max-w-6xl px-5">
    <h2 className="text-2xl font-semibold text-primary">
      {isProgram ? "Explore other programs" : "Explore more reasons to choose SSM"}
    </h2>

    <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {siblings
        .filter((item) => item.slug !== detail.slug)
        .map((item) => (
          <a
            key={item.slug}
            href={`${prefix}/${item.slug}`}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 text-sm font-semibold text-primary transition-colors hover:bg-background"
          >
            <span>{item.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-royal" />
          </a>
        ))}
    </div>
  </div>
</section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
