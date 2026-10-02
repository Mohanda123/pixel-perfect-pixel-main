import { useEffect, useRef, useState } from "react";

export const SITE = {
  name: "SSM Tuition Centre",
  tagline: "We Teach You Reach",
  address: "Avvavi Road, Valluvar Nagar, Oddapatti, Dharmapuri, Tamil Nadu",
  instagram: "https://instagram.com/ssm_tution._.centre",
  instagramHandle: "@ssm_tution._.centre",
  // Placeholder contact number — replace with the real centre number.
  phone: "+919000000000",
  phoneDisplay: "+91 90000 00000",
  whatsapp: "https://wa.me/919000000000",
  maps:
    "https://www.google.com/maps?q=Valluvar+Nagar+Oddapatti+Dharmapuri+Tamil+Nadu&output=embed",
};

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

export function useCounter(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start, duration]);

  return value;
}
