import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MafiaFlashcards } from "@/components/MafiaFlashcards";
import { PRESENT_PERFECT_MADLIBS, PAST_PERFECT_MADLIBS, type MadLib } from "@/lib/madlibs";
import { Sparkles, BookOpen, Skull, ChevronRight, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "U7 Study — Spanish Perfect Tenses" },
      {
        name: "description",
        content:
          "Unit 7 study hub: vocab Mafia flashcards, Present Perfect & Past Perfect Mad Libs.",
      },
      { property: "og:title", content: "U7 Study" },
      {
        property: "og:description",
        content: "Vocab Mafia + Mad Libs for Spanish Unit 7.",
      },
    ],
  }),
  component: Index,
});

const sectionIds = {
  vocab: "vocab",
  present: "present-perfect",
  past: "past-perfect",
} as const;

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <TopNav />

      {/* Hero / Title */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Unit 7 · Spanish
          </span>
          <h1 className="mt-6 text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl">
            <span className="text-glow text-foreground">U7</span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              STUDY
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Master vocab through <span className="font-bold text-foreground">Mafia</span>,
            then conquer the <span className="font-bold text-foreground">Present Perfect</span> and{" "}
            <span className="font-bold text-foreground">Past Perfect</span> with chaotic Mad Libs.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="shadow-[var(--shadow-glow)] animate-pulse-glow">
              <a href={`#${sectionIds.vocab}`}>
                <Skull className="h-5 w-5" /> Play Mafia
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`#${sectionIds.present}`}>
                Mad Libs <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Vocab / Mafia */}
      <SectionWrap id={sectionIds.vocab} eyebrow="01 · Vocab" title="Mafia Flashcards" icon={<Skull className="h-6 w-6" />}>
        <MafiaFlashcards />
      </SectionWrap>

      {/* Present Perfect */}
      <SectionWrap
        id={sectionIds.present}
        eyebrow="02 · Grammar"
        title="Present Perfect"
        icon={<BookOpen className="h-6 w-6" />}
      >
        <GrammarCard
          formula="haber (present) + past participle"
          example="He estudiado mucho. — I have studied a lot."
          explainer="Use it for actions that happened recently or that started in the past and still matter now."
          accent="pp"
        />
        <MadLibGrid madlibs={PRESENT_PERFECT_MADLIBS} tense="present" accent="pp" />
      </SectionWrap>

      {/* Past Perfect */}
      <SectionWrap
        id={sectionIds.past}
        eyebrow="03 · Grammar"
        title="Past Perfect"
        icon={<GraduationCap className="h-6 w-6" />}
      >
        <GrammarCard
          formula="haber (imperfect) + past participle"
          example="Había estudiado antes del examen. — I had studied before the exam."
          explainer="Use it for actions that happened before another past moment."
          accent="ppf"
        />
        <MadLibGrid madlibs={PAST_PERFECT_MADLIBS} tense="past" accent="ppf" />
      </SectionWrap>

      <footer className="border-t border-border py-10">
        <p className="text-center text-sm text-muted-foreground">
          U7 Study · Built with chaos and ❤️
        </p>
      </footer>
    </div>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg font-black text-primary-foreground shadow-[var(--shadow-glow)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            U7
          </span>
          <span className="text-lg font-extrabold tracking-tight">U7 Study</span>
        </a>
        <nav className="flex items-center gap-1 text-sm font-semibold sm:gap-2">
          <a href={`#${sectionIds.vocab}`} className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            Mafia
          </a>
          <a href={`#${sectionIds.present}`} className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            Present
          </a>
          <a href={`#${sectionIds.past}`} className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            Past
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionWrap({
  id,
  eyebrow,
  title,
  icon,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground shadow-[var(--shadow-glow)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            {icon}
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function GrammarCard({
  formula,
  example,
  explainer,
  accent,
}: {
  formula: string;
  example: string;
  explainer: string;
  accent: "pp" | "ppf";
}) {
  return (
    <Card
      className="mb-8 border-2 p-6"
      style={{
        background: "var(--gradient-card)",
        borderColor:
          accent === "pp"
            ? "oklch(0.72 0.22 320 / 0.4)"
            : "oklch(0.55 0.22 280 / 0.5)",
      }}
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Formula</p>
          <p className="mt-1 font-mono text-lg font-bold text-foreground">{formula}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Example</p>
          <p className="mt-1 text-sm italic text-foreground">{example}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">When</p>
          <p className="mt-1 text-sm text-muted-foreground">{explainer}</p>
        </div>
      </div>
    </Card>
  );
}

function MadLibGrid({
  madlibs,
  tense,
  accent,
}: {
  madlibs: MadLib[];
  tense: "present" | "past";
  accent: "pp" | "ppf";
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {madlibs.map((m) => (
        <Link
          key={m.id}
          to="/madlib/$tense/$num"
          params={{ tense, num: String(m.number) }}
          className="card-hover group block rounded-2xl border-2 p-6"
          style={{
            background: accent === "pp" ? "var(--gradient-pp)" : "var(--gradient-ppf)",
            borderColor: "oklch(1 0 0 / 0.15)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-4xl">{m.emoji}</span>
            <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-black tracking-widest text-white">
              #{m.number}
            </span>
          </div>
          <h3 className="mt-6 text-xl font-extrabold leading-tight text-white">
            {m.title}
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/80">
            {m.blanks.filter((b) => b.kind === "NOUN").length} nouns ·{" "}
            {m.blanks.filter((b) => b.kind === "VERB").length} verbs
          </p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-white">
            Play <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
