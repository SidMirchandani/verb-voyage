// Bilingual vocabulary dictionary for Mad Libs translation.
// Keys are lowercase English; values are Spanish (with article when useful).

export const NOUNS: Record<string, string> = {
  // Animals
  cat: "gato", dog: "perro", elephant: "elefante", monkey: "mono", chicken: "pollo",
  fish: "pez", cow: "vaca", horse: "caballo", penguin: "pingüino", dragon: "dragón",
  unicorn: "unicornio", llama: "llama", duck: "pato", spider: "araña", dinosaur: "dinosaurio",
  // People
  teacher: "profesor", doctor: "doctor", grandma: "abuela", grandpa: "abuelo",
  baby: "bebé", clown: "payaso", chef: "chef", pirate: "pirata", astronaut: "astronauta",
  ninja: "ninja", wizard: "mago", robot: "robot",
  // Things
  pizza: "pizza", taco: "taco", sandwich: "sándwich", cake: "pastel", banana: "plátano",
  apple: "manzana", coffee: "café", soup: "sopa", car: "coche", bicycle: "bicicleta",
  rocket: "cohete", spaceship: "nave espacial", broom: "escoba", hat: "sombrero",
  shoe: "zapato", sock: "calcetín", phone: "teléfono", book: "libro", computer: "computadora",
  guitar: "guitarra", piano: "piano", trumpet: "trompeta",
  // Places
  house: "casa", school: "escuela", beach: "playa", moon: "luna", jungle: "jungla",
  castle: "castillo", kitchen: "cocina", bathroom: "baño", park: "parque",
  // Body parts
  nose: "nariz", foot: "pie", hand: "mano", eye: "ojo", hair: "pelo", tooth: "diente",
};

export const VERBS_PAST_PARTICIPLE: Record<string, string> = {
  // Present perfect / past perfect uses past participle.
  // Spanish equivalent (participio) shown.
  eaten: "comido", drunk: "bebido", slept: "dormido", danced: "bailado",
  sung: "cantado", run: "corrido", walked: "caminado", jumped: "saltado",
  flown: "volado", swum: "nadado", cooked: "cocinado", broken: "roto",
  written: "escrito", read: "leído", seen: "visto", heard: "oído",
  bought: "comprado", sold: "vendido", lost: "perdido", found: "encontrado",
  thrown: "lanzado", caught: "atrapado", kissed: "besado", hugged: "abrazado",
  painted: "pintado", drawn: "dibujado", built: "construido", destroyed: "destruido",
  ridden: "montado", driven: "conducido", washed: "lavado", baked: "horneado",
  exploded: "explotado", melted: "derretido", invented: "inventado", stolen: "robado",
  taught: "enseñado", studied: "estudiado", played: "jugado", forgotten: "olvidado",
};

export const VERBS_BASE_TO_PARTICIPLE: Record<string, string> = {
  eat: "eaten", drink: "drunk", sleep: "slept", dance: "danced", sing: "sung",
  run: "run", walk: "walked", jump: "jumped", fly: "flown", swim: "swum",
  cook: "cooked", break: "broken", write: "written", read: "read", see: "seen",
  hear: "heard", buy: "bought", sell: "sold", lose: "lost", find: "found",
  throw: "thrown", catch: "caught", kiss: "kissed", hug: "hugged",
  paint: "painted", draw: "drawn", build: "built", destroy: "destroyed",
  ride: "ridden", drive: "driven", wash: "washed", bake: "baked",
  explode: "exploded", melt: "melted", invent: "invented", steal: "stolen",
  teach: "taught", study: "studied", play: "played", forget: "forgotten",
};

export type WordKind = "noun" | "verb";

export function translateWord(input: string, kind: WordKind): string {
  const cleaned = input.trim().toLowerCase();
  if (!cleaned) return "___";
  if (kind === "noun") {
    return NOUNS[cleaned] ?? `${cleaned} (?)`;
  }
  // verb: accept either base form or past participle
  const participle = VERBS_BASE_TO_PARTICIPLE[cleaned] ?? cleaned;
  return VERBS_PAST_PARTICIPLE[participle] ?? `${cleaned} (?)`;
}

export function normalizeVerbToParticiple(input: string): string {
  const cleaned = input.trim().toLowerCase();
  if (!cleaned) return "___";
  return VERBS_BASE_TO_PARTICIPLE[cleaned] ?? cleaned;
}

// Flashcard vocabulary set (themed around food, school, animals, daily life)
export const FLASHCARDS: { en: string; es: string; category: string }[] = [
  // Food
  { en: "apple", es: "manzana", category: "Food" },
  { en: "bread", es: "pan", category: "Food" },
  { en: "water", es: "agua", category: "Food" },
  { en: "cheese", es: "queso", category: "Food" },
  { en: "chicken", es: "pollo", category: "Food" },
  { en: "rice", es: "arroz", category: "Food" },
  // School
  { en: "book", es: "libro", category: "School" },
  { en: "pencil", es: "lápiz", category: "School" },
  { en: "teacher", es: "profesor", category: "School" },
  { en: "homework", es: "tarea", category: "School" },
  { en: "classroom", es: "aula", category: "School" },
  { en: "backpack", es: "mochila", category: "School" },
  // Family
  { en: "mother", es: "madre", category: "Family" },
  { en: "father", es: "padre", category: "Family" },
  { en: "sister", es: "hermana", category: "Family" },
  { en: "brother", es: "hermano", category: "Family" },
  { en: "grandma", es: "abuela", category: "Family" },
  { en: "friend", es: "amigo", category: "Family" },
  // Verbs
  { en: "to eat", es: "comer", category: "Verbs" },
  { en: "to drink", es: "beber", category: "Verbs" },
  { en: "to sleep", es: "dormir", category: "Verbs" },
  { en: "to run", es: "correr", category: "Verbs" },
  { en: "to write", es: "escribir", category: "Verbs" },
  { en: "to read", es: "leer", category: "Verbs" },
  // Common
  { en: "house", es: "casa", category: "Everyday" },
  { en: "car", es: "coche", category: "Everyday" },
  { en: "dog", es: "perro", category: "Everyday" },
  { en: "cat", es: "gato", category: "Everyday" },
  { en: "sun", es: "sol", category: "Everyday" },
  { en: "moon", es: "luna", category: "Everyday" },
];
