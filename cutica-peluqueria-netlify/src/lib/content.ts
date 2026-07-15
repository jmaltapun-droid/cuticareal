export type Service = {
  slug: string;
  name: string;
  desc: string;
  from?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "color",
    name: "Color y balayage",
    desc: "Rubios que suman luz sin apagar tu piel. Trabajamos con línea alemana Schwarzkopf para un resultado brillante y parejo.",
    from: "desde 90 min",
  },
  {
    slug: "corte",
    name: "Corte personalizado",
    desc: "Un corte pensado para tu textura y tu rutina, no una tendencia genérica. Consultamos antes de agarrar la tijera.",
    from: "45–60 min",
  },
  {
    slug: "tratamiento",
    name: "Tratamiento Authentic Beauty",
    desc: "Reparación profunda sin siliconas pesadas. Ideal después de decoloración o para pelo castigado por plancha.",
    from: "30 min",
  },
  {
    slug: "brushing",
    name: "Brushing y peinado",
    desc: "Volumen prolijo para el día a día o un evento. Terminamos con protector térmico para que dure más.",
    from: "40 min",
  },
  {
    slug: "alisado",
    name: "Alisado progresivo",
    desc: "Domamos el frizz manteniendo el movimiento natural del pelo. Nada de tablitas tiesas.",
    from: "2–3 hs",
  },
  {
    slug: "novias",
    name: "Peinados para eventos",
    desc: "Novias, madrinas o egresadas: probamos el look antes del día para que llegues tranquila.",
    from: "con reserva",
  },
];

export type Testimonial = {
  name: string;
  when: string;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Eloísa Rapoport",
    when: "Hace 3 meses",
    text: "Me fui a cortar el pelo por primera vez con Emiliano y me trató super amable, respetuoso y delicado. Después me colorié con Fabián: escuchó lo que buscaba y me aconsejó de la mejor manera. Me fui súper cómoda.",
  },
  {
    name: "María Marta Sciarrotta",
    when: "Hace 5 años",
    text: "Excelente trato. Trabajan con productos alemanes que dejan el pelo suave, brillante y con un color alucinante. Gracias Faby y equipo.",
  },
  {
    name: "Fabiana Tatyosian",
    when: "Hace 11 meses",
    text: "Fabián es un genio, el más amoroso y el mejor profesional. Transmite esa armonía a sus empleados. Nunca tuve que esperar y me tratan con un cariño que me siento de la familia.",
  },
  {
    name: "Laura M.",
    when: "Hace 2 meses",
    text: "Voy hace años. Siempre salgo con el pelo que quería, no con el que ‘les quedó mejor’. Se toman el tiempo de charlar antes.",
  },
];

export const FAQ = [
  {
    q: "¿Necesito reservar turno o puedo ir sin cita?",
    a: "Recomendamos reservar con anticipación por WhatsApp al +54 9 11 6601 7417. Trabajamos con turnos para dedicarle a cada persona el tiempo que su pelo pide.",
  },
  {
    q: "¿Qué productos usan para el color?",
    a: "Trabajamos con Schwarzkopf Professional (línea alemana) y con la línea de cuidado Authentic Beauty Concept. Los elegimos por brillo, duración del color y respeto por la fibra capilar.",
  },
  {
    q: "¿Cuánto tarda un balayage o color completo?",
    a: "Entre 90 minutos y 3 horas según el largo, el punto de partida y el tono buscado. Antes de arrancar te damos una estimación exacta.",
  },
  {
    q: "¿Aceptan tarjeta?",
    a: "Sí, aceptamos tarjetas de crédito y débito, además de efectivo y transferencia. También podés dejar seña por Mercado Pago al reservar.",
  },
  {
    q: "¿Tienen estacionamiento cerca?",
    a: "Estamos en Cerrito 1314, a metros de Av. Libertador. Hay estacionamientos pagos en Cerrito y en Juncal, y varias líneas de colectivo y subte D (estación Tribunales) a pocas cuadras.",
  },
  {
    q: "¿Hacen peinados para novias fuera del salón?",
    a: "Sí, coordinamos peinados a domicilio para novias con reserva anticipada. Escribinos con la fecha y la zona y te pasamos disponibilidad.",
  },
];
