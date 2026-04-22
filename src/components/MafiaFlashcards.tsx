import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, VOCAB, type VocabEntry } from "@/lib/vocab";
import { Shuffle, RotateCcw, ChevronLeft, ChevronRight, Eye } from "lucide-react";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function MafiaFlashcards() {
  const [activeCat, setActiveCat] = useState<string>("All");
  const [order, setOrder] = useState<VocabEntry[]>(() => shuffle(VOCAB));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showEsFirst, setShowEsFirst] = useState(false);

  const filtered = useMemo(() => {
    const base = activeCat === "All" ? order : order.filter((v) => v.category === activeCat);
    return base;
  }, [order, activeCat]);

  const total = filtered.length;
  const card = filtered[index % Math.max(total, 1)];

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % total);
  };
  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + total) % total);
  };
  const reshuffle = () => {
    setOrder(shuffle(VOCAB));
    setIndex(0);
    setFlipped(false);
  };

  return (
    <div className="space-y-6">
      {/* Mafia rules card */}
      <Card className="relative overflow-hidden border-2 p-5 sm:p-6"
        style={{
          background: "var(--gradient-mafia)",
          borderColor: "oklch(0.55 0.24 25 / 0.6)",
          boxShadow: "var(--shadow-glow-mafia)",
        }}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔪</span>
              <h3 className="text-2xl font-extrabold tracking-tight text-white text-glow-mafia sm:text-3xl">
                MAFIA: Vocab Edition
              </h3>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
              Normal Mafia rules apply. <span className="font-bold">BUT</span> — when you're killed at night
              or voted out during the day, you get one last chance:
              <span className="font-bold"> translate 4 flashcards correctly to save yourself.</span>
              Miss one, you're out.
            </p>
          </div>
        </div>
      </Card>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => { setActiveCat("All"); setIndex(0); setFlipped(false); }}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
            activeCat === "All"
              ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
          }`}
        >
          All ({VOCAB.length})
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => { setActiveCat(c); setIndex(0); setFlipped(false); }}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
              activeCat === c
                ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
          >
            {c}
          </button>
        ))}
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowEsFirst((s) => !s)}>
            <Eye className="h-4 w-4" />
            {showEsFirst ? "Show EN first" : "Show ES first"}
          </Button>
          <Button variant="outline" size="sm" onClick={reshuffle}>
            <Shuffle className="h-4 w-4" /> Shuffle
          </Button>
        </div>
      </div>

      {/* Flashcard */}
      {card && (
        <div className="mx-auto w-full max-w-2xl">
          <div
            className="perspective"
            onClick={() => setFlipped((f) => !f)}
          >
            <div
              className={`preserve-3d relative h-72 w-full cursor-pointer transition-transform duration-500 sm:h-80 ${
                flipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <Card
                className="backface-hidden absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 p-6 text-center"
                style={{
                  background: "var(--gradient-card)",
                  borderColor: "oklch(0.72 0.22 320 / 0.4)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <Badge variant="secondary" className="uppercase tracking-wider">
                  {card.category}
                </Badge>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {showEsFirst ? "Español" : "English"}
                </p>
                <h4 className="text-3xl font-extrabold text-foreground text-glow sm:text-4xl">
                  {showEsFirst ? card.es : card.en}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground">Tap to flip</p>
              </Card>
              {/* Back */}
              <Card
                className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 p-6 text-center"
                style={{
                  background: "var(--gradient-primary)",
                  borderColor: "oklch(0.78 0.18 200 / 0.6)",
                  boxShadow: "var(--shadow-glow-cyan)",
                }}
              >
                <Badge className="bg-background/40 uppercase tracking-wider text-white backdrop-blur">
                  {card.category}
                </Badge>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  {showEsFirst ? "English" : "Español"}
                </p>
                <h4 className="text-3xl font-extrabold text-white sm:text-4xl">
                  {showEsFirst ? card.en : card.es}
                </h4>
                <p className="mt-2 text-xs text-white/70">Tap to flip back</p>
              </Card>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <Button variant="secondary" onClick={prev}>
              <ChevronLeft className="h-4 w-4" /> Prev
            </Button>
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <RotateCcw className="h-4 w-4" />
              {(index % total) + 1} / {total}
            </div>
            <Button onClick={next} className="shadow-[var(--shadow-glow)]">
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
