import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Sparkles, Layers, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perfecto! — Learn Present & Past Perfect in Spanish" },
      {
        name: "description",
        content:
          "Fun grammar lessons, silly mad libs, and bilingual flashcards to master the present perfect and past perfect tenses.",
      },
      { property: "og:title", content: "Perfecto! — Learn Present & Past Perfect" },
      {
        property: "og:description",
        content: "Lessons, mad libs, and flashcards to master perfect tenses in Spanish.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-90" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Spanish grammar, but actually fun
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Master the perfect tenses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Learn the present perfect and past perfect with clear lessons, silly mad libs, and bilingual flashcards.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="shadow-[var(--shadow-soft)]">
              <Link to="/present-perfect">
                Start with Present Perfect <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Link to="/flashcards">Practice vocab</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            to="/present-perfect"
            icon={<BookOpen className="h-5 w-5" />}
            title="Present Perfect"
            desc="Have / has + past participle. Things that started in the past and still matter now."
          />
          <FeatureCard
            to="/past-perfect"
            icon={<BookOpen className="h-5 w-5" />}
            title="Past Perfect"
            desc="Had + past participle. What had already happened before another past moment."
          />
          <FeatureCard
            to="/flashcards"
            icon={<Layers className="h-5 w-5" />}
            title="Vocab Flashcards"
            desc="Tap to flip. Build your English ↔ Spanish word bank one card at a time."
          />
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <p className="text-center text-sm text-muted-foreground">Built with ❤️ for curious students.</p>
      </footer>
    </div>
  );
}

function FeatureCard({
  to,
  icon,
  title,
  desc,
}: {
  to: "/present-perfect" | "/past-perfect" | "/flashcards";
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Link to={to} className="group">
      <Card className="h-full border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
        <CardContent className="space-y-3 p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
            {icon}
          </span>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
