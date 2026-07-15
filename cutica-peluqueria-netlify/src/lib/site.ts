export const SITE = {
  name: "Cutica Peluquería",
  short: "Cutica",
  address: "Cerrito 1314, Recoleta, CABA",
  phone: "+54 9 11 6601 7417",
  phoneDigits: "5491166017417",
  mapsQuery: "Cerrito 1314, C1014 Cdad. Autónoma de Buenos Aires",
  hours: [
    { d: "Martes a Viernes", h: "9:00 – 19:00" },
    { d: "Sábado", h: "9:00 – 14:00" },
    { d: "Domingo y Lunes", h: "Cerrado" },
  ],
  wa: (msg = "Hola, quiero consultar por un turno") =>
    `https://wa.me/5491166017417?text=${encodeURIComponent(msg)}`,
};

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/galeria", label: "Galería" },
  { to: "/testimonios", label: "Testimonios" },
  { to: "/faq", label: "Preguntas" },
  { to: "/contacto", label: "Contacto" },
] as const;
