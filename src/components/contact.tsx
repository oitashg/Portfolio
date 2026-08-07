import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react";
import { site, socials } from "@/lib/data";
import { Reveal, SocialMark } from "./ui";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -bottom-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full blur-[130px]"
          style={{ background: "var(--glow-1)" }}
        />
      </div>

      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
              06 / Contact
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Let&apos;s build something that scales.
            </h2>
            <p className="mt-5 leading-relaxed text-muted text-pretty">
              I&apos;m actively looking for Software Engineer and Data Engineer roles.
              If you think there&apos;s a fit — or you just want to talk about Spark,
              rules engines or hard bugs — my inbox is open.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" />
                {site.email}
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-hover"
              >
                <FileText className="size-4" />
                Download résumé
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
              <Phone className="size-3.5" /> {site.phone}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-subtle">
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg"
              >
                <SocialMark label={s.label} className="size-3.5 shrink-0" />
                {s.label}
                <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
