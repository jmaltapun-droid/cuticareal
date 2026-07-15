import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Scissors, Sparkles, Ear, MapPin, Clock, Plus } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { SERVICES, TESTIMONIALS, FAQ } from "@/lib/content";
import { CMark, Strand, SectionHeader, CtaRow } from "@/components/marks";
import { Reveal } from "@/components/reveal";
import interior2 from "@/assets/cutica-image-8.png";
import img5 from "@/assets/cutica-image-5.png";
import img6 from "@/assets/cutica-image-6.png";
import img7 from "@/assets/cutica-image-7.png";
import img2 from "@/assets/cutica-image-2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cutica Peluquería · Recoleta — Color, corte y tratamiento" },
      { name: "description", content: "Peluquería boutique en Recoleta. Color, corte, tratamiento y peinados con turnos personales y trato cercano." },
      { property: "og:title", content: "Cutica Peluquería · Recoleta — Color, corte y tratamiento" },
      { property: "og:description", content: "Peluquería boutique en Recoleta. Color, corte, tratamiento y peinados con turnos personales y trato cercano." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Reveal><GaleriaStrip /></Reveal>
      <Reveal><Diferenciales /></Reveal>
      <Reveal><ServiciosDestacados /></Reveal>
      <Reveal><TestimoniosStrip /></Reveal>
      <Reveal><SobreNosotrosPreview /></Reveal>
      <Reveal><FaqPreview /></Reveal>
      <Reveal><FinalCta /></Reveal>
    </>
  );
}

/* ————————————————————— HERO ————————————————————— */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hueso">
      {/* Signature C mark — the distinctive off-page ribbon */}
      <div className="pointer-events-none absolute -right-24 md:-right-40 -top-20 text-bordo/30">
        <CMark size={640} />
      </div>
      <div className="pointer-events-none absolute -left-10 top-1/2 text-madera/20 hidden md:block">
        <CMark size={220} />
      </div>

      <div className="container-x relative pt-14 md:pt-20 pb-20 md:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="rise-in inline-flex items-center gap-2 rounded-full border border-bordo/25 bg-hueso/70 backdrop-blur px-3 py-1.5 text-xs text-bordo">
            <span className="w-1.5 h-1.5 rounded-full bg-bordo" />
            Recoleta · Cerrito 1314
          </div>

          <h1 className="rise-in-2 mt-6 text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] text-tinta">
            Salís con el pelo <span className="text-bordo italic">que querías</span>, no con el que quedó bien.
          </h1>

          <p className="rise-in-3 mt-6 max-w-xl text-lg text-tinta/70">
            Color, corte y tratamiento con turnos personales en el corazón de Recoleta.
            Escuchamos primero, cortamos después.
          </p>

          <div className="rise-in-3 mt-8">
            <CtaRow />
          </div>

          <dl className="rise-in-3 mt-12 grid grid-cols-2 gap-6 max-w-sm">
            {[
              ["+15", "años en Recoleta"],
              ["4.9★", "en Google Maps"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl md:text-4xl text-bordo">{k}</dt>
                <dd className="mt-1 text-xs text-tinta/60 leading-tight">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-30px_rgba(107,31,46,0.4)] border border-bordo/10 bg-hueso">
            <iframe
              title="Ubicación de Cutica Peluquería en Recoleta"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block border-0"
            />
            <div className="p-5 border-t border-bordo/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bordo shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-display text-lg text-tinta leading-tight">Cerrito 1314, Recoleta</p>
                  <p className="text-xs text-tinta/60 mt-0.5">CABA · a metros de Av. Libertador</p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapsQuery)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold text-bordo hover:text-bordo-deep whitespace-nowrap"
                >
                  Cómo llegar →
                </a>
              </div>
              <div className="flex items-start gap-3 pt-4 border-t border-bordo/10">
                <Clock className="w-5 h-5 text-bordo shrink-0 mt-0.5" />
                <dl className="flex-1 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                  {SITE.hours.map((h) => (
                    <div key={h.d} className="contents">
                      <dt className="text-tinta/60">{h.d}</dt>
                      <dd className="text-tinta font-medium text-right">{h.h}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Strand className="text-bordo/40 h-4 w-full absolute bottom-0 left-0" />
    </section>
  );
}

