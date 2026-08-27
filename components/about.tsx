export function About() {
  return (
    <section
        id="about"
        className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      {/* Background */}
      <div className="grid-background absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building ideas into meaningful{" "}
            <span className="gradient-text">digital experiences.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Left Side */}
          <div>
            <p className="text-lg leading-8 text-zinc-400">
              I am a developer passionate about building intelligent
              applications and solving real-world problems through technology.
              My journey currently focuses on Artificial Intelligence,
              Machine Learning, full-stack development, and Data Structures
              and Algorithms.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I enjoy turning ideas into working products, whether it is an
              AI-powered system, a modern web application, or a project built
              during a hackathon. I am constantly learning, experimenting,
              and improving my skills through hands-on projects.
            </p>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-zinc-400"
            >
              Explore my projects
              <span>→</span>
            </a>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:bg-white/[0.06]">
              <p className="text-3xl font-bold text-white">AI/ML</p>
              <p className="mt-2 text-sm text-zinc-500">
                Exploring intelligent systems and machine learning.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:bg-white/[0.06]">
              <p className="text-3xl font-bold text-white">Full Stack</p>
              <p className="mt-2 text-sm text-zinc-500">
                Building modern and responsive web applications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:bg-white/[0.06]">
              <p className="text-3xl font-bold text-white">Java + DSA</p>
              <p className="mt-2 text-sm text-zinc-500">
                Strengthening problem-solving and algorithmic thinking.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:bg-white/[0.06]">
              <p className="text-3xl font-bold text-white">Hackathons</p>
              <p className="mt-2 text-sm text-zinc-500">
                Turning ideas into working prototypes under pressure.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}