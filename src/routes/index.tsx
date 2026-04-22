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
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Unit 7 · Spanish
          </span>
          <h1 className="mt-6 text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl">
            <span className="text-foreground">U7</span> <span className="text-primary">STUDY</span>
          </h1>
          <p className="mt-3 text-sm font-semibold tracking-wide text-muted-foreground">
            Sid Kamath, Anay Mehrotra, Sahil Gupta, Anya Kumeta
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Master vocab through <span className="font-bold text-foreground">Mafia</span>,
            then conquer the <span className="font-bold text-foreground">Present Perfect</span> and{" "}
            <span className="font-bold text-foreground">Past Perfect</span> with chaotic Mad Libs.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
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
          helperVerb="he, has, ha, hemos, habéis, han"
          participleRule="-ar -> -ado, -er/-ir -> -ido"
          example="He estudiado mucho. — I have studied a lot."
          explainer="Use this when a past action is connected to now (life experience, recent events, unfinished time periods)."
          timeline="Action happened before now, but its result/importance is still current."
          signalWords={["hoy", "esta semana", "ya", "todavía no", "alguna vez", "nunca"]}
          irregulars={[
            "abierto (abrir)",
            "escrito (escribir)",
            "hecho (hacer)",
            "puesto (poner)",
            "roto (romper)",
            "visto (ver)",
            "vuelto (volver)",
            "dicho (decir)",
          ]}
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
          helperVerb="había, habías, había, habíamos, habíais, habían"
          participleRule="-ar -> -ado, -er/-ir -> -ido"
          example="Había estudiado antes del examen. — I had studied before the exam."
          explainer="Use this for the earlier of two past actions. It sets background for a later past event."
          timeline="Earlier past action + later past action (usually in preterite/imperfect)."
          signalWords={["antes de", "ya", "todavía no", "cuando", "para cuando"]}
          irregulars={[
            "abierto (abrir)",
            "escrito (escribir)",
            "hecho (hacer)",
            "puesto (poner)",
            "roto (romper)",
            "visto (ver)",
            "vuelto (volver)",
            "muerto (morir)",
          ]}
          accent="ppf"
        />
        <MadLibGrid madlibs={PAST_PERFECT_MADLIBS} tense="past" accent="ppf" />
      </SectionWrap>

      <footer className="border-t border-border py-10">
        <p className="text-center text-sm text-muted-foreground">
          U7 Study · Sid Kamath, Anay Mehrotra, Sahil Gupta, Anya Kumeta
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
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-black text-primary-foreground"
          >
            U7
          </span>
          <div className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight">U7 Study</span>
            <span className="hidden text-[11px] font-medium text-muted-foreground lg:block">
              Sid Kamath, Anay Mehrotra, Sahil Gupta, Anya Kumeta
            </span>
          </div>
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
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"
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
  helperVerb,
  participleRule,
  example,
  explainer,
  timeline,
  signalWords,
  irregulars,
  accent: _accent,
}: {
  formula: string;
  helperVerb: string;
  participleRule: string;
  example: string;
  explainer: string;
  timeline: string;
  signalWords: string[];
  irregulars: string[];
  accent: "pp" | "ppf";
}) {
  return (
    <Card
      className="mb-8 border-0 bg-muted p-6 shadow-none"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Formula</p>
          <p className="mt-1 font-mono text-lg font-bold text-foreground">{formula}</p>
          <p className="mt-2 text-sm text-muted-foreground">{helperVerb}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Example</p>
          <p className="mt-1 text-sm italic text-foreground">{example}</p>
          <p className="mt-2 text-sm text-muted-foreground">Participle rule: {participleRule}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">When</p>
          <p className="mt-1 text-sm text-muted-foreground">{explainer}</p>
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-border/50 bg-foreground/[0.055] p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Timeline idea</p>
        <p className="mt-1 text-sm text-foreground">{timeline}</p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Signal words</p>
          <p className="mt-2 text-sm text-foreground">{signalWords.join(" · ")}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Common irregular participles
          </p>
          <p className="mt-2 text-sm text-foreground">{irregulars.join(" · ")}</p>
        </div>
      </div>
    </Card>
  );
}

function MadLibGrid({
  madlibs,
  tense,
  accent: _accent,
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
          className="card-hover group block rounded-2xl border-0 bg-muted p-6 shadow-none"
          style={{ background: "var(--muted)" }}
        >
          <div className="flex items-center justify-between">
            <span className="text-4xl">{m.emoji}</span>
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-black tracking-widest text-primary-foreground">
              #{m.number}
            </span>
          </div>
          <h3 className="mt-6 text-xl font-extrabold leading-tight text-foreground">
            {m.title}
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {m.blanks.filter((b) => b.kind === "NOUN").length} nouns ·{" "}
            {m.blanks.filter((b) => b.kind === "VERB").length} verbs
          </p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-primary">
            Play <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
