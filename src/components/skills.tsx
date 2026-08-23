import { skills } from "@/lib/data";
import { Reveal, Section } from "./ui";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="04 / Skills"
      title="The toolkit."
      lead="What I reach for day to day, weighted toward systems and backend, with enough front-end to ship the whole thing."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {skills.map((group, i) => (
          // An odd number of groups would leave an empty cell, and because the
          // grid draws its dividers as bg-line showing through a gap-px gutter,
          // that empty cell renders as a filled grey panel rather than nothing.
          // Letting the last group span both columns removes the cell entirely.
          <Reveal
            key={group.group}
            delay={0.05 * i}
            className={`bg-bg${
              i === skills.length - 1 && skills.length % 2 === 1
                ? " sm:col-span-2"
                : ""
            }`}
          >
            <div className="h-full p-6 sm:p-7">
              <h3 className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[13px] text-muted transition-colors hover:border-line-strong hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
