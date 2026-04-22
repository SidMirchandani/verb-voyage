import { useState } from "react";
import type { MadLib } from "@/lib/madlibs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, RotateCcw } from "lucide-react";

export function MadLibCard({ madlib }: { madlib: MadLib }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState(false);

  const allFilled = madlib.blanks.every((b) => (values[b.id] ?? "").trim().length > 0);

  const reset = () => {
    setValues({});
    setRevealed(false);
  };

  return (
    <Card className="overflow-hidden border-border/60 shadow-[var(--shadow-card)]">
      <CardHeader className="bg-[image:var(--gradient-card)] border-b border-border/60">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="h-4 w-4 text-primary" />
          {madlib.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {madlib.blanks.map((b) => (
            <div key={b.id} className="space-y-1.5">
              <Label htmlFor={`${madlib.id}-${b.id}`} className="text-xs uppercase tracking-wide text-muted-foreground">
                {b.label}
              </Label>
              <Input
                id={`${madlib.id}-${b.id}`}
                placeholder={b.kind === "verb" ? "e.g. eat, dance" : "e.g. dragon, taco"}
                value={values[b.id] ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [b.id]: e.target.value }))}
                className="bg-background"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setRevealed(true)}
            disabled={!allFilled}
            className="shadow-[var(--shadow-soft)]"
          >
            <Sparkles className="h-4 w-4" />
            Reveal story
          </Button>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>

        {revealed && (
          <div className="space-y-3 rounded-lg border border-border bg-muted/40 p-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">English</p>
              <p className="text-base leading-relaxed text-foreground">{madlib.buildEnglish(values)}</p>
            </div>
            <div className="border-t border-border/60 pt-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Español</p>
              <p className="text-base leading-relaxed text-foreground">{madlib.buildSpanish(values)}</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Tip: words shown like <span className="font-mono">word (?)</span> aren't in our dictionary yet — try a
              common noun or verb!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
