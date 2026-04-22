import type { WordKind } from "./vocab";
import { translateWord, normalizeVerbToParticiple } from "./vocab";

export type Blank = {
  id: string;
  kind: WordKind;
  label: string; // e.g. "an animal", "a verb (past participle)"
  hint?: string;
};

export type MadLib = {
  id: string;
  title: string;
  blanks: Blank[];
  // Functions return the assembled sentence given blank values
  buildEnglish: (v: Record<string, string>) => string;
  buildSpanish: (v: Record<string, string>) => string;
};

const cap = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// helpers to translate
const tn = (w: string) => translateWord(w, "noun");
const tv = (w: string) => translateWord(w, "verb");
const vEn = (w: string) => normalizeVerbToParticiple(w);

// ---------- PRESENT PERFECT MAD LIBS ----------
// Form: have/has + past participle
export const PRESENT_PERFECT_MADLIBS: MadLib[] = [
  {
    id: "pp-1",
    title: "The Wildest Monday",
    blanks: [
      { id: "noun1", kind: "noun", label: "an animal" },
      { id: "verb1", kind: "verb", label: "a verb (e.g. eat, dance)" },
      { id: "noun2", kind: "noun", label: "a food" },
      { id: "noun3", kind: "noun", label: "a place" },
    ],
    buildEnglish: (v) =>
      `This week my ${v.noun1 || "___"} has ${vEn(v.verb1)} three whole ${v.noun2 || "___"}s in the ${v.noun3 || "___"}!`,
    buildSpanish: (v) =>
      `¡Esta semana mi ${tn(v.noun1)} ha ${tv(v.verb1)} tres ${tn(v.noun2)}s enteros en el/la ${tn(v.noun3)}!`,
  },
  {
    id: "pp-2",
    title: "Grandma's Secret",
    blanks: [
      { id: "noun1", kind: "noun", label: "a person" },
      { id: "verb1", kind: "verb", label: "a verb" },
      { id: "noun2", kind: "noun", label: "an object" },
      { id: "noun3", kind: "noun", label: "a body part" },
    ],
    buildEnglish: (v) =>
      `My ${v.noun1 || "___"} has just ${vEn(v.verb1)} a giant ${v.noun2 || "___"} with their ${v.noun3 || "___"}.`,
    buildSpanish: (v) =>
      `Mi ${tn(v.noun1)} acaba de ${tv(v.verb1)} un/una ${tn(v.noun2)} gigante con su ${tn(v.noun3)}.`,
  },
  {
    id: "pp-3",
    title: "School Has Changed",
    blanks: [
      { id: "noun1", kind: "noun", label: "a person (job)" },
      { id: "verb1", kind: "verb", label: "a verb" },
      { id: "noun2", kind: "noun", label: "an animal" },
      { id: "noun3", kind: "noun", label: "an object" },
    ],
    buildEnglish: (v) =>
      `Our new ${v.noun1 || "___"} has ${vEn(v.verb1)} a ${v.noun2 || "___"} and turned it into a ${v.noun3 || "___"}.`,
    buildSpanish: (v) =>
      `Nuestro/a nuevo/a ${tn(v.noun1)} ha ${tv(v.verb1)} un/una ${tn(v.noun2)} y lo ha convertido en un/una ${tn(v.noun3)}.`,
  },
  {
    id: "pp-4",
    title: "Breaking News",
    blanks: [
      { id: "noun1", kind: "noun", label: "an animal" },
      { id: "verb1", kind: "verb", label: "a verb" },
      { id: "noun2", kind: "noun", label: "a vehicle or object" },
      { id: "noun3", kind: "noun", label: "a place" },
    ],
    buildEnglish: (v) =>
      `Scientists confirm: a tiny ${v.noun1 || "___"} has ${vEn(v.verb1)} the world's largest ${v.noun2 || "___"} all the way to the ${v.noun3 || "___"}.`,
    buildSpanish: (v) =>
      `Los científicos confirman: un/una pequeño/a ${tn(v.noun1)} ha ${tv(v.verb1)} el/la ${tn(v.noun2)} más grande del mundo hasta el/la ${tn(v.noun3)}.`,
  },
];

// ---------- PAST PERFECT MAD LIBS ----------
// Form: had + past participle
export const PAST_PERFECT_MADLIBS: MadLib[] = [
  {
    id: "ppf-1",
    title: "Before The Party Started",
    blanks: [
      { id: "noun1", kind: "noun", label: "a person" },
      { id: "verb1", kind: "verb", label: "a verb" },
      { id: "noun2", kind: "noun", label: "a food" },
      { id: "noun3", kind: "noun", label: "an object" },
    ],
    buildEnglish: (v) =>
      `By the time we arrived, my ${v.noun1 || "___"} had already ${vEn(v.verb1)} all the ${v.noun2 || "___"} with a ${v.noun3 || "___"}.`,
    buildSpanish: (v) =>
      `Para cuando llegamos, mi ${tn(v.noun1)} ya había ${tv(v.verb1)} todo el/la ${tn(v.noun2)} con un/una ${tn(v.noun3)}.`,
  },
  {
    id: "ppf-2",
    title: "The Forgotten Adventure",
    blanks: [
      { id: "noun1", kind: "noun", label: "an animal" },
      { id: "verb1", kind: "verb", label: "a verb" },
      { id: "noun2", kind: "noun", label: "a place" },
      { id: "noun3", kind: "noun", label: "an object" },
    ],
    buildEnglish: (v) =>
      `Before sunrise, the ${v.noun1 || "___"} had ${vEn(v.verb1)} all the way to the ${v.noun2 || "___"}, carrying a magical ${v.noun3 || "___"}.`,
    buildSpanish: (v) =>
      `Antes del amanecer, el/la ${tn(v.noun1)} había ${tv(v.verb1)} hasta el/la ${tn(v.noun2)}, llevando un/una ${tn(v.noun3)} mágico/a.`,
  },
  {
    id: "ppf-3",
    title: "The Disastrous Dinner",
    blanks: [
      { id: "noun1", kind: "noun", label: "a person (job)" },
      { id: "verb1", kind: "verb", label: "a verb" },
      { id: "noun2", kind: "noun", label: "a food" },
      { id: "noun3", kind: "noun", label: "a body part" },
    ],
    buildEnglish: (v) =>
      `When the guests sat down, the ${v.noun1 || "___"} had ${vEn(v.verb1)} the ${v.noun2 || "___"} using only their ${v.noun3 || "___"}.`,
    buildSpanish: (v) =>
      `Cuando los invitados se sentaron, el/la ${tn(v.noun1)} había ${tv(v.verb1)} el/la ${tn(v.noun2)} usando solo su ${tn(v.noun3)}.`,
  },
  {
    id: "ppf-4",
    title: "The Secret of the Castle",
    blanks: [
      { id: "noun1", kind: "noun", label: "a person" },
      { id: "verb1", kind: "verb", label: "a verb" },
      { id: "noun2", kind: "noun", label: "an object" },
      { id: "noun3", kind: "noun", label: "an animal" },
    ],
    buildEnglish: (v) =>
      `${cap(v.noun1 || "___")} explained that they had ${vEn(v.verb1)} the royal ${v.noun2 || "___"} long before the ${v.noun3 || "___"} woke up.`,
    buildSpanish: (v) =>
      `${cap(tn(v.noun1))} explicó que había ${tv(v.verb1)} el/la ${tn(v.noun2)} real mucho antes de que el/la ${tn(v.noun3)} despertara.`,
  },
];
