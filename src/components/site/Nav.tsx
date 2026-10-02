import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { SITE } from "@/lib/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why SSM", href: "#why" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "surface-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-gradient text-gold">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-primary">
              {SITE.name}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {SITE.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#enroll"
            className="hidden rounded-full bg-navy-gradient px-5 py-2.5 text-sm font-semibold text-on-navy shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Enroll Now
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="surface-glass mx-4 mb-3 rounded-2xl p-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-primary transition-colors hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enroll"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-navy-gradient px-4 py-3 text-center text-base font-semibold text-on-navy"
          >
            Enroll Now
          </a>
        </div>
      )}
    </header>
  );
}
