import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { experience } from "@/lib/data";
import { BrandLogo, Reveal, RichText, Section, Tag } from "./ui";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="02 / Experience"
      title="Where I've worked."
      lead="From petabyte-scale supply chain pipelines at Amazon to evaluating frontier models on real engineering tasks."
    >
      <ol className="relative">
        {/* Spine */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[calc(11rem+7px)]"
        />

        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-16 last:pb-0">
            <Reveal delay={0.05 * i}>
              <div className="flex gap-6 md:gap-0">
                {/* Date rail (desktop) */}
                <div className="hidden w-44 shrink-0 pr-8 text-right md:block">
                  <p className="font-mono text-xs tracking-tight text-subtle">
                    {job.period}
                  </p>
                  <p className="mt-1 text-xs text-subtle">{job.location}</p>
                </div>

                {/* Node */}
                <div className="relative shrink-0 md:w-4">
                  <span
                    className={`absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border md:-left-[7px] ${
                      job.current
                        ? "border-accent bg-accent"
                        : "border-line-strong bg-bg"
                    }`}
                  >
                    {job.current && (
                      <span
                        className="absolute inline-flex size-[15px] rounded-full bg-accent"
                        style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
                      />
                    )}
                  </span>
                </div>

                <div className="min-w-0 flex-1 md:pl-8">
                  <h3 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
                    <BrandLogo
                      name={job.company}
                      className="size-5 shrink-0 text-fg"
                    />
                    {job.href ? (
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 hover:text-accent"
                      >
                        {job.company}
                        <ArrowUpRight className="size-4 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>

                  <p className="mt-0.5 text-sm font-medium text-accent">{job.role}</p>
                  <p className="mt-1 font-mono text-xs text-subtle md:hidden">
                    {job.period} · {job.location}
                  </p>
                  {job.team && (
                    <p className="mt-1 font-mono text-xs text-subtle">{job.team}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted italic">
                    {job.blurb}
                  </p>

                  {job.project && (
                    <p className="mt-4 rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-muted">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
                        Project
                      </span>
                      <br />
                      <span className="text-fg">{job.project}</span>
                    </p>
                  )}

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span
                          aria-hidden
                          className="mt-[9px] size-1 shrink-0 rounded-full bg-accent/60"
                        />
                        <span className="text-pretty">
                          <RichText text={point} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-1.5">
                    {job.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>

                  {job.credential && (
                    <a
                      href={job.credential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent transition-colors hover:border-accent/70"
                    >
                      <BadgeCheck className="size-3.5" />
                      {job.credential.label}
                      <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
