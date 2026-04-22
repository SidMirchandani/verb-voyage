// U7 vocabulary: Technology, Science & Inventions, Astronomy & Universe,
// Scientists, En pantalla, Literatura, Cultura.
// Used for both flashcards (Mafia) and Mad Lib translation.

export type WordKind = "noun" | "verb";

export type VocabEntry = {
  en: string;
  es: string;
  category: string;
  kind: WordKind | "adj" | "phrase";
};

export const VOCAB: VocabEntry[] = [
  // La tecnología
  { en: "@ symbol", es: "la arroba", category: "La tecnología", kind: "noun" },
  { en: "blog", es: "el blog", category: "La tecnología", kind: "noun" },
  { en: "search engine", es: "el buscador", category: "La tecnología", kind: "noun" },
  { en: "laptop", es: "la computadora portátil", category: "La tecnología", kind: "noun" },
  { en: "password", es: "la contraseña", category: "La tecnología", kind: "noun" },
  { en: "spell checker", es: "el corrector ortográfico", category: "La tecnología", kind: "noun" },
  { en: "e-mail address", es: "la dirección de correo electrónico", category: "La tecnología", kind: "noun" },
  { en: "computer science", es: "la informática", category: "La tecnología", kind: "noun" },
  { en: "Internet", es: "Internet", category: "La tecnología", kind: "noun" },
  { en: "(text) message", es: "el mensaje (de texto)", category: "La tecnología", kind: "noun" },
  { en: "web page", es: "la página web", category: "La tecnología", kind: "noun" },
  { en: "software", es: "el programa (de computación)", category: "La tecnología", kind: "noun" },
  { en: "CD/DVD/MP3 player", es: "el reproductor de CD/DVD/MP3", category: "La tecnología", kind: "noun" },
  { en: "cell phone", es: "el (teléfono) celular", category: "La tecnología", kind: "noun" },
  { en: "to attach (a file)", es: "adjuntar (un archivo)", category: "La tecnología", kind: "verb" },
  { en: "to erase", es: "borrar", category: "La tecnología", kind: "verb" },
  { en: "to download", es: "descargar", category: "La tecnología", kind: "verb" },
  { en: "to save", es: "guardar", category: "La tecnología", kind: "verb" },
  { en: "to surf the web", es: "navegar en la red", category: "La tecnología", kind: "verb" },
  { en: "digital", es: "digital", category: "La tecnología", kind: "adj" },
  { en: "online", es: "en línea", category: "La tecnología", kind: "adj" },
  { en: "wireless", es: "inalámbrico/a", category: "La tecnología", kind: "adj" },

  // La ciencia y los inventos
  { en: "DNA", es: "el ADN (ácido desoxirribonucleico)", category: "La ciencia y los inventos", kind: "noun" },
  { en: "advance; breakthrough", es: "el avance", category: "La ciencia y los inventos", kind: "noun" },
  { en: "cell", es: "la célula", category: "La ciencia y los inventos", kind: "noun" },
  { en: "challenge", es: "el desafío", category: "La ciencia y los inventos", kind: "noun" },
  { en: "discovery", es: "el descubrimiento", category: "La ciencia y los inventos", kind: "noun" },
  { en: "experiment", es: "el experimento", category: "La ciencia y los inventos", kind: "noun" },
  { en: "gene", es: "el gen", category: "La ciencia y los inventos", kind: "noun" },
  { en: "invention", es: "el invento", category: "La ciencia y los inventos", kind: "noun" },
  { en: "patent", es: "la patente", category: "La ciencia y los inventos", kind: "noun" },
  { en: "theory", es: "la teoría", category: "La ciencia y los inventos", kind: "noun" },
  { en: "to clone", es: "clonar", category: "La ciencia y los inventos", kind: "verb" },
  { en: "to prove", es: "comprobar (o:ue)", category: "La ciencia y los inventos", kind: "verb" },
  { en: "to create", es: "crear", category: "La ciencia y los inventos", kind: "verb" },
  { en: "to manufacture; to make", es: "fabricar", category: "La ciencia y los inventos", kind: "verb" },
  { en: "to formulate", es: "formular", category: "La ciencia y los inventos", kind: "verb" },
  { en: "to invent", es: "inventar", category: "La ciencia y los inventos", kind: "verb" },
  { en: "to investigate; to research", es: "investigar", category: "La ciencia y los inventos", kind: "verb" },
  { en: "advanced", es: "avanzado/a", category: "La ciencia y los inventos", kind: "adj" },
  { en: "(bio)chemical", es: "(bio)químico/a", category: "La ciencia y los inventos", kind: "adj" },
  { en: "specialized", es: "especializado/a", category: "La ciencia y los inventos", kind: "adj" },
  { en: "ethical", es: "ético/a", category: "La ciencia y los inventos", kind: "adj" },
  { en: "innovative", es: "innovador(a)", category: "La ciencia y los inventos", kind: "adj" },
  { en: "revolutionary", es: "revolucionario/a", category: "La ciencia y los inventos", kind: "adj" },

  // La astronomía y el universo
  { en: "black hole", es: "el agujero negro", category: "La astronomía y el universo", kind: "noun" },
  { en: "rocket", es: "el cohete", category: "La astronomía y el universo", kind: "noun" },
  { en: "comet", es: "el cometa", category: "La astronomía y el universo", kind: "noun" },
  { en: "space", es: "el espacio", category: "La astronomía y el universo", kind: "noun" },
  { en: "(shooting) star", es: "la estrella (fugaz)", category: "La astronomía y el universo", kind: "noun" },
  { en: "alien", es: "el/la extraterrestre", category: "La astronomía y el universo", kind: "noun" },
  { en: "gravity", es: "la gravedad", category: "La astronomía y el universo", kind: "noun" },
  { en: "UFO", es: "el ovni", category: "La astronomía y el universo", kind: "noun" },
  { en: "planet", es: "el planeta", category: "La astronomía y el universo", kind: "noun" },
  { en: "telescope", es: "el telescopio", category: "La astronomía y el universo", kind: "noun" },
  { en: "space shuttle", es: "el transbordador espacial", category: "La astronomía y el universo", kind: "noun" },

  // Los científicos
  { en: "astronaut", es: "el/la astronauta", category: "Los científicos", kind: "noun" },
  { en: "astronomer", es: "el/la astrónomo/a", category: "Los científicos", kind: "noun" },
  { en: "biologist", es: "el/la biólogo/a", category: "Los científicos", kind: "noun" },
  { en: "scientist", es: "el/la científico/a", category: "Los científicos", kind: "noun" },
  { en: "physicist", es: "el/la físico/a", category: "Los científicos", kind: "noun" },
  { en: "engineer", es: "el/la ingeniero/a", category: "Los científicos", kind: "noun" },
  { en: "mathematician", es: "el/la matemático/a", category: "Los científicos", kind: "noun" },
  { en: "(bio)chemist", es: "el/la (bio)químico/a", category: "Los científicos", kind: "noun" },

  // En pantalla
  { en: "cash; dough", es: "la guita", category: "En pantalla", kind: "noun" },
  { en: "question; doubt", es: "el interrogante", category: "En pantalla", kind: "noun" },
  { en: "money", es: "la plata", category: "En pantalla", kind: "noun" },
  { en: "slacker", es: "el/la vago/a", category: "En pantalla", kind: "noun" },
  { en: "you", es: "vos", category: "En pantalla", kind: "noun" },
  { en: "to freeze", es: "congelar(se)", category: "En pantalla", kind: "verb" },
  { en: "to melt", es: "derretir(se) (e:i)", category: "En pantalla", kind: "verb" },
  { en: "to defrost", es: "descongelar(se)", category: "En pantalla", kind: "verb" },
  { en: "to click", es: "hacer clic", category: "En pantalla", kind: "verb" },
  { en: "hard; difficult", es: "duro/a", category: "En pantalla", kind: "adj" },
  { en: "within reach", es: "al alcance de la mano", category: "En pantalla", kind: "phrase" },
  { en: "after all", es: "al final de cuentas", category: "En pantalla", kind: "phrase" },

  // Literatura
  { en: "telephone receiver", es: "el auricular", category: "Literatura", kind: "noun" },
  { en: "silly, stupid person", es: "el/la bobo/a", category: "Literatura", kind: "noun" },
  { en: "power saw", es: "la motosierra", category: "Literatura", kind: "noun" },
  { en: "cell phone", es: "el móvil", category: "Literatura", kind: "noun" },
  { en: "navigator", es: "el/la navegante", category: "Literatura", kind: "noun" },
  { en: "carriage; train car", es: "el vagón", category: "Literatura", kind: "noun" },
  { en: "to save oneself", es: "ahorrarse", category: "Literatura", kind: "verb" },
  { en: "to ring", es: "sonar (o:ue)", category: "Literatura", kind: "verb" },
  { en: "turned off", es: "apagado/a", category: "Literatura", kind: "adj" },

  // Cultura
  { en: "travel log; weblog", es: "la bitácora", category: "Cultura", kind: "noun" },
  { en: "blog novel", es: "la blogonovela", category: "Cultura", kind: "noun" },
  { en: "blogosphere", es: "la blogosfera", category: "Cultura", kind: "noun" },
  { en: "link", es: "el enlace", category: "Cultura", kind: "noun" },
  { en: "novelist", es: "el/la novelista", category: "Cultura", kind: "noun" },
  { en: "website", es: "el sitio web", category: "Cultura", kind: "noun" },
  { en: "user", es: "el/la usuario/a", category: "Cultura", kind: "noun" },
  { en: "the web", es: "la web", category: "Cultura", kind: "noun" },
  { en: "to update", es: "actualizar", category: "Cultura", kind: "verb" },
  { en: "at the forefront", es: "a la vanguardia", category: "Cultura", kind: "phrase" },
];

