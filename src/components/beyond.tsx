import { GraduationCap, Trophy } from "lucide-react";
import { achievements, education } from "@/lib/data";
import { Reveal, Section } from "./ui";

export function Beyond() {
  return (
    <Section
      id="beyond"
      eyebrow="05 / Beyond"
      title="Education & achievements."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-accent-soft text-accent">
                <GraduationCap className="size-4.5" />
              </span>
              <div>
                <h3 className="font-semibold tracking-tight">{education.school}</h3>
                <p className="font-mono text-xs text-subtle">
                  {education.period} · {education.location}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-muted">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">
              CGPA <span className="font-mono font-semibold text-fg">{education.cgpa}</span>
              <span className="text-subtle"> / 10</span>
            </p>

            <p className="mt-7 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
              Relevant coursework
            </p>
            <ul className="mt-3 space-y-2">
              {education.coursework.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-muted">
                  <span
                    aria-hidden
                    className="mt-[9px] size-1 shrink-0 rounded-full bg-accent/60"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="space-y-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={0.05 * i}>
              <div className="flex gap-4 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                  <Trophy className="size-4" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <h3 className="text-sm font-semibold tracking-tight">{a.title}</h3>
                    <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-subtle">
                      {a.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                    {a.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
