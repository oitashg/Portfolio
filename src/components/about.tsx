import { Network, Database, Code2, Gauge } from "lucide-react";
import { site } from "@/lib/data";
import { Reveal, Section } from "./ui";

const pillars = [
  {
    icon: Network,
    title: "Distributed systems",
    body: "Consensus and storage built from first principles: a Raft-replicated key-value store with its own LSM engine, checked for linearizability under injected network partitions.",
  },
  {
    icon: Database,
    title: "Data engineering",
    body: "Spark and EMR pipelines built for correctness first, with anomaly detection, parity testing against legacy systems, and quality gates that catch bad data before it reaches a dashboard.",
  },
  {
    icon: Code2,
    title: "Full-stack product",
    body: "React and Django/Node apps shipped end to end: auth, payments, media, real-time dashboards, and the unglamorous deployment work that makes them stay up.",
  },
  {
    icon: Gauge,
    title: "Fundamentals",
    body: "1000+ solved problems, a CS core of DSA, DBMS, OS and networks, and a habit of reaching for the simplest structure that holds under load.",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="Three disciplines, one engineer.">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5">
            {site.summary.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed text-pretty ${
                  i === site.summary.length - 1
                    ? "font-medium text-fg"
                    : "text-muted"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i}>
              <div className="group rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                    <p.icon className="size-4" />
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
