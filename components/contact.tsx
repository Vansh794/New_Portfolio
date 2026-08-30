export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-background py-24 sm:py-32"
    >
      {/* Background Grid */}
      <div className="grid-background absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Heading */}
        <div className="text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Let&apos;s work together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Have a project in mind or want to connect? Feel free to reach out.
          </p>
        </div>

        {/* Email Section */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-y border-white/10 py-10 md:flex-row">
          
          {/* Email */}
          <a
            href="mailto:vanshbaranwal834@gmail.com"
            className="flex items-center gap-5 text-xl font-medium text-white transition hover:text-zinc-400 sm:text-2xl"
          >
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-zinc-300"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <span className="break-all">
              vanshbaranwal834@gmail.com
            </span>

            <span className="hidden text-zinc-500 sm:inline">↗</span>
          </a>

          {/* Send Email Button */}
          <a
            href="mailto:vanshbaranwal834@gmail.com"
            className="rounded-full bg-white px-10 py-4 text-base font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
          >
            Send Email ↗
          </a>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 gap-6 border-b border-white/10 py-10 sm:grid-cols-2">
          
          {/* GitHub */}
          <a
            href="https://github.com/Vansh794"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-4">
              
              {/* GitHub Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 text-white"
              >
                <path d="M12 .5C5.73.5.65 5.58.65 11.85c0 4.9 3.18 9.05 7.6 10.52.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.09.67-3.74-1.31-3.74-1.31-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.47-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.39.34.74 1 .74 2.02 0 1.46-.01 2.63-.01 2.99 0 .3.2.65.78.54 4.41-1.47 7.59-5.62 7.59-10.52C23.35 5.58 18.27.5 12 .5Z" />
              </svg>

              <span className="text-lg font-medium text-white">
                GitHub
              </span>
            </div>

            <span className="text-xl text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vansh-baranwal-788118381"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-6 py-5 transition-all duration-300 hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-4">
              
              {/* LinkedIn Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 text-white"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V9H7.1v11.45Z" />
              </svg>

              <span className="text-lg font-medium text-white">
                LinkedIn
              </span>
            </div>

            <span className="text-xl text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}