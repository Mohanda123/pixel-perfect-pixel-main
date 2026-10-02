import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Target,
  PenLine,
  Trophy,
  Laptop,
  Home,
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  Plus,
  Minus,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SITE, useCounter, useReveal } from "@/lib/site";
import heroImg from "@/assets/hero-learning.jpg";
import classroomImg from "@/assets/classroom.jpg";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
          light ? "surface-glass-dark text-gold" : "bg-secondary text-primary"
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 text-3xl font-semibold sm:text-4xl md:text-[2.75rem] ${
          light ? "text-on-navy" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-on-navy/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="kolam-bg pointer-events-none absolute inset-0 opacity-[0.14]" />
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-60 h-72 w-72 rounded-full bg-royal/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            20+ Years of Shaping Futures
          </span>
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] text-primary sm:text-6xl">
            SSM Tuition <span className="text-gold-gradient">Centre</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-royal sm:text-2xl">
            {SITE.tagline}
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Personalized learning, expert guidance and consistent practice to help every
            student reach their academic goals.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#enroll"
              className="inline-flex items-center gap-2 rounded-full bg-navy-gradient px-7 py-3.5 text-sm font-semibold text-on-navy shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03]"
            >
              Enroll Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Explore Classes
            </a>
            <a
              href={`tel:+91 63690 05011`}
              className="inline-flex items-center gap-2 px-2 text-sm font-semibold text-royal underline-offset-4 hover:underline"
            >
              <Phone className="h-4 w-4" /> Call +91 63690 05011
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lift)]">
            <img
              src={heroImg}
              alt="Teacher guiding students at SSM Tuition Centre"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="animate-float surface-glass absolute -left-2 top-8 rounded-2xl px-4 py-3 sm:-left-8">
            <p className="text-lg font-bold text-primary">20+ Years</p>
            <p className="text-xs text-muted-foreground">Experience</p>
          </div>
          <div
            className="animate-float surface-glass absolute -right-2 top-1/2 rounded-2xl px-4 py-3 sm:-right-6"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="text-lg font-bold text-primary">100%</p>
            <p className="text-xs text-muted-foreground">Result Focus</p>
          </div>
          <div
            className="animate-float surface-glass absolute bottom-6 left-6 rounded-2xl px-4 py-3"
            style={{ animationDelay: "2.1s" }}
          >
            <p className="text-sm font-bold text-primary">Individual Attention</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value?: number; suffix?: string; label: string }) {
  const { ref, visible } = useReveal();
  const n = useCounter(value ?? 0, visible);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-bold text-on-navy sm:text-4xl">
        {value !== undefined ? `${n}${suffix ?? ""}` : suffix}
      </p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-on-navy/60">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5">
      <div className="bg-navy-gradient grid grid-cols-2 gap-8 rounded-[2rem] px-6 py-10 shadow-[var(--shadow-lift)] md:grid-cols-4">
        <Stat value={20} suffix="+" label="Years Experience" />
        <Stat value={100} suffix="%" label="Result Focus" />
        <Stat suffix="All Subjects" label="Covered" />
        <Stat suffix="Personalized" label="Attention" />
      </div>
    </section>
  );
}

const whyCards = [
  { icon: BookOpen, title: "All Subjects", text: "Complete academic support across major subjects." },
  { icon: Target, title: "Individual Attention", text: "Personalized guidance based on each student's learning needs." },
  { icon: PenLine, title: "Regular Practice", text: "Continuous tests, assignments and revision." },
  { icon: Trophy, title: "Result Focused", text: "Structured preparation focused on academic improvement." },
  { icon: Laptop, title: "Online Classes", text: "Learn from anywhere with online learning support." },
  { icon: Home, title: "Home Tuition", text: "Convenient home tuition options available." },
];

export function Why() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <SectionTitle
        eyebrow="Why SSM"
        title="Why Students Choose SSM"
        subtitle="Two decades of patient teaching, structured practice and genuine care for every learner."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyCards.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <div className="card-lift group h-full rounded-[1.5rem] border border-border bg-card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-royal transition-colors group-hover:bg-navy-gradient group-hover:text-gold">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const programs = [
  { name: "CBSE", points: ["Conceptual Learning", "Analytical Skills", "NCERT Focused"] },
  { name: "State Board", points: ["Syllabus-Specific Guidance", "Conceptual Clarity", "Exam-Oriented Practice"] },
  { name: "All Subjects", points: ["Complete academic support", "Regular revision", "Practice tests"] },
];

