import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, CtaRow } from "@/components/marks";
import { SERVICES } from "@/lib/content";
import { SITE } from "@/lib/site";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios · Cutica Peluquería Recoleta" },
      { name: "description", content: "Color, corte, tratamiento, brushing, alisado y peinados para eventos con línea alemana Schwarzkopf." },
      { property: "og:title", content: "Servicios · Cutica Peluquería" },
      { property: "og:description", content: "Color, corte, tratamiento, brushing, alisado y peinados para eventos." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-14">
        <div className="container-x">
          <p className="eyebrow">Servicios</p>
          <h1 className="mt-4 text-5xl md:text-7xl leading-[1.02] max-w-3xl text-tinta">
            Lo que hacemos, <em className="text-bordo not-italic">pensado para tu pelo real</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-tinta/70">
            Todos los servicios incluyen consulta previa, lavado y una charla honesta sobre cómo mantener el resultado en casa.
          </p>
          <div className="mt-8"><CtaRow secondary={{ to: "/", label: "Volver al inicio" }} /></div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <article key={s.slug} className="p-8 md:p-10 rounded-2xl bg-hueso border border-border hover:border-bordo/40 transition-colors flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-3xl text-tinta">{s.name}</h2>
                <span className="shrink-0 text-xs uppercase tracking-widest text-tinta/50 mt-2">{s.from}</span>
              </div>
              <p className="mt-4 text-tinta/70 text-[16px] leading-relaxed flex-1">{s.desc}</p>
              <a href={SITE.wa(`Hola, quiero consultar por: ${s.name}`)} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-bordo font-semibold">
                <MessageCircle className="w-4 h-4" /> Consultar por WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-crema">
        <div className="container-x text-center max-w-2xl mx-auto">
          <SectionHeader align="center" eyebrow="Antes de venir"
            title={<>Consulta gratis por <em className="text-bordo not-italic">WhatsApp</em>.</>}
            kicker="Si no sabés qué te queda mejor, contanos y te orientamos sin compromiso." />
          <div className="mt-8 flex justify-center"><CtaRow secondary={{ to: "/", label: "Volver al inicio" }} /></div>
        </div>
      </section>
    </>
  );
}
