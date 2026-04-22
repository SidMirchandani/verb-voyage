import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { ReactNode, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, RotateCcw, Wand2 } from "lucide-react";
import { getMadLib, type MadLibFillValues } from "@/lib/madlibs";
import { englishVerbParticiple } from "@/lib/vocab";

export const Route = createFileRoute("/madlib/$tense/$num")({
  beforeLoad: ({ params }) => {
    if (params.tense !== "present" && params.tense !== "past") throw notFound();
    const num = Number(params.num);
    if (!Number.isFinite(num) || !getMadLib(params.tense, num)) throw notFound();
  },
  head: ({ params }) => {
    const tenseName = params.tense === "present" ? "Present Perfect" : "Past Perfect";
    const lib = getMadLib(params.tense as "present" | "past", Number(params.num));
    return {
      meta: [
        { title: `${lib?.title ?? "Mad Lib"} — ${tenseName} · U7 Study` },
        {
          name: "description",
          content: `Fill in nouns and verbs to build a chaotic ${tenseName.toLowerCase()} story in English & Spanish.`,
        },
      ],
    };
  },
  component: MadLibPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-black">Mad Lib not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Back home
        </Link>
      </div>
    </div>
  ),
});

function escapeRegex(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightTerms(text: string, terms: string[], className: string): ReactNode {
  const cleanedTerms = Array.from(
    new Set(
      terms
        .map((term) => term.trim())
        .filter((term) => term.length > 0 && term !== "___")
    )
  ).sort((a, b) => b.length - a.length);

  if (!cleanedTerms.length) return text;

  const regex = new RegExp(`(${cleanedTerms.map(escapeRegex).join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={`${part}-${index}`} className={className}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

function MadLibPage() {
  const params = useParams({ from: "/madlib/$tense/$num" });
  const tense = params.tense as "present" | "past";
  const num = Number(params.num);
  const madlib = useMemo(() => getMadLib(tense, num)!, [tense, num]);

  const [values, setValues] = useState<Record<string, { en: string; es: string }>>({});
  const [revealed, setRevealed] = useState(false);

  const getEn = (id: string) => values[id]?.en ?? "";
  const getEs = (id: string) => values[id]?.es ?? "";

  const fillValues: MadLibFillValues = useMemo(() => {
    const en: Record<string, string> = {};
    const es: Record<string, string> = {};
    for (const b of madlib.blanks) {
      en[b.id] = values[b.id]?.en ?? "";
      es[b.id] = values[b.id]?.es ?? "";
    }
    return { en, es };
  }, [madlib.blanks, values]);

  const allFilled = madlib.blanks.every(
    (b) => getEn(b.id).trim().length > 0 && getEs(b.id).trim().length > 0
  );

  const setVal = (id: string, lang: "en" | "es", v: string) =>
    setValues((s) => ({
      ...s,
      [id]: { en: lang === "en" ? v : (s[id]?.en ?? ""), es: lang === "es" ? v : (s[id]?.es ?? "") },
    }));

  const reset = () => {
    setValues({});
    setRevealed(false);
  };

  const accent = tense === "present" ? "pp" : "ppf";
  const tenseLabel = tense === "present" ? "Present Perfect" : "Past Perfect";
  const englishStory = useMemo(() => madlib.buildEnglish(fillValues), [madlib, fillValues]);
  const spanishStory = useMemo(() => madlib.buildSpanish(fillValues), [madlib, fillValues]);

  const englishVerbTerms = useMemo(
    () =>
      madlib.blanks
        .filter((b) => b.kind === "VERB")
        .map((b) => getEn(b.id).trim())
        .filter((t) => t.length > 0)
        .map((verb) => englishVerbParticiple(verb)),
    [madlib.blanks, values]
  );
  const spanishVerbTerms = useMemo(
    () =>
      madlib.blanks
        .filter((b) => b.kind === "VERB")
        .map((b) => getEs(b.id).trim())
        .filter((t) => t.length > 0),
    [madlib.blanks, values]
  );

  return (
    <div className="min-h-screen">
      {/* header */}
      <div
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--card)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" /> Back to U7 Study
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-5xl">{madlib.emoji}</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                {tenseLabel} · #{madlib.number}
              </p>
              <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                {madlib.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        {/* Inputs */}
        <Card className="border-0 bg-muted p-6 shadow-none">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-extrabold">Fill in the blanks</h2>
            <Badge variant="secondary" className="font-mono">
              {
                madlib.blanks.filter(
                  (b) => getEn(b.id).trim().length > 0 && getEs(b.id).trim().length > 0
                ).length
              }{" "}
              / {madlib.blanks.length}
            </Badge>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {madlib.blanks.map((b, i) => (
              <div key={b.id} className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] ${
                      b.kind === "NOUN"
                        ? "bg-primary/20 text-primary"
                        : "bg-accent/20 text-foreground"
                    }`}
                  >
                    {b.kind === "VERB"
                      ? tense === "present"
                        ? "VERB (present perfect)"
                        : "VERB (past perfect)"
                      : b.kind}
                  </span>
                  <span className="text-muted-foreground">#{i + 1}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label htmlFor={`${b.id}-en`} className="text-[10px] font-bold text-primary">
                      English
                    </label>
                    <Input
                      id={`${b.id}-en`}
                      placeholder="English…"
                      value={getEn(b.id)}
                      onChange={(e) => setVal(b.id, "en", e.target.value)}
                      className="font-semibold"
                      autoComplete="off"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor={`${b.id}-es`} className="text-[10px] font-bold text-muted-foreground">
                      Español
                    </label>
                    <Input
                      id={`${b.id}-es`}
                      placeholder="Español…"
                      value={getEs(b.id)}
                      onChange={(e) => setVal(b.id, "es", e.target.value)}
                      className="font-semibold"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Enter the same idea in English and Spanish for each blank (verbs: past participle in
              both languages).
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={reset}>
                <RotateCcw className="h-4 w-4" /> Reset
              </Button>
              <Button
                onClick={() => setRevealed(true)}
                disabled={!allFilled}
              >
                <Wand2 className="h-4 w-4" /> Reveal Story
              </Button>
            </div>
          </div>
        </Card>

        {/* Output */}
        {revealed && (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card
              className="border-0 bg-muted p-6 shadow-none"
            >
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                  English
                </h3>
              </div>
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                {highlightTerms(
                  englishStory,
                  englishVerbTerms,
                  "rounded bg-primary/20 px-1 font-bold text-primary"
                )}
              </p>
            </Card>
            <Card
              className="border-0 bg-muted p-6 shadow-none"
            >
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-foreground/55" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/55">
                  Español
                </h3>
              </div>
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                {highlightTerms(
                  spanishStory,
                  spanishVerbTerms,
                  "rounded bg-accent/25 px-1 font-bold text-accent-foreground"
                )}
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
