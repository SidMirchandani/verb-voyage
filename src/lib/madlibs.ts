import { englishVerbParticiple } from "./vocab";

export type BlankKind = "NOUN" | "VERB";

export type Blank = {
  id: string;
  kind: BlankKind;
};

/** Per-blank English + Spanish words typed by the user. */
export type MadLibFillValues = {
  en: Record<string, string>;
  es: Record<string, string>;
};

export type MadLib = {
  id: string;
  number: number;
  title: string;
  emoji: string;
  blanks: Blank[];
  buildEnglish: (v: MadLibFillValues) => string;
  buildSpanish: (v: MadLibFillValues) => string;
};

const ev = (w: string) => englishVerbParticiple(w || "");
const en = (w: string) => (w?.trim() ? w.trim() : "___");
const esw = (w: string) => (w?.trim() ? w.trim() : "___");

// Blanks are all simple NOUN/VERB. Each madlib has 4-5 nouns + 4-5 verbs.
const blanks = (
  nouns: number,
  verbs: number,
): Blank[] => {
  const arr: Blank[] = [];
  for (let i = 1; i <= nouns; i++) arr.push({ id: `n${i}`, kind: "NOUN" });
  for (let i = 1; i <= verbs; i++) arr.push({ id: `v${i}`, kind: "VERB" });
  return arr;
};

// ---------------- PRESENT PERFECT ----------------
// have/has + past participle
export const PRESENT_PERFECT_MADLIBS: MadLib[] = [
  {
    id: "pp-1",
    number: 1,
    emoji: "🚀",
    title: "Lab Day Disaster",
    blanks: blanks(5, 5),
    buildEnglish: (v) =>
      `This morning, the ${en(v.en.n1)} has ${ev(v.en.v1)} my entire ${en(v.en.n2)} in the lab. The ${en(v.en.n3)} has ${ev(v.en.v2)} every single ${en(v.en.n4)} on the table. I have never ${ev(v.en.v3)} something so weird in my life. My teacher has already ${ev(v.en.v4)} the principal three times. Honestly, the ${en(v.en.n5)} has ${ev(v.en.v5)} all of us, and we still don't know how.`,
    buildSpanish: (v) =>
      `Esta mañana, el/la ${esw(v.es.n1)} ha ${esw(v.es.v1)} todo/a mi ${esw(v.es.n2)} en el laboratorio. El/La ${esw(v.es.n3)} ha ${esw(v.es.v2)} cada ${esw(v.es.n4)} de la mesa. Nunca he ${esw(v.es.v3)} algo tan raro en mi vida. Mi profesor/a ya ha ${esw(v.es.v4)} al director tres veces. Sinceramente, el/la ${esw(v.es.n5)} nos ha ${esw(v.es.v5)} a todos, y todavía no sabemos cómo.`,
  },
  {
    id: "pp-2",
    number: 2,
    emoji: "👽",
    title: "An Alien on the Internet",
    blanks: blanks(5, 4),
    buildEnglish: (v) =>
      `An ${en(v.en.n1)} from another ${en(v.en.n2)} has just ${ev(v.en.v1)} my email address. They have ${ev(v.en.v2)} a tiny ${en(v.en.n3)} into my laptop. I have ${ev(v.en.v3)} their message four times — I think they want my ${en(v.en.n4)}! My friend has ${ev(v.en.v4)} the entire ${en(v.en.n5)} trying to translate it. We have officially become famous online.`,
    buildSpanish: (v) =>
      `Un/a ${esw(v.es.n1)} de otro/a ${esw(v.es.n2)} acaba de ${esw(v.es.v1)} mi dirección de correo electrónico. Ha ${esw(v.es.v2)} un/a pequeño/a ${esw(v.es.n3)} en mi computadora portátil. He ${esw(v.es.v3)} su mensaje cuatro veces — ¡creo que quiere mi ${esw(v.es.n4)}! Mi amigo/a ha ${esw(v.es.v4)} todo/a el/la ${esw(v.es.n5)} intentando traducirlo. Oficialmente nos hemos vuelto famosos en línea.`,
  },
  {
    id: "pp-3",
    number: 3,
    emoji: "🔬",
    title: "The Weirdest Invention",
    blanks: blanks(4, 5),
    buildEnglish: (v) =>
      `Our scientist has finally ${ev(v.en.v1)} the world's strangest ${en(v.en.n1)}. She has ${ev(v.en.v2)} it using a broken ${en(v.en.n2)} and three ${en(v.en.n3)}s. The whole class has ${ev(v.en.v3)} the experiment with their phones. Even the principal has ${ev(v.en.v4)} a video to the school's website. Apparently, the invention has already ${ev(v.en.v5)} a small ${en(v.en.n4)}.`,
    buildSpanish: (v) =>
      `Nuestra científica por fin ha ${esw(v.es.v1)} el/la ${esw(v.es.n1)} más extraño/a del mundo. Lo/La ha ${esw(v.es.v2)} usando un/a ${esw(v.es.n2)} roto/a y tres ${esw(v.es.n3)}s. Toda la clase ha ${esw(v.es.v3)} el experimento con sus teléfonos. Incluso el director ha ${esw(v.es.v4)} un video al sitio web de la escuela. Aparentemente, el invento ya ha ${esw(v.es.v5)} un/a pequeño/a ${esw(v.es.n4)}.`,
  },
  {
    id: "pp-4",
    number: 4,
    emoji: "🌌",
    title: "News from the Telescope",
    blanks: blanks(5, 4),
    buildEnglish: (v) =>
      `Astronomers say a giant ${en(v.en.n1)} has ${ev(v.en.v1)} the planet ${en(v.en.n2)}. The strange ${en(v.en.n3)} has ${ev(v.en.v2)} so close that scientists have ${ev(v.en.v3)} it from their backyard. A famous ${en(v.en.n4)} has even ${ev(v.en.v4)} a photo of it eating a ${en(v.en.n5)}. The whole blogosphere has gone wild.`,
    buildSpanish: (v) =>
      `Los astrónomos dicen que un/a gigante ${esw(v.es.n1)} ha ${esw(v.es.v1)} el planeta ${esw(v.es.n2)}. El/La extraño/a ${esw(v.es.n3)} ha ${esw(v.es.v2)} tan cerca que los científicos lo/la han ${esw(v.es.v3)} desde su jardín. Un/a famoso/a ${esw(v.es.n4)} incluso ha ${esw(v.es.v4)} una foto de él/ella comiendo un/a ${esw(v.es.n5)}. Toda la blogosfera se ha vuelto loca.`,
  },
];

