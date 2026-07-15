import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "@/lib/content";
import { CtaRow } from "@/components/marks";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes · Cutica Peluquería" },
      { name: "description", content: "Reservas, productos, precios y formas de pago en Cutica Peluquería Recoleta." },
      { property: "og:title", content: "Preguntas frecuentes · Cutica" },
      { property: "og:description", content: "Resolvemos las dudas más comunes antes de tu visita." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="pt-16 md:pt-24 pb-14">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h1 className="mt-4 text-5xl md:text-7xl leading-[1.02] text-tinta">
            Antes de <em className="text-bordo not-italic">reservar</em>.
          </h1>
          <p className="mt-6 text-lg text-tinta/70">Si te queda una duda, escribinos por WhatsApp — respondemos en el día.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x max-w-3xl">
          <ul className="divide-y divide-tinta/10 border-y border-tinta/10">
            {FAQ.map((f, i) => (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full py-6 flex items-start justify-between text-left gap-4"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-xl md:text-2xl text-tinta">{f.q}</span>
                  <span className={`shrink-0 grid place-items-center w-10 h-10 rounded-full border border-tinta/20 text-tinta transition-transform ${open === i ? "rotate-45 bg-bordo text-hueso border-bordo" : ""}`}>
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                {open === i && (
                  <div className="pb-7 pr-12 text-tinta/70 text-[16px] leading-relaxed">{f.a}</div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-14 p-8 md:p-10 rounded-2xl bg-crema">
            <h2 className="text-2xl md:text-3xl text-tinta">¿Otra pregunta?</h2>
            <p className="mt-3 text-tinta/70">Contanos por WhatsApp y te respondemos en el día.</p>
            <div className="mt-6"><CtaRow secondary={{ to: "/", label: "Volver al inicio" }} /></div>
          </div>
        </div>
      </section>
    </>
  );
}
