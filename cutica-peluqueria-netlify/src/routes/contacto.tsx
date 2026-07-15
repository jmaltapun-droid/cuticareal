import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock, MessageCircle, Check, Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Cutica Peluquería Recoleta" },
      { name: "description", content: "Cerrito 1314, Recoleta, CABA. Reservá por WhatsApp al +54 9 11 6601 7417 o escribinos desde el formulario." },
      { property: "og:title", content: "Contacto · Cutica" },
      { property: "og:description", content: "Cerrito 1314, Recoleta. Reservá tu turno." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", msg: "" });

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = `Hola Cutica, soy ${form.name}. Mi contacto: ${form.contact}. ${form.msg}`;
    window.open(SITE.wa(text), "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="pt-16 md:pt-24 pb-14">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Contacto</p>
          <h1 className="mt-4 text-5xl md:text-7xl leading-[1.02] text-tinta">
            Reservá tu turno o <em className="text-bordo not-italic">pasá a saludar</em>.
          </h1>
          <p className="mt-6 text-lg text-tinta/70">
            Lo más rápido es WhatsApp: respondemos el mismo día en horario del salón.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <a href={SITE.wa()} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-6 rounded-2xl bg-bordo text-hueso hover:bg-bordo-deep transition-colors">
              <div className="flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-hueso/15">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-display text-xl">WhatsApp</div>
                  <div className="text-hueso/70 text-sm">Respuesta en el día</div>
                </div>
              </div>
              <span className="text-sm font-semibold">Abrir →</span>
            </a>

            <div className="p-6 rounded-2xl border border-border bg-hueso">
              <ContactRow icon={<Phone className="w-4 h-4" />} title="Teléfono" value={SITE.phone} href={`tel:${SITE.phoneDigits}`} />
              <ContactRow icon={<MapPin className="w-4 h-4" />} title="Dirección" value={SITE.address} href={`https://maps.google.com/?q=${encodeURIComponent(SITE.mapsQuery)}`} />
              <ContactRow icon={<Instagram className="w-4 h-4" />} title="Instagram" value="@cuticapeluqueria" href="https://instagram.com/cuticapeluqueria" />
              <div className="flex items-start gap-3 py-4">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-crema text-bordo mt-1"><Clock className="w-4 h-4" /></span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-tinta/50">Horarios</div>
                  <div className="mt-1 text-sm text-tinta">
                    {SITE.hours.map((h) => (
                      <div key={h.d}>{h.d}: <span className="text-tinta/60">{h.h}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={submit} className="p-8 md:p-10 rounded-2xl bg-crema">
              <h2 className="font-display text-3xl text-tinta">Escribinos</h2>
              <p className="mt-2 text-tinta/70 text-sm">Solo lo esencial. Te contactamos por el medio que elijas.</p>

              <div className="mt-6 grid gap-4">
                <Field label="Tu nombre" required>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg bg-hueso border border-border focus:border-bordo focus:outline-none" placeholder="María" />
                </Field>
                <Field label="Teléfono o email" required>
                  <input required value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg bg-hueso border border-border focus:border-bordo focus:outline-none" placeholder="11 5555 5555" />
                </Field>
                <Field label="¿En qué te podemos ayudar?" required>
                  <textarea required rows={4} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-hueso border border-border focus:border-bordo focus:outline-none resize-none"
                    placeholder="Quiero un balayage para el viernes a la tarde…" />
                </Field>
              </div>

              <button type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-bordo text-hueso px-6 py-4 rounded-full font-semibold hover:bg-bordo-deep transition-colors min-h-[52px]">
                {sent ? <><Check className="w-5 h-5" /> Enviado — abriendo WhatsApp</> : <><MessageCircle className="w-5 h-5" /> Enviar por WhatsApp</>}
              </button>
              <p className="mt-3 text-xs text-tinta/50 text-center">Se abrirá WhatsApp con tu mensaje precargado.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="rounded-[2rem] overflow-hidden border border-border shadow-lg">
            <iframe
              title="Ubicación Cutica Peluquería"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-tinta/60 font-semibold">
        {label} {required && <span className="text-bordo">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function ContactRow({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
      className="flex items-center gap-3 py-4 border-b border-border last:border-b-0 hover:text-bordo transition-colors">
      <span className="grid place-items-center w-8 h-8 rounded-full bg-crema text-bordo">{icon}</span>
      <div>
        <div className="text-xs uppercase tracking-widest text-tinta/50">{title}</div>
        <div className="text-sm text-tinta mt-0.5">{value}</div>
      </div>
    </a>
  );
}
