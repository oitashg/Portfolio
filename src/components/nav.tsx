"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { navItems, site } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/75 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm font-medium tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md bg-linear-to-br from-accent to-accent-2 text-[11px] font-bold text-bg">
            OG
          </span>
          <span className="hidden text-fg sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === item.id
                    ? "text-fg"
                    : "text-muted hover:text-fg"
                }`}
              >
                {active === item.id && (
                  <span className="absolute inset-0 rounded-full border border-line bg-surface" />
                )}
                <span className="relative">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-line-strong px-3.5 py-1.5 text-sm font-medium text-fg transition-colors hover:bg-surface-hover sm:inline-flex"
          >
            <FileText className="size-3.5" />
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 cursor-pointer place-items-center rounded-full border border-line bg-surface text-fg md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
          <ul className="container-page flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 text-sm text-muted last:border-0 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-3.5 text-sm font-medium text-accent"
              >
                Download résumé →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