/* ————————————————————— MINI GALLERY STRIP ————————————————————— */
function GaleriaStrip() {
  const shots = [
    { src: img7, alt: "Fachada del salón" },
    { src: img6, alt: "Recepción" },
    { src: img5, alt: "Área de estilismo" },
    { src: img2, alt: "Resultado real de clienta" },
  ];
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-x">
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
            <p className="eyebrow">Un vistazo al salón</p>
            <h3 className="mt-2 font-display text-2xl md:text-3xl text-tinta">Así se siente pasar por Cutica.</h3>
          </div>
          <Link to="/galeria" className="btn-ghost cursor-pointer text-tinta/80 hover:bg-crema hover:border-bordo/40">
            Ver galería <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {shots.map((s, i) => (
            <Link
              key={i}
              to="/galeria"
              className="group relative overflow-hidden rounded-2xl aspect-square block"
            >
              <img src={s.src} alt={s.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-tinta/0 group-hover:bg-tinta/25 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— DIFERENCIALES ————————————————————— */
function Diferenciales() {
  const items = [
    { icon: Ear, title: "Consultamos antes de tocar", text: "Charlamos tu rutina, tu piel y tu pelo real. Recién ahí decidimos color o corte." },
    { icon: Scissors, title: "Cortes que crecen bien", text: "Pensamos cómo va a quedar en dos meses, no solo hoy. Menos vueltas al salón." },
    { icon: Sparkles, title: "Productos premium", text: "Trabajamos con líneas profesionales — entre otras, la alemana Schwarzkopf — para color, brillo y cuidado que duran." },
  ];
  return (
    <section className="section-y bg-crema relative overflow-hidden">
      <div className="container-x">
        <SectionHeader
          eyebrow="Por qué Cutica"
          title={<>Cuidado real, sin recetas <em className="text-bordo not-italic">de manual</em>.</>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative p-8 rounded-2xl bg-hueso border border-border hover:border-bordo/40 transition-colors">
              <div className="grid place-items-center w-12 h-12 rounded-full bg-bordo/10 text-bordo">
                <it.icon className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 text-2xl text-tinta">{it.title}</h3>
              <p className="mt-3 text-tinta/70 text-[15px] leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— SERVICIOS ————————————————————— */
function ServiciosDestacados() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Servicios"
            title={<>Lo que hacemos, <em className="text-bordo not-italic">bien hecho</em>.</>}
            kicker="Cada servicio incluye lavado, secado y una charla honesta sobre mantenimiento en casa."
          />
          <Link to="/servicios" className="btn-ghost">Ver todos <ArrowRight className="w-4 h-4" /></Link>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.slice(0, 3).map((s) => (
            <article key={s.slug} className="group flex flex-col justify-between p-7 rounded-2xl bg-hueso border border-border hover:bg-crema transition-colors">
              <div>
                <h3 className="text-2xl text-tinta">{s.name}</h3>
                <p className="mt-3 text-tinta/70 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-tinta/50">{s.from}</span>
                <a href={SITE.wa(`Hola, quiero consultar por: ${s.name}`)} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-bordo text-sm font-semibold group-hover:gap-2 transition-all">
                  Consultar <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/servicios" className="btn-ghost">Ver todos los servicios <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— TESTIMONIOS ————————————————————— */
function TestimoniosStrip() {
  return (
    <section className="section-y bg-tinta text-hueso relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 -bottom-24 text-hueso/10">
        <CMark size={520} />
      </div>
      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="eyebrow text-beige">Lo que dicen</p>
          <h2 className="mt-3 text-3xl md:text-5xl leading-[1.05] text-hueso">
            Lo que cuentan <em className="text-beige not-italic">quienes ya pasaron por Cutica</em>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="p-6 rounded-2xl bg-hueso/[0.04] border border-hueso/10 flex flex-col">
              <div className="text-beige text-lg tracking-[0.2em]">★★★★★</div>
              <blockquote className="mt-4 text-hueso/85 text-[15px] leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-bordo text-hueso font-display">
                  {t.name.charAt(0)}
                </span>
                <div className="text-sm">
                  <div className="text-hueso">{t.name}</div>
                  <div className="text-hueso/50 text-xs">{t.when} · Google</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/testimonios" className="inline-flex items-center gap-2 border border-hueso/40 text-hueso px-5 py-3 rounded-full font-semibold hover:bg-hueso/10 transition-colors">
            Ver todos los testimonios <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— SOBRE PREVIEW ————————————————————— */
function SobreNosotrosPreview() {
  return (
    <section className="section-y">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src={interior2} alt="Interior del salón con sillón y espejos" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -right-6 -bottom-6 hidden md:block bg-bordo text-hueso rounded-2xl p-5 max-w-[220px] shadow-xl">
            <p className="font-display text-2xl leading-tight">Faby, Fabián y equipo</p>
            <p className="mt-2 text-hueso/70 text-xs">Al frente del salón desde el día uno.</p>
          </div>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <SectionHeader
            eyebrow="Sobre nosotros"
            title={<>Un salón chico donde nadie es <em className="text-bordo not-italic">un turno más</em>.</>}
          />
          <div className="mt-6 space-y-4 text-tinta/75 text-[17px] leading-relaxed max-w-xl">
            <p>Cutica nació en Recoleta con una idea simple: que salgas del salón con el pelo que imaginaste, y no con lo que "quedó" en el apuro.</p>
            <p>Faby, Fabián, Emiliano y el equipo trabajan con turnos personales y productos profesionales, con una filosofía clara: menos químicos innecesarios, más resultado real.</p>
          </div>
          <div className="mt-8">
            <Link to="/sobre-nosotros" className="inline-flex items-center gap-2 text-bordo font-semibold">
              Conocé al equipo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— FAQ PREVIEW ————————————————————— */
function FaqPreview() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y bg-crema">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="Preguntas frecuentes"
            title={<>Antes de <em className="text-bordo not-italic">reservar</em>.</>}
            kicker="Si te queda una duda, escribinos por WhatsApp — respondemos en el día."
          />
          <div className="mt-8">
            <a href={SITE.wa()} target="_blank" rel="noopener noreferrer" className="btn-primary hover:[&]:bg-bordo-deep">
              <MessageCircle className="w-4 h-4" /> Preguntar por WhatsApp
            </a>
          </div>
        </div>
        <div className="lg:col-span-8">
          <ul className="divide-y divide-tinta/10 border-y border-tinta/10">
            {FAQ.slice(0, 3).map((f, i) => (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full py-5 flex items-start justify-between text-left gap-4"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-lg md:text-xl text-tinta">{f.q}</span>
                  <span className={`shrink-0 grid place-items-center w-9 h-9 rounded-full border border-tinta/20 text-tinta transition-transform ${open === i ? "rotate-45 bg-bordo text-hueso border-bordo" : ""}`}>
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                {open === i && (
                  <div className="pb-6 pr-12 text-tinta/70 text-[15px] leading-relaxed">{f.a}</div>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link to="/faq" className="text-bordo font-semibold inline-flex items-center gap-1">Ver todas las preguntas <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— FINAL CTA ————————————————————— */
function FinalCta() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-bordo text-hueso p-10 md:p-16">
          <div className="pointer-events-none absolute -right-16 -top-24 text-hueso/15">
            <CMark size={520} />
          </div>
          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="eyebrow text-beige">Turnos limitados esta semana</p>
              <h2 className="mt-4 text-4xl md:text-6xl leading-[1.02] text-hueso">
                Reservá tu turno hoy.<br />
                <em className="text-beige not-italic">Respondemos en el día.</em>
              </h2>
              <p className="mt-5 text-hueso/75 max-w-lg">
                Contanos por WhatsApp qué servicio te interesa y coordinamos día y horario que te queden bien.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-3">
              <a href={SITE.wa()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-hueso text-bordo px-6 py-4 rounded-full font-semibold hover:bg-beige transition-colors min-h-[52px]">
                <MessageCircle className="w-5 h-5" /> Escribir por WhatsApp
              </a>
              <Link to="/contacto" className="inline-flex items-center justify-center gap-2 border border-hueso/40 text-hueso px-6 py-4 rounded-full font-semibold hover:bg-hueso/10 transition-colors min-h-[52px]">
                <MapPin className="w-5 h-5" /> Cómo llegar
              </Link>
              <p className="text-xs text-hueso/60 pt-2 flex items-center gap-2 justify-center">
                <Clock className="w-3.5 h-3.5" /> Mar–Vie 9 a 19 · Sáb 9 a 14
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
