"use client";

import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl sm:mt-4 sm:px-5">

        {/* Logo */}
        <a
          href="#"
          className="shrink-0 text-base font-semibold tracking-tight text-white"
        >
          Vansh.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/vansh_resume(4).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.08]"
          >
            Resume
          </a>

          <a
            href="https://github.com/Vansh794"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.08]"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-3 mt-2 rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href="/vansh_resume(4).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm text-white"
              >
                Resume
              </a>

              <a
                href="https://github.com/Vansh794"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm text-white"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}