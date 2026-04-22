import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, RotateCcw, Wand2 } from "lucide-react";
import { getMadLib } from "@/lib/madlibs";

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

function MadLibPage() {
  const params = useParams({ from: "/madlib/$tense/$num" });
  const tense = params.tense as "present" | "past";
  const num = Number(params.num);
  const madlib = useMemo(() => getMadLib(tense, num)!, [tense, num]);

  const [values, setValues] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState(false);

  const allFilled = madlib.blanks.every((b) => (values[b.id] ?? "").trim().length > 0);

  const setVal = (id: string, v: string) => setValues((s) => ({ ...s, [id]: v }));

  const reset = () => {
    setValues({});
    setRevealed(false);
  };

  const accent = tense === "present" ? "pp" : "ppf";
  const tenseLabel = tense === "present" ? "Present Perfect" : "Past Perfect";

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
              {Object.values(values).filter((v) => v.trim()).length} / {madlib.blanks.length}
            </Badge>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {madlib.blanks.map((b, i) => (
              <div key={b.id} className="space-y-1.5">
                <label
                  htmlFor={b.id}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                >
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] ${
                      b.kind === "NOUN"
                        ? "bg-primary/20 text-primary"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {b.kind}
                  </span>
                  <span className="text-muted-foreground">#{i + 1}</span>
                </label>
                <Input
                  id={b.id}
                  placeholder={b.kind === "NOUN" ? "e.g. rocket" : "e.g. download"}
                  value={values[b.id] ?? ""}
                  onChange={(e) => setVal(b.id, e.target.value)}
                  className="font-semibold"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Use English words. They'll be translated to Spanish automatically.
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
                {madlib.buildEnglish(values)}
              </p>
            </Card>
            <Card
              className="border-0 bg-muted p-6 shadow-none"
            >
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent">
                  Español
                </h3>
              </div>
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                {madlib.buildSpanish(values)}
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
