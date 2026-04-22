import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { MadLibCard } from "@/components/MadLibCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PAST_PERFECT_MADLIBS } from "@/lib/madlibs";

export const Route = createFileRoute("/past-perfect")({
  head: () => ({
    meta: [
      { title: "Past Perfect — Perfecto!" },
      {
        name: "description",
        content:
          "Learn the English past perfect tense (had + past participle) with clear examples and four funny mad libs translated into Spanish.",
      },
      { property: "og:title", content: "Past Perfect — Perfecto!" },
      {
        property: "og:description",
        content: "Lesson + 4 funny mad libs for the past perfect tense.",
      },
    ],
  }),
  component: PastPerfect,
});

function PastPerfect() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Lesson 2</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">Past Perfect</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Use the past perfect to talk about something that happened <em>before</em> another past event.
          </p>
        </header>

        <Card className="mb-10 border-border/60 shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>The formula</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <div className="rounded-lg bg-secondary px-4 py-3 font-mono text-sm sm:text-base">
              subject + <strong>had</strong> + past participle
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Example en="I had eaten before they arrived." es="Yo había comido antes de que llegaran." />
              <Example en="She had finished the book." es="Ella había terminado el libro." />
              <Example en="We had never seen snow." es="Nunca habíamos visto nieve." />
              <Example en="They had already left." es="Ya se habían ido." />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">When to use it</h3>
              <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                <li>One past action that happened before another past action.</li>
                <li>Common signal words: <strong>before, after, by the time, already, just, never, when</strong>.</li>
                <li>
                  Often paired with a simple past clause: <em>When I arrived, they <strong>had finished</strong>.</em>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <section>
          <h2 className="mb-2 text-2xl font-bold text-foreground">Mad Libs 🎉</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Fill in the blanks with English nouns and verbs. We'll assemble the story in English and Spanish.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {PAST_PERFECT_MADLIBS.map((m) => (
              <MadLibCard key={m.id} madlib={m} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function Example({ en, es }: { en: string; es: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <p className="text-sm font-medium text-foreground">{en}</p>
      <p className="text-sm text-muted-foreground">{es}</p>
    </div>
  );
}
