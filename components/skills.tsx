const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Node.js"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Computer Vision",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Vercel","Render"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      {/* Background */}
      <div className="grid-background absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            My Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technologies I work{" "}
            <span className="gradient-text">with.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A growing collection of technologies and tools I use to build
            intelligent applications, modern web experiences, and
            real-world projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-center text-sm text-zinc-600">
          Always learning, experimenting, and building something new.
        </p>
      </div>
    </section>
  );
}