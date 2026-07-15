import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader, CtaRow, CMark } from "@/components/marks";
import interior1 from "@/assets/cutica-image-6.png";
import storefront from "@/assets/cutica-image-5.png";
import fabianImg from "@/assets/fabian.png";
import fabyImg from "@/assets/faby.png";
import emilianoImg from "@/assets/emiliano.png";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros · Cutica Peluquería Recoleta" },
      { name: "description", content: "Conocé la historia de Cutica Peluquería en Recoleta. Faby, Fabián y equipo trabajando con línea Schwarzkopf y Authentic Beauty Concept." },
      { property: "og:title", content: "Sobre nosotros · Cutica" },
      { property: "og:description", content: "Un salón chico en Recoleta donde nadie es un turno más." },
      { property: "og:url", content: "/sobre-nosotros" },
    ],
    links: [{ rel: "canonical", href: "/sobre-nosotros" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-20">
        <div className="pointer-events-none absolute -left-40 -top-20 text-bordo/15">
          <CMark size={520} />
        </div>
        <div className="container-x grid lg:grid-cols-12 gap-12 items-end relative">
          <div className="lg:col-span-7">
            <p className="eyebrow">Sobre nosotros</p>
            <h1 className="mt-4 text-5xl md:text-7xl leading-[1.02] text-tinta">
              Un salón chico donde <em className="text-bordo not-italic">te reconocen</em> apenas entrás.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-tinta/70">
              Cutica está en Cerrito 1314 desde hace más de una década. Empezó como el proyecto personal de Faby y Fabián, y creció con clientes que vuelven año tras año.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img src={storefront} alt="Fachada de Cutica en Recoleta" className="rounded-2xl w-full aspect-square object-cover" />
          </div>
        </div>
      </section>

      <section className="section-y bg-crema">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <img src={interior1} alt="Recepción con productos Schwarzkopf" className="rounded-2xl w-full aspect-square object-cover" />
          </div>
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="La filosofía"
              title={<>Escuchar primero. <em className="text-bordo not-italic">Cortar después.</em></>}
            />
            <div className="mt-6 space-y-4 text-tinta/75 text-[17px] leading-relaxed">
              <p>Antes de agarrar la tijera preguntamos qué te gusta y qué no, cuánto tiempo le podés dedicar en casa y cómo suele caer tu pelo. Recién ahí proponemos.</p>
              <p>Trabajamos con Schwarzkopf Professional —línea alemana con la que sabemos exactamente qué esperar— y con Authentic Beauty Concept para tratamientos sin siliconas pesadas.</p>
              <p>Somos un equipo chico y esa es la idea. Nadie pasa a ser "el turno de las 4".</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeader eyebrow="El equipo" title={<>Detrás del salón</>} />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { n: "Fabián", r: "Colorista y dueño", d: "Especialista en color con línea alemana. Al frente del salón hace más de 15 años.", img: fabianImg },
              { n: "Faby", r: "Estilista", d: "Cortes y peinados que respetan la textura natural del pelo.", img: fabyImg },
              { n: "Emiliano", r: "Estilista", d: "Nuevo en el equipo, pero con el mismo cuidado y trato cercano.", img: emilianoImg },
            ].map((p) => (
              <div key={p.n} className="p-8 rounded-2xl border border-border bg-hueso">
                <img src={p.img} alt={p.n} className="w-20 h-20 rounded-full object-cover ring-2 ring-bordo/30" />
                <h3 className="mt-5 text-2xl text-tinta">{p.n}</h3>
                <p className="text-bordo text-sm mt-1">{p.r}</p>
                <p className="mt-3 text-tinta/70 text-[15px] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-tinta text-hueso">
        <div className="container-x max-w-3xl text-center">
          <p className="eyebrow text-beige">Vení a conocernos</p>
          <h2 className="mt-3 text-4xl md:text-5xl text-hueso leading-tight">Estamos a metros de <em className="text-beige not-italic">Av. Libertador</em>.</h2>
          <p className="mt-4 text-hueso/70">Cerrito 1314 · Recoleta, CABA. Reservá tu turno y coordinamos horario que te quede cómodo.</p>
          <div className="mt-8 flex justify-center"><CtaRow variant="dark" /></div>
        </div>
      </section>
    </>
  );
}