export function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden py-20 sm:py-28">
      <div className="kolam-bg pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Programs"
          title="Learning Programs"
          subtitle="Structured academic tracks shaped around the syllabus your child studies."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="card-lift flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-royal">
                  Program 0{i + 1}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-primary">{p.name}</h3>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enroll"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Explore Program <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const journey = [
  { n: "01", t: "Understand", d: "Build strong concepts." },
  { n: "02", t: "Practice", d: "Solve problems regularly." },
  { n: "03", t: "Improve", d: "Identify and correct weaknesses." },
  { n: "04", t: "Prepare", d: "Focused exam preparation." },
  { n: "05", t: "Achieve", d: "Reach academic goals." },
];

export function Journey() {
  return (
    <section className="bg-navy-gradient relative overflow-hidden py-20 sm:py-28">
      <div className="kolam-bg pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionTitle
          light
          eyebrow="The Journey"
          title={<span className="text-on-navy">The Student Journey</span>}
          subtitle="A clear five-step path every SSM student walks, term after term."
        />
        <div className="relative mt-14 grid gap-6 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />
          {journey.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} className="relative">
              <div className="surface-glass-dark h-full rounded-2xl p-6 text-center md:text-left">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-base font-bold text-navy-deep mx-auto md:mx-0">
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-on-navy">{s.t}</h3>
                <p className="mt-1.5 text-sm text-on-navy/65">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  "Experienced teaching",
  "Personal mentoring",
  "Regular assessment",
  "Doubt clarification",
  "Exam preparation",
  "Progress tracking",
];

export function Experience() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-lift)]">
            <img
              src={classroomImg}
              alt="Students learning in an SSM Tuition Centre classroom"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            About SSM
          </span>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            More Than Tuition.
            <br />A Complete Learning Journey.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            For over twenty years, SSM Tuition Centre has guided students in Dharmapuri with
            steady teaching, honest feedback and consistent practice — in the centre, at home,
            or online.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-primary"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {p}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const subjects = [
  { name: "Mathematics", pct: 92 },
  { name: "Science", pct: 88 },
  { name: "English", pct: 94 },
];

