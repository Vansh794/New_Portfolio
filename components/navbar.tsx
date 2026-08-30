const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-white"
        >
          Vansh.
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
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

        {/* Resume and GitHub */}
        <div className="flex items-center gap-3">
          {/* Resume */}
          <a
            href="/Vansh_Baranwal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.08]"
          >
          Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Vansh794"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.08]"
          >
          GitHub
          </a>
        </div>
      </div>
    </header>
  );
}