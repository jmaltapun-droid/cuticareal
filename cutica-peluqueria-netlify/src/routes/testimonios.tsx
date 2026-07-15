import { createFileRoute } from "@tanstack/react-router";
import { TESTIMONIALS } from "@/lib/content";
import { CtaRow } from "@/components/marks";

export const Route = createFileRoute("/testimonios")({
  head: () => ({
    meta: [
      { title: "Testimonios · Cutica Peluquería Recoleta" },
      { name: "description", content: "Reseñas reales de clientes de Cutica Peluquería en Google Maps." },
      { property: "og:title", content: "Testimonios · Cutica" },
      { property: "og:description", content: "Lo que dicen quienes ya vinieron." },
      { property: "og:url", content: "/testimonios" },
    ],
    links: [{ rel: "canonical", href: "/testimonios" }],
  }),
  component: TestimoniosPage,
});

function TestimoniosPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-14">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Testimonios</p>
          <h1 className="mt-4 text-5xl md:text-7xl leading-[1.02] text-tinta">
            Lo que dicen quienes <em className="text-bordo not-italic">ya vinieron</em>.
          </h1>
          <p className="mt-6 text-lg text-tinta/70">Todas las reseñas son públicas y verificables en Google Maps.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="p-8 rounded-2xl bg-crema border border-border">
              <div className="text-bordo text-lg tracking-[0.2em]">★★★★★</div>
              <blockquote className="mt-4 font-display text-xl md:text-2xl text-tinta leading-snug">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-bordo text-hueso font-display">
                  {t.name.charAt(0)}
                </span>
                <div className="text-sm">
                  <div className="text-tinta font-semibold">{t.name}</div>
                  <div className="text-tinta/50 text-xs">{t.when} · Google</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="container-x mt-16">
          <div className="p-10 md:p-14 rounded-[2rem] bg-tinta text-hueso text-center">
            <h2 className="text-3xl md:text-4xl">¿Querés ser el próximo?</h2>
            <p className="mt-3 text-hueso/70 max-w-lg mx-auto">Reservá tu turno y contanos qué te gustaría cambiar del pelo.</p>
            <div className="mt-8 flex justify-center"><CtaRow variant="dark" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
