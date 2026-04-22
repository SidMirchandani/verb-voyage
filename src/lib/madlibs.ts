import { translateNoun, translateVerbToParticiple, englishVerbParticiple } from "./vocab";

export type BlankKind = "NOUN" | "VERB";

export type Blank = {
  id: string;
  kind: BlankKind;
};

export type MadLib = {
  id: string;
  number: number;
  title: string;
  emoji: string;
  blanks: Blank[];
  buildEnglish: (v: Record<string, string>) => string;
  buildSpanish: (v: Record<string, string>) => string;
};

const tn = (w: string) => translateNoun(w || "");
const tv = (w: string) => translateVerbToParticiple(w || "");
const ev = (w: string) => englishVerbParticiple(w || "");
const en = (w: string) => (w?.trim() ? w.trim() : "___");

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
      `This morning, the ${en(v.n1)} has ${ev(v.v1)} my entire ${en(v.n2)} in the lab. The ${en(v.n3)} has ${ev(v.v2)} every single ${en(v.n4)} on the table. I have never ${ev(v.v3)} something so weird in my life. My teacher has already ${ev(v.v4)} the principal three times. Honestly, the ${en(v.n5)} has ${ev(v.v5)} all of us, and we still don't know how.`,
    buildSpanish: (v) =>
      `Esta mañana, el/la ${tn(v.n1)} ha ${tv(v.v1)} todo/a mi ${tn(v.n2)} en el laboratorio. El/La ${tn(v.n3)} ha ${tv(v.v2)} cada ${tn(v.n4)} de la mesa. Nunca he ${tv(v.v3)} algo tan raro en mi vida. Mi profesor/a ya ha ${tv(v.v4)} al director tres veces. Sinceramente, el/la ${tn(v.n5)} nos ha ${tv(v.v5)} a todos, y todavía no sabemos cómo.`,
  },
  {
    id: "pp-2",
    number: 2,
    emoji: "👽",
    title: "An Alien on the Internet",
    blanks: blanks(5, 4),
    buildEnglish: (v) =>
      `An ${en(v.n1)} from another ${en(v.n2)} has just ${ev(v.v1)} my email address. They have ${ev(v.v2)} a tiny ${en(v.n3)} into my laptop. I have ${ev(v.v3)} their message four times — I think they want my ${en(v.n4)}! My friend has ${ev(v.v4)} the entire ${en(v.n5)} trying to translate it. We have officially become famous online.`,
    buildSpanish: (v) =>
      `Un/a ${tn(v.n1)} de otro/a ${tn(v.n2)} acaba de ${tv(v.v1)} mi dirección de correo electrónico. Ha ${tv(v.v2)} un/a pequeño/a ${tn(v.n3)} en mi computadora portátil. He ${tv(v.v3)} su mensaje cuatro veces — ¡creo que quiere mi ${tn(v.n4)}! Mi amigo/a ha ${tv(v.v4)} todo/a el/la ${tn(v.n5)} intentando traducirlo. Oficialmente nos hemos vuelto famosos en línea.`,
  },
  {
    id: "pp-3",
    number: 3,
    emoji: "🔬",
    title: "The Weirdest Invention",
    blanks: blanks(4, 5),
    buildEnglish: (v) =>
      `Our scientist has finally ${ev(v.v1)} the world's strangest ${en(v.n1)}. She has ${ev(v.v2)} it using a broken ${en(v.n2)} and three ${en(v.n3)}s. The whole class has ${ev(v.v3)} the experiment with their phones. Even the principal has ${ev(v.v4)} a video to the school's website. Apparently, the invention has already ${ev(v.v5)} a small ${en(v.n4)}.`,
    buildSpanish: (v) =>
      `Nuestra científica por fin ha ${tv(v.v1)} el/la ${tn(v.n1)} más extraño/a del mundo. Lo/La ha ${tv(v.v2)} usando un/a ${tn(v.n2)} roto/a y tres ${tn(v.n3)}s. Toda la clase ha ${tv(v.v3)} el experimento con sus teléfonos. Incluso el director ha ${tv(v.v4)} un video al sitio web de la escuela. Aparentemente, el invento ya ha ${tv(v.v5)} un/a pequeño/a ${tn(v.n4)}.`,
  },
  {
    id: "pp-4",
    number: 4,
    emoji: "🌌",
    title: "News from the Telescope",
    blanks: blanks(5, 4),
    buildEnglish: (v) =>
      `Astronomers say a giant ${en(v.n1)} has ${ev(v.v1)} the planet ${en(v.n2)}. The strange ${en(v.n3)} has ${ev(v.v2)} so close that scientists have ${ev(v.v3)} it from their backyard. A famous ${en(v.n4)} has even ${ev(v.v4)} a photo of it eating a ${en(v.n5)}. The whole blogosphere has gone wild.`,
    buildSpanish: (v) =>
      `Los astrónomos dicen que un/a gigante ${tn(v.n1)} ha ${tv(v.v1)} el planeta ${tn(v.n2)}. El/La extraño/a ${tn(v.n3)} ha ${tv(v.v2)} tan cerca que los científicos lo/la han ${tv(v.v3)} desde su jardín. Un/a famoso/a ${tn(v.n4)} incluso ha ${tv(v.v4)} una foto de él/ella comiendo un/a ${tn(v.n5)}. Toda la blogosfera se ha vuelto loca.`,
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
      `Before the spaceship landed, the ${en(v.n1)} had already ${ev(v.v1)} our entire ${en(v.n2)}. By the time we woke up, a strange ${en(v.n3)} had ${ev(v.v2)} the kitchen. My dad had ${ev(v.v3)} every ${en(v.n4)} in the house twice. We had never ${ev(v.v4)} anything like that ${en(v.n5)} before. The aliens, apparently, had been planning it for years.`,
    buildSpanish: (v) =>
      `Antes de que aterrizara la nave, el/la ${tn(v.n1)} ya había ${tv(v.v1)} todo/a nuestro/a ${tn(v.n2)}. Para cuando nos despertamos, un/a extraño/a ${tn(v.n3)} había ${tv(v.v2)} la cocina. Mi papá había ${tv(v.v3)} cada ${tn(v.n4)} de la casa dos veces. Nunca habíamos ${tv(v.v4)} algo como aquel/aquella ${tn(v.n5)}. Los extraterrestres, aparentemente, lo habían planeado durante años.`,
  },
  {
    id: "ppf-2",
    number: 2,
    emoji: "📱",
    title: "The Lost Cell Phone",
    blanks: blanks(4, 5),
    buildEnglish: (v) =>
      `When I finally found my cell phone, someone had ${ev(v.v1)} a tiny ${en(v.n1)} inside it. They had ${ev(v.v2)} the screen with mysterious ${en(v.n2)}s. The strangest part: they had ${ev(v.v3)} a ${en(v.n3)} as my new wallpaper. My sister had already ${ev(v.v4)} the password three times that morning. By midnight, the phone had ${ev(v.v5)} into a small ${en(v.n4)}.`,
    buildSpanish: (v) =>
      `Cuando por fin encontré mi celular, alguien había ${tv(v.v1)} un/a pequeño/a ${tn(v.n1)} dentro. Habían ${tv(v.v2)} la pantalla con misteriosos ${tn(v.n2)}s. Lo más raro: habían ${tv(v.v3)} un/a ${tn(v.n3)} como mi nuevo fondo de pantalla. Mi hermana ya había ${tv(v.v4)} la contraseña tres veces esa mañana. Para la medianoche, el teléfono se había ${tv(v.v5)} en un/a pequeño/a ${tn(v.n4)}.`,
  },
  {
    id: "ppf-3",
    number: 3,
    emoji: "🧪",
    title: "Disaster Before Class",
    blanks: blanks(5, 5),
    buildEnglish: (v) =>
      `By the time the teacher arrived, the ${en(v.n1)} had ${ev(v.v1)} the whole laboratory. Some students had ${ev(v.v2)} a giant ${en(v.n2)} on purpose. Others had ${ev(v.v3)} every single ${en(v.n3)} in the closet. A nervous ${en(v.n4)} had even ${ev(v.v4)} the principal's coffee. We had never ${ev(v.v5)} the science teacher cry, but that day, a ${en(v.n5)} had finally done it.`,
    buildSpanish: (v) =>
      `Para cuando llegó la profesora, el/la ${tn(v.n1)} había ${tv(v.v1)} todo el laboratorio. Algunos estudiantes habían ${tv(v.v2)} un/a gigante ${tn(v.n2)} a propósito. Otros habían ${tv(v.v3)} cada ${tn(v.n3)} del armario. Un/a nervioso/a ${tn(v.n4)} incluso había ${tv(v.v4)} el café del director. Nunca habíamos ${tv(v.v5)} llorar al profesor de ciencias, pero aquel día, un/a ${tn(v.n5)} por fin lo había logrado.`,
  },
  {
    id: "ppf-4",
    number: 4,
    emoji: "🌠",
    title: "The Comet that Ate the Internet",
    blanks: blanks(4, 5),
    buildEnglish: (v) =>
      `Before anyone noticed, a comet had ${ev(v.v1)} the entire ${en(v.n1)}. It had ${ev(v.v2)} every ${en(v.n2)} in the city and even ${ev(v.v3)} the local ${en(v.n3)}. By morning, the news had ${ev(v.v4)} into a viral blog novel. The president had already ${ev(v.v5)} a giant ${en(v.n4)} to fight it, but apparently, it was too late.`,
    buildSpanish: (v) =>
      `Antes de que nadie se diera cuenta, un cometa había ${tv(v.v1)} todo/a el/la ${tn(v.n1)}. Había ${tv(v.v2)} cada ${tn(v.n2)} de la ciudad e incluso había ${tv(v.v3)} el/la ${tn(v.n3)} local. Para la mañana, la noticia se había ${tv(v.v4)} en una blogonovela viral. El presidente ya había ${tv(v.v5)} un/a gigante ${tn(v.n4)} para combatirlo, pero al parecer, ya era demasiado tarde.`,
  },
];

export const ALL_MADLIBS = [...PRESENT_PERFECT_MADLIBS, ...PAST_PERFECT_MADLIBS];

export function getMadLib(tense: "present" | "past", num: number): MadLib | undefined {
  const list = tense === "present" ? PRESENT_PERFECT_MADLIBS : PAST_PERFECT_MADLIBS;
  return list.find((m) => m.number === num);
}
