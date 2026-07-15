import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logoImg from "@/assets/cutica-logo.png";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-hueso/90 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]" : "bg-hueso/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x">
        {/* Row 1: logo + WhatsApp */}
        <div className="flex items-center justify-between gap-3 h-[60px] md:h-[68px]">
          <Link to="/" className="flex items-center gap-2 md:gap-2.5 group shrink-0" aria-label="Cutica Peluquería">
            <span className="relative inline-block w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-2 ring-bordo/40 shadow-[0_4px_12px_-4px_rgba(107,31,46,0.5)]">
              <img src={logoImg} alt="Cutica" className="w-full h-full object-cover" />
            </span>
            <span className="font-display text-lg md:text-xl tracking-tight text-tinta">
              Cutica<span className="text-bordo italic">.</span>
            </span>
          </Link>

          <a
            href={SITE.wa()}
            target="_blank" rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-bordo text-hueso px-3 md:px-4 py-2 md:py-2.5 rounded-full text-[13px] md:text-sm font-semibold hover:bg-bordo-deep transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2.2} />
            <span className="hidden sm:inline">Reservar por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>

        {/* Row 2: nav — wraps sin scroll */}
        <nav
          aria-label="Secciones"
          className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 pb-2 md:pb-3 -mt-1"
        >
          {NAV.map((n) => {
            const active = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-2.5 md:px-3.5 py-1.5 md:py-2 text-[12.5px] md:text-[14px] font-medium rounded-full transition-colors cursor-pointer hover:bg-crema hover:text-bordo ${
                  active ? "text-bordo bg-crema" : "text-tinta/75"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
