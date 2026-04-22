import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { FLASHCARDS } from "@/lib/vocab";
import { ChevronLeft, ChevronRight, Shuffle, RotateCw } from "lucide-react";

export const Route = createFileRoute("/flashcards")({
  head: () => ({
    meta: [
      { title: "Vocab Flashcards — Perfecto!" },
      {
        name: "description",
        content:
          "Bilingual English ↔ Spanish flashcards. Tap to flip and practice food, school, family, and verbs vocabulary.",
      },
      { property: "og:title", content: "Vocab Flashcards — Perfecto!" },
      { property: "og:description", content: "Tap-to-flip English ↔ Spanish vocabulary practice." },
    ],
  }),
  component: Flashcards,
});

const CATEGORIES = ["All", "Food", "School", "Family", "Verbs", "Everyday"] as const;

function Flashcards() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [order, setOrder] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = useMemo(() => {
    return category === "All" ? FLASHCARDS : FLASHCARDS.filter((c) => c.category === category);
  }, [category]);

  // Initialize/refresh order when cards change
  const effectiveOrder = useMemo(() => {
    if (order.length === cards.length) return order;
    return cards.map((_, i) => i);
  }, [order, cards.length]);

  const current = cards[effectiveOrder[index] ?? 0];

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  };
  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  };
  const shuffle = () => {
    const arr = cards.map((_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setOrder(arr);
    setIndex(0);
    setFlipped(false);
  };

  const switchCategory = (c: (typeof CATEGORIES)[number]) => {
    setCategory(c);
    setOrder([]);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <header className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Practice</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">Vocab Flashcards</h1>
          <p className="mt-3 text-muted-foreground">Tap the card to flip from English to Spanish.</p>
        </header>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => switchCategory(c)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                category === c
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Flip card */}
        <div className="mx-auto mb-6 w-full max-w-md" style={{ perspective: "1200px" }}>
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="relative block h-64 w-full cursor-pointer text-left"
            aria-label="Flip card"
          >
            <div
              className="absolute inset-0 transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <CardFace>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">English</span>
                <span className="mt-3 text-4xl font-bold text-foreground">{current?.en}</span>
                <span className="mt-6 text-xs text-muted-foreground">Tap to reveal Spanish</span>
              </CardFace>
              {/* Back */}
              <CardFace back>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Español</span>
                <span className="mt-3 text-4xl font-bold text-foreground">{current?.es}</span>
                <span className="mt-6 text-xs text-muted-foreground">Tap to flip back</span>
              </CardFace>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <Button onClick={prev} variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4" /> Prev
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {cards.length === 0 ? 0 : index + 1} / {cards.length}
            </span>
            <Button onClick={() => setFlipped((f) => !f)} variant="ghost" size="sm">
              <RotateCw className="h-4 w-4" /> Flip
            </Button>
            <Button onClick={shuffle} variant="ghost" size="sm">
              <Shuffle className="h-4 w-4" /> Shuffle
            </Button>
          </div>
          <Button onClick={next} variant="outline" size="sm">
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
}

function CardFace({ children, back = false }: { children: React.ReactNode; back?: boolean }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-border bg-[image:var(--gradient-card)] p-6 shadow-[var(--shadow-card)]"
      style={{
        backfaceVisibility: "hidden",
        transform: back ? "rotateY(180deg)" : undefined,
      }}
    >
      {children}
    </div>
  );
}