export const CATEGORIES = Array.from(new Set(VOCAB.map((v) => v.category)));

// ---------- Translation helpers for Mad Libs ----------
// We translate user-typed English NOUN/VERB inputs into Spanish.
// Build lookup maps from the VOCAB list (English -> Spanish base).

const stripArticle = (es: string) =>
  es.replace(/^(el|la|los|las|un|una|unos|unas|el\/la)\s+/i, "").trim();

const NOUN_MAP: Record<string, string> = {};
const VERB_INF_MAP: Record<string, string> = {}; // english "to X" or "X" -> spanish infinitive
const VERB_PARTICIPLE_MAP: Record<string, string> = {}; // english base -> spanish past participle

// Build participle from Spanish infinitive (regular rules).
function spanishParticiple(inf: string): string {
  // strip parentheticals like "(o:ue)" or "(e:i)" and "(se)"
  const clean = inf.replace(/\(.*?\)/g, "").replace(/\s+/g, " ").trim();
  // Handle reflexive/se variants - just use the verb
  const base = clean.replace(/se$/i, "");
  if (base.endsWith("ar")) return base.slice(0, -2) + "ado";
  if (base.endsWith("er")) return base.slice(0, -2) + "ido";
  if (base.endsWith("ir")) return base.slice(0, -2) + "ido";
  return base;
}