// ---------------- PAST PERFECT ----------------
// had + past participle
export const PAST_PERFECT_MADLIBS: MadLib[] = [
  {
    id: "ppf-1",
    number: 1,
    emoji: "🛸",
    title: "Before the Aliens Arrived",
    blanks: blanks(5, 4),
    buildEnglish: (v) =>
      `Before the spaceship landed, the ${en(v.en.n1)} had already ${ev(v.en.v1)} our entire ${en(v.en.n2)}. By the time we woke up, a strange ${en(v.en.n3)} had ${ev(v.en.v2)} the kitchen. My dad had ${ev(v.en.v3)} every ${en(v.en.n4)} in the house twice. We had never ${ev(v.en.v4)} anything like that ${en(v.en.n5)} before. The aliens, apparently, had been planning it for years.`,
    buildSpanish: (v) =>
      `Antes de que aterrizara la nave, el/la ${esw(v.es.n1)} ya había ${esw(v.es.v1)} todo/a nuestro/a ${esw(v.es.n2)}. Para cuando nos despertamos, un/a extraño/a ${esw(v.es.n3)} había ${esw(v.es.v2)} la cocina. Mi papá había ${esw(v.es.v3)} cada ${esw(v.es.n4)} de la casa dos veces. Nunca habíamos ${esw(v.es.v4)} algo como aquel/aquella ${esw(v.es.n5)}. Los extraterrestres, aparentemente, lo habían planeado durante años.`,
  },
  {
    id: "ppf-2",
    number: 2,
    emoji: "📱",
    title: "The Lost Cell Phone",
    blanks: blanks(4, 5),
    buildEnglish: (v) =>
      `When I finally found my cell phone, someone had ${ev(v.en.v1)} a tiny ${en(v.en.n1)} inside it. They had ${ev(v.en.v2)} the screen with mysterious ${en(v.en.n2)}s. The strangest part: they had ${ev(v.en.v3)} a ${en(v.en.n3)} as my new wallpaper. My sister had already ${ev(v.en.v4)} the password three times that morning. By midnight, the phone had ${ev(v.en.v5)} into a small ${en(v.en.n4)}.`,
    buildSpanish: (v) =>
      `Cuando por fin encontré mi celular, alguien había ${esw(v.es.v1)} un/a pequeño/a ${esw(v.es.n1)} dentro. Habían ${esw(v.es.v2)} la pantalla con misteriosos ${esw(v.es.n2)}s. Lo más raro: habían ${esw(v.es.v3)} un/a ${esw(v.es.n3)} como mi nuevo fondo de pantalla. Mi hermana ya había ${esw(v.es.v4)} la contraseña tres veces esa mañana. Para la medianoche, el teléfono se había ${esw(v.es.v5)} en un/a pequeño/a ${esw(v.es.n4)}.`,
  },
  {
    id: "ppf-3",
    number: 3,
    emoji: "🧪",
    title: "Disaster Before Class",
    blanks: blanks(5, 5),
    buildEnglish: (v) =>
      `By the time the teacher arrived, the ${en(v.en.n1)} had ${ev(v.en.v1)} the whole laboratory. Some students had ${ev(v.en.v2)} a giant ${en(v.en.n2)} on purpose. Others had ${ev(v.en.v3)} every single ${en(v.en.n3)} in the closet. A nervous ${en(v.en.n4)} had even ${ev(v.en.v4)} the principal's coffee. We had never ${ev(v.en.v5)} the science teacher cry, but that day, a ${en(v.en.n5)} had finally done it.`,
    buildSpanish: (v) =>
      `Para cuando llegó la profesora, el/la ${esw(v.es.n1)} había ${esw(v.es.v1)} todo el laboratorio. Algunos estudiantes habían ${esw(v.es.v2)} un/a gigante ${esw(v.es.n2)} a propósito. Otros habían ${esw(v.es.v3)} cada ${esw(v.es.n3)} del armario. Un/a nervioso/a ${esw(v.es.n4)} incluso había ${esw(v.es.v4)} el café del director. Nunca habíamos ${esw(v.es.v5)} llorar al profesor de ciencias, pero aquel día, un/a ${esw(v.es.n5)} por fin lo había logrado.`,
  },
  {
    id: "ppf-4",
    number: 4,
    emoji: "🌠",
    title: "The Comet that Ate the Internet",
    blanks: blanks(4, 5),
    buildEnglish: (v) =>
      `Before anyone noticed, a comet had ${ev(v.en.v1)} the entire ${en(v.en.n1)}. It had ${ev(v.en.v2)} every ${en(v.en.n2)} in the city and even ${ev(v.en.v3)} the local ${en(v.en.n3)}. By morning, the news had ${ev(v.en.v4)} into a viral blog novel. The president had already ${ev(v.en.v5)} a giant ${en(v.en.n4)} to fight it, but apparently, it was too late.`,
    buildSpanish: (v) =>
      `Antes de que nadie se diera cuenta, un cometa había ${esw(v.es.v1)} todo/a el/la ${esw(v.es.n1)}. Había ${esw(v.es.v2)} cada ${esw(v.es.n2)} de la ciudad e incluso había ${esw(v.es.v3)} el/la ${esw(v.es.n3)} local. Para la mañana, la noticia se había ${esw(v.es.v4)} en una blogonovela viral. El presidente ya había ${esw(v.es.v5)} un/a gigante ${esw(v.es.n4)} para combatirlo, pero al parecer, ya era demasiado tarde.`,
  },
];

export const ALL_MADLIBS = [...PRESENT_PERFECT_MADLIBS, ...PAST_PERFECT_MADLIBS];

export function getMadLib(tense: "present" | "past", num: number): MadLib | undefined {
  const list = tense === "present" ? PRESENT_PERFECT_MADLIBS : PAST_PERFECT_MADLIBS;
  return list.find((m) => m.number === num);
}
