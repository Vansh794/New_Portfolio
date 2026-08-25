
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background grid */}
        <div className="grid-background absolute inset-0 opacity-60" />

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            AI/ML Developer • Software Engineer
          </p>

         <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
            Hi, I am{" "}
            <span className="gradient-text">
               Vansh.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build intelligent systems, full-stack applications, and
            meaningful digital products while constantly learning and
            improving.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View My Work
            </a>

            <a
              href="https://github.com/Vansh794"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Temporary section */}
      <section
        id="projects"
        className="flex min-h-[50vh] items-center justify-center border-t border-white/10"
      >
        <h2 className="text-3xl font-bold text-white">
          Projects coming next...
        </h2>
      </section>
    </main>
  );
}