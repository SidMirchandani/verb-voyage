import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { MadLibCard } from "@/components/MadLibCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRESENT_PERFECT_MADLIBS } from "@/lib/madlibs";

export const Route = createFileRoute("/present-perfect")({
  head: () => ({
    meta: [
      { title: "Present Perfect — Perfecto!" },
      {
        name: "description",
        content:
          "Learn the English present perfect tense (have/has + past participle) with clear examples and four funny mad libs translated into Spanish.",
      },
      { property: "og:title", content: "Present Perfect — Perfecto!" },
      {
        property: "og:description",
        content: "Lesson + 4 funny mad libs for the present perfect tense.",
      },
    ],
  }),
  component: PresentPerfect,
});

function PresentPerfect() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <header className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Lesson 1</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">Present Perfect</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Use the present perfect for actions connecting the past with the present.
          </p>
        </header>

        <Card className="mb-10 border-border/60 shadow-[var(--shadow-card)]">
          <CardHeader>
            <CardTitle>The formula</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground">
            <div className="rounded-lg bg-secondary px-4 py-3 font-mono text-sm sm:text-base">
              subject + <strong>have / has</strong> + past participle
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Example en="I have eaten tacos." es="He comido tacos." />
              <Example en="She has visited Spain." es="Ella ha visitado España." />
              <Example en="We have studied a lot." es="Hemos estudiado mucho." />
              <Example en="They have just arrived." es="Acaban de llegar." />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">When to use it</h3>
              <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Life experiences: <em>I have traveled to Mexico.</em></li>
                <li>Recent actions with present results: <em>He has broken his phone.</em></li>
                <li>Unfinished time: <em>We have studied this week.</em></li>
                <li>Common time words: <strong>ever, never, just, already, yet, since, for</strong>.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <section>
          <h2 className="mb-2 text-2xl font-bold text-foreground">Mad Libs 🎉</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Fill in the blanks with English nouns and verbs. We'll build a silly sentence and translate it to Spanish.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {PRESENT_PERFECT_MADLIBS.map((m) => (
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
