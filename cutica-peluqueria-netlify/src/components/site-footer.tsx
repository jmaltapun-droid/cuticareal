import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-tinta text-hueso mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-grid place-items-center w-9 h-9 rounded-full border border-hueso/40">
              <span className="font-display text-lg leading-none -translate-y-[1px]">C</span>
            </span>
            <span className="font-display text-2xl">Cutica<span className="text-beige">.</span></span>
          </div>
          <p className="mt-4 max-w-sm text-hueso/70 text-sm leading-relaxed">
            Peluquería boutique en Recoleta. Cortes, color y tratamientos con productos Schwarzkopf y Authentic Beauty Concept.
          </p>
          <a
            href="https://instagram.com/cuticapeluqueria" target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-hueso/80 hover:text-hueso"
          >
            <Instagram className="w-4 h-4" /> @cuticapeluqueria
          </a>
        </div>

        <div>
          <p className="eyebrow text-beige">Visitá</p>
          <ul className="mt-4 space-y-3 text-sm text-hueso/80">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {SITE.address}</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> {SITE.phone}</li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                {SITE.hours.map((h) => (
                  <span key={h.d} className="block">{h.d}: {h.h}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-beige">Navegá</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-hueso/80 hover:text-hueso">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-hueso/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-hueso/50">
          <span>© {new Date().getFullYear()} Cutica Peluquería. Todos los derechos reservados.</span>
          <span>Hecho con cariño en Buenos Aires.</span>
        </div>
      </div>
    </footer>
  );
}