// Irregular Spanish past participles from our vocab + common ones
const IRREGULAR_PARTICIPLES: Record<string, string> = {
  hacer: "hecho",
  decir: "dicho",
  escribir: "escrito",
  ver: "visto",
  poner: "puesto",
  volver: "vuelto",
  abrir: "abierto",
  romper: "roto",
  morir: "muerto",
  cubrir: "cubierto",
  resolver: "resuelto",
  descubrir: "descubierto",
};

for (const v of VOCAB) {
  const enLower = v.en.toLowerCase().trim();
  if (v.kind === "noun") {
    NOUN_MAP[enLower] = v.es;
  } else if (v.kind === "verb") {
    const enKey = enLower.replace(/^to\s+/, "");
    const inf = stripArticle(v.es).replace(/\(.*?\)/g, "").replace(/\s+/g, " ").trim();
    VERB_INF_MAP[enKey] = v.es;
    const baseInf = inf.replace(/se$/i, "");
    const irr = IRREGULAR_PARTICIPLES[baseInf];
    VERB_PARTICIPLE_MAP[enKey] = irr ?? spanishParticiple(v.es);
  }
}

// English past-participle hints — accept either base or participle from the user.
const EN_PARTICIPLE_TO_BASE: Record<string, string> = {
  attached: "attach", erased: "erase", downloaded: "download", saved: "save",
  surfed: "surf the web", cloned: "clone", proved: "prove", proven: "prove",
  created: "create", manufactured: "manufacture", made: "make",
  formulated: "formulate", invented: "invent", investigated: "investigate",
  researched: "research", frozen: "freeze", melted: "melt", defrosted: "defrost",
  clicked: "click", saved_oneself: "save oneself", rang: "ring", rung: "ring",
  updated: "update",
};

export function translateNoun(input: string): string {
  const key = input.trim().toLowerCase();
  if (!key) return "___";
  if (NOUN_MAP[key]) return stripArticle(NOUN_MAP[key]);
  // try without leading article
  const stripped = key.replace(/^(a|an|the)\s+/, "");
  if (NOUN_MAP[stripped]) return stripArticle(NOUN_MAP[stripped]);
  return input;
}

export function translateVerbToParticiple(input: string): string {
  const raw = input.trim().toLowerCase();
  if (!raw) return "___";
  let key = raw.replace(/^to\s+/, "");
  if (EN_PARTICIPLE_TO_BASE[key]) key = EN_PARTICIPLE_TO_BASE[key];
  if (VERB_PARTICIPLE_MAP[key]) return VERB_PARTICIPLE_MAP[key];
  return input;
}

// Normalize english verb for the english sentence (always show as past participle).
const EN_BASE_TO_PARTICIPLE: Record<string, string> = {
  attach: "attached", erase: "erased", download: "downloaded", save: "saved",
  "surf the web": "surfed the web", clone: "cloned", prove: "proven",
  create: "created", manufacture: "manufactured", make: "made",
  formulate: "formulated", invent: "invented", investigate: "investigated",
  research: "researched", freeze: "frozen", melt: "melted", defrost: "defrosted",
  click: "clicked", "save oneself": "saved themselves", ring: "rung", update: "updated",
};

export function englishVerbParticiple(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "___";
  const key = trimmed.toLowerCase().replace(/^to\s+/, "");

  const knownParticipleForms = new Set(Object.values(EN_BASE_TO_PARTICIPLE));
  if (knownParticipleForms.has(key)) return trimmed;

  if (EN_BASE_TO_PARTICIPLE[key]) return EN_BASE_TO_PARTICIPLE[key];

  if (EN_PARTICIPLE_TO_BASE[key]) {
    const base = EN_PARTICIPLE_TO_BASE[key];
    return EN_BASE_TO_PARTICIPLE[base] ?? trimmed;
  }

  // Never synthesize -ed/-d: use exactly what the learner typed.
  return trimmed;
}
