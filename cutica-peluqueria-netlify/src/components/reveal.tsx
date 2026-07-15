import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  threshold?: number;
};

export function Reveal({ children, as: Tag = "div", className = "", delay = 0, threshold = 0.12 }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const delayCls = delay ? ` reveal-delay-${delay}` : "";
  return (
    <Tag ref={ref as never} className={`reveal${visible ? " is-visible" : ""}${delayCls} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
