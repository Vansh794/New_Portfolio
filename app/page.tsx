import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        
        {/* Background Grid */}
        <div className="grid-background absolute inset-0 opacity-60" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

        {/* Small Top Glow */}
        <div className="absolute left-1/2 top-20 h-40 w-96 -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center">
          
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            <span className="text-xs font-medium tracking-wide text-zinc-400">
              Building • Learning • Exploring
            </span>
          </div>

          {/* Role */}
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            AI/ML Developer • Software Engineer
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Hi, I am{" "}
            <span className="gradient-text">Vansh.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build intelligent systems, full-stack applications, and
            meaningful digital products while constantly learning and
            improving.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
            >
              View My Work

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://github.com/Vansh794"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/[0.08]"
            >
              GitHub →
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-zinc-600">
              Currently working with
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Java",
                "Python",
                "React",
                "Next.js",
                "Machine Learning",
                "Computer Vision",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 text-xs text-zinc-500 transition-colors hover:border-white/10 hover:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 sm:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Temporary Projects Section */}
      <section
        id="projects"
        className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-t border-white/10"
      >
        <div className="grid-background absolute inset-0 opacity-20" />

        <div className="relative z-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            What I have built
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projects coming next...
          </h2>
        </div>
      </section>
    </main>
  );
}