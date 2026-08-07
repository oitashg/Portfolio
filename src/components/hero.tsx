"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, GraduationCap, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { highlights, site, socials } from "@/lib/data";
import { BrandLogo, SocialMark } from "./ui";

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop" />
        <div
          className="absolute -top-40 -left-32 size-[34rem] rounded-full blur-[120px]"
          style={{ background: "var(--glow-1)" }}
        />
        <div
          className="absolute -top-24 right-0 size-[28rem] rounded-full blur-[120px]"
          style={{ background: "var(--glow-2)" }}
        />
      </div>

      <div className="container-page">
        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="min-w-0 flex-1">
            <motion.div {...rise(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
                <span className="relative flex size-2">
                  <span
                    className="absolute inline-flex size-full rounded-full bg-accent"
                    style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
                  />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                Open to Software &amp; Data Engineer roles
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl"
            >
              <span className="text-gradient">Oitash Ghosh</span>
            </motion.h1>

            <motion.p
              {...rise(0.14)}
              className="mt-4 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              {...rise(0.2)}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-subtle"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" /> {site.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-3.5" /> {site.email}
              </span>
            </motion.div>

            <motion.div {...rise(0.26)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-hover"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.ul {...rise(0.32)} className="mt-8 flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pr-3.5 pl-3 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
                  >
                    <SocialMark label={s.label} className="size-4 shrink-0" />
                    {s.label}
                    <ArrowUpRight className="size-3.5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            {...(reduced
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.94 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
                })}
            className="relative shrink-0"
          >
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full bg-linear-to-br from-accent/25 to-accent-2/25 blur-2xl"
            />
            <div className="relative size-32 overflow-hidden rounded-full border border-line-strong sm:size-44">
              <Image
                src="/oitash.jpeg"
                alt="Portrait of Oitash Ghosh"
                fill
                priority
                sizes="(min-width: 640px) 176px, 128px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.dl
          {...rise(0.4)}
          className="mt-14 grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {highlights.map((h) => (
            <div key={h.name} className="py-5 pr-4 sm:px-6 sm:py-6 sm:first:pl-0">
              <dt className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-subtle uppercase">
                {h.current && (
                  <span className="relative flex size-1.5">
                    <span
                      className="absolute inline-flex size-full rounded-full bg-accent"
                      style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
                    />
                    <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                  </span>
                )}
                {h.eyebrow}
              </dt>
              <dd className="mt-2.5 flex items-center gap-3">
                <BrandLogo
                  name={h.name}
                  className="size-6 shrink-0 text-fg"
                  fallback={
                    <GraduationCap className="size-6 shrink-0 text-fg" />
                  }
                />
                <span className="min-w-0">
                  <span className="block text-lg leading-tight font-semibold tracking-tight text-fg">
                    {h.name}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">
                    {h.detail}
                  </span>
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
