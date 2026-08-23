import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { GithubMark, Reveal, Section, Tag } from "./ui";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 / Projects"
      title="Things I've built."
      lead="Full products, not demos. Each one shipped with the constraints, tests and trade-offs that come with real users."
    >
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={0.05 * i}>
            <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong">
              {/* Accent wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: p.accent === "teal" ? "var(--glow-1)" : "var(--glow-2)",
                }}
              />

              <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
                    <span className="font-mono text-xs text-subtle">{p.period}</span>
                  </div>

                  <p className="mt-3 leading-relaxed text-muted text-pretty">
                    {p.tagline}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-[9px] size-1 shrink-0 rounded-full bg-accent/60"
                        />
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>

                  {(p.live || p.repo) && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                        >
                          <ExternalLink className="size-3.5" /> Live demo
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-hover"
                        >
                          <GithubMark className="size-3.5" /> Source
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Metric panel */}
                <div className="lg:self-center lg:border-l lg:border-line lg:pl-10">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">
                    At a glance
                  </p>
                  <dl className="mt-4 grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-5">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="font-mono text-2xl font-semibold tracking-tight text-fg">
                          {m.value}
                        </dt>
                        <dd className="mt-0.5 text-xs leading-snug text-subtle">
                          {m.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
