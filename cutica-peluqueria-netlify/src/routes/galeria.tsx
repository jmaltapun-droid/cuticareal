import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lightbox } from "@/components/lightbox";
import img5 from "@/assets/cutica-image-5.png";
import img6 from "@/assets/cutica-image-6.png";
import img7 from "@/assets/cutica-image-7.png";
import img8 from "@/assets/cutica-image-8.png";
import img2 from "@/assets/cutica-image-2.png";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería · Cutica Peluquería Recoleta" },
      { name: "description", content: "Fotos del salón en Recoleta y resultados reales de nuestras clientas." },
      { property: "og:title", content: "Galería · Cutica" },
      { property: "og:description", content: "Fotos del salón y resultados reales." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

const IMAGES = [
  { src: img7, alt: "Fachada del salón con vidriera iluminada", tall: true },
  { src: img6, alt: "Recepción con línea Schwarzkopf" },
  { src: img8, alt: "Sala de espera con sillón y espejos" },
  { src: img5, alt: "Interior del salón, área de estilismo", tall: true },
  { src: img2, alt: "Cliente con balayage rubio, resultado real" },
  { src: img7, alt: "Detalle de la vidriera exterior" },
];

function GaleriaPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="pt-16 md:pt-24 pb-10">
        <div className="container-x">
          <p className="eyebrow">Galería</p>
          <h1 className="mt-4 text-5xl md:text-7xl leading-[1.02] max-w-3xl text-tinta">
            Nuestro salón. <em className="text-bordo not-italic">Trabajos reales.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-tinta/70">Tocá una foto para verla más grande.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {IMAGES.map((im, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className="block w-full break-inside-avoid overflow-hidden rounded-2xl group relative"
              >
                <img
                  src={im.src}
                  alt={im.alt}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-tinta/0 group-hover:bg-tinta/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <Lightbox images={IMAGES.map((i) => ({ src: i.src, alt: i.alt }))} initial={open} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
