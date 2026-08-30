const projects = [
  {
    title: "HomeValue AI",
    category: "Machine Learning • Full Stack",
    description:
      "A modern full-stack web application that predicts house prices using machine learning based on property features.",
    technologies: ["Python", "Machine Learning", "React", "Flask"],
    github: "https://github.com/Vansh794",
  },
  {
    title: "Anomaly Behaviour Detection",
    category: "Computer Vision • AI",
    description:
      "An intelligent computer vision system designed to detect unusual human behaviour using OpenCV and MediaPipe.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "https://github.com/Vansh794/Anomaly-Behaviour-Detection",
  },
  {
    title: "QR Scanner",
    category: "Full Stack Development",
    description:
      "A modern web application for scanning QR codes with a camera and securely managing the scanned information.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask"],
    github: "https://github.com/Vansh794/QR_Scanner",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      {/* Background */}
      <div className="grid-background absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Things I have{" "}
            <span className="gradient-text">built.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of projects where I experiment with Artificial
            Intelligence, Machine Learning, Computer Vision, and modern web
            technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* Project Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-widest text-zinc-600">
                  PROJECT
                </span>

                <span className="text-lg text-zinc-500 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              {/* Content */}
              <div className="mt-10">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-zinc-400"
              >
                View Project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}