export function Progress() {
  const { ref, visible } = useReveal();
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
      <div className="grid items-center gap-10 rounded-[2rem] border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Progress Tracking
          </span>
          <h2 className="mt-5 text-3xl font-semibold text-primary sm:text-4xl">
            Every student&apos;s progress, clearly tracked.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Tests, assignments and revision are recorded so parents always know where their
            child stands. The panel shown here is an illustration of how progress is reviewed.
          </p>
        </div>

        <div ref={ref} className="rounded-[1.5rem] bg-navy-gradient p-6 shadow-[var(--shadow-lift)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Student Progress
          </p>
          <div className="mt-6 space-y-5">
            {subjects.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm text-on-navy">
                  <span>{s.name}</span>
                  <span className="font-semibold text-gold">{s.pct}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-gold transition-[width] duration-1000 ease-out"
                    style={{ width: visible ? `${s.pct}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="surface-glass-dark rounded-xl p-4">
              <p className="text-xs text-on-navy/60">Weekly Practice</p>
              <div className="mt-2 flex gap-1">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className="h-5 w-1.5 rounded-full bg-gold/80" />
                ))}
              </div>
            </div>
            <div className="surface-glass-dark rounded-xl p-4">
              <p className="text-xs text-on-navy/60">Tests Completed</p>
              <p className="mt-1 text-2xl font-bold text-on-navy">18 / 20</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const results = [
  { t: "Academic Improvement", d: "Steady gains built through consistent weekly work." },
  { t: "Exam Preparation", d: "Focused revision cycles ahead of every examination." },
  { t: "Regular Assessment", d: "Frequent tests that show exactly what to work on next." },
  { t: "Conceptual Understanding", d: "Teaching that starts from the idea, not the answer." },
];

export function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
      <SectionTitle
        eyebrow="Results"
        title="Results That Speak"
        subtitle="What consistent teaching and practice build over a school year."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {results.map((r, i) => (
          <Reveal key={r.t} delay={i * 80}>
            <div className="card-lift h-full rounded-[1.5rem] border border-border bg-card p-7">
              <Trophy className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-primary">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Admissions() {
  return (
    <section id="enroll" className="relative overflow-hidden bg-navy-gradient py-20 sm:py-28">
      <div className="kolam-bg pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="surface-glass-dark inline-flex rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
          Admissions Open
        </span>
        <h2 className="mt-6 text-4xl font-semibold leading-tight text-on-navy sm:text-5xl">
          Your Goal.
          <br />
          <span className="text-gold-gradient">Our Priority.</span>
        </h2>
        <p className="mt-5 text-base text-on-navy/70">
          Start your learning journey with SSM Tuition Centre.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
              href={`tel:+91 63690 05011`}
            
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
          >
            Enquire Now
          </a>
          <a
            href={`tel:+91 63690 05011`}
            className="surface-glass-dark inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-on-navy"
          >
            <Phone className="h-4 w-4" /> Call +91 63690 05011
          </a>
          <a
            href={`https://wa.me/916369005011`}
            target="_blank"
            rel="noreferrer"
            className="surface-glass-dark inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-on-navy"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp +91 63690 05011
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What classes do you teach?", a: "We support school students across all major classes, with teaching matched to each student's level." },
  { q: "Which syllabus do you cover?", a: "Both CBSE and State Board syllabi are covered, with syllabus-specific guidance and practice." },
  { q: "Is home tuition available?", a: "Yes. Home tuition is available for families who prefer learning at home." },
  { q: "Are online classes available?", a: "Yes. Online classes are available for students who cannot attend in person." },
  { q: "Do you provide individual attention?", a: "Yes. Teaching is personalized, and each student's progress is reviewed regularly." },
  { q: "How can I enquire about admission?", a: "Call us or message us on WhatsApp, and we will guide you through the admission steps." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
      <SectionTitle eyebrow="FAQ" title="Questions Parents Ask" />
      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="rounded-2xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-primary">{f.q}</span>
                {isOpen ? (
                  <Minus className="h-4 w-4 shrink-0 text-royal" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-royal" />
                )}
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 sm:pb-28">
      <SectionTitle eyebrow="Contact" title="Visit SSM Tuition Centre" />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="h-full rounded-[1.75rem] border border-border bg-card p-8">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <p className="text-base leading-relaxed text-primary">
                Avvai Road, Valluvar Nagar,
                <br />
                Oddapatti, Dharmapuri,
                <br />
                Tamil Nadu
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <a
                href={`tel:+91 63690 05011`}

                className="flex items-center gap-3 rounded-xl bg-navy-gradient px-5 py-4 text-sm font-semibold text-on-navy"
              >
                <Phone className="h-4 w-4" />  Call +91 63690 05011
              </a>
              <a
                href={`https://wa.me/916369005011`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border px-5 py-4 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-4 w-4 text-royal" />  WhatsApp +91 63690 05011
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border px-5 py-4 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <Instagram className="h-4 w-4 text-royal" /> {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full min-h-[320px] overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="SSM Tuition Centre location"
              src={SITE.maps}
              loading="lazy"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-on-navy">{SITE.name}</p>
          <p className="mt-1 text-sm text-gold">{SITE.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-on-navy/60">
            Avvai Road, Valluvar Nagar,
            <br />
            Oddapatti, Dharmapuri, Tamil Nadu
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-navy/50">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-on-navy/70">
            {[
              ["Home", "#home"],
              ["Programs", "#programs"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-navy/50">
            Social
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-on-navy/70 transition-colors hover:text-gold"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-on-navy/50">
        © 2026 {SITE.name}. All Rights Reserved.
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <>
      <a
         href={`https://wa.me/916369005011`}

        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-navy-gradient text-gold shadow-[var(--shadow-lift)] transition-transform hover:scale-105 sm:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <div className="surface-glass fixed inset-x-0 bottom-0 z-40 px-4 py-3 sm:hidden">
        <a
          href={`tel:+91 63690 05011`}
          target="_blank"
          rel="noreferrer"
          className="block rounded-full bg-navy-gradient py-3.5 text-center text-base font-semibold text-on-navy"
        >
          Enquire Now
        </a>
      </div>
    </>
  );
}
