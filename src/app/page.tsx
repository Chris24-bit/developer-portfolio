
const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "MySQL",
  "Git & GitHub",
];



const projects = [
  {
    number: "01",
    name: "AEGIS",
    type: "Emergency Response System",
    description:
      "A web-based emergency reporting system with dashboards for citizens, responders, and administrators. Citizens can submit emergency reports, while responders can manage report statuses.",
    tech: ["PHP", "MySQL", "PDO", "JavaScript"],
    color: "from-cyan-500/20 to-blue-600/5",
    github: "https://github.com/Chris24-bit/AEGIS",
    demo: "",
  },
  {
    number: "02",
    name: "Developer Portfolio",
    type: "Personal Portfolio Website",
    description:
      "A personal portfolio showcasing my background, technical skills, and development projects, built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-emerald-500/20 to-teal-600/5",
    github: "",
    demo: "",
  },
];



export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080b12]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-cyan-400">&lt;</span>
            Christopher
            <span className="text-cyan-400"> /&gt;</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#home" className="transition hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-5 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 lg:px-10"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[120px]" />

        <div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Computer Science Student
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Christopher
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Dendero.
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-gray-300 sm:text-2xl">
              Aspiring Full-Stack Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              I&apos;m a Computer Science student passionate about building
              useful, modern, and user-friendly web applications. I&apos;m
              constantly learning and turning ideas into working projects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-[#080b12] transition hover:bg-cyan-300"
              >
                Explore My Work ↗
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>⌘ Web Development</span>
              <span>⌘ Problem Solving</span>
              <span>⌘ Continuous Learning</span>
            </div>
          </div>

          {/* Developer visual */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#141d2b] to-[#0b1019] p-5 shadow-2xl shadow-cyan-950/20">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs text-gray-500">
                  developer.ts
                </span>
              </div>

              <div className="space-y-4 py-7 font-mono text-sm leading-7">
                <p className="text-gray-500">
                  {"// A little about me"}
                </p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span> = {"{"}
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">name</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Christopher&quot;
                  </span>
                  ,
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">role</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Full-Stack Developer&quot;
                  </span>
                  ,
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">learning</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Every day&quot;
                  </span>
                  ,
                </p>
                <p className="pl-5">
                  <span className="text-sky-300">building</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Something great&quot;
                  </span>
                </p>
                <p>{"};"}</p>
                <p className="pt-3 text-gray-500">
                  {"// Turning ideas into reality."}
                </p>
                <p>
                  <span className="text-purple-400">console</span>.
                  <span className="text-yellow-300">log</span>(
                  <span className="text-emerald-300">
                    &quot;Let&apos;s build!&quot;
                  </span>
                  );
                </p>
              </div>

              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Current status
                  </span>
                  <span className="text-xs text-emerald-400">
                    Learning & Building
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-sm text-gray-500">
              Code. Learn. Build. Repeat.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Get to know me
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Learning today.
              <br />
              Building for tomorrow.
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-gray-400">
            <p>
              I&apos;m pursuing a degree in Computer Science and developing my
              skills in web development, software engineering, and database
              management.
            </p>
            <p>
              My goal is to become a capable Full-Stack Developer who can build
              complete applications, from intuitive interfaces to reliable
              back-end systems.
            </p>
            <p>
              I believe the best way to improve is by creating real projects,
              solving problems, and learning something new every day.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My toolkit
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technologies & Skills
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Technologies I&apos;m learning and using as I grow into a
            Full-Stack Developer.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-center text-sm font-medium text-gray-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
              >
                {skill}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-500">
            Skill list is editable. Keep only technologies you can honestly
            discuss in an interview.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Selected work
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Featured Projects
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-gray-400">
              A selection of projects that represent my learning journey and
              the applications I want to keep improving.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d111b] transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div
                  className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.color}`}
                >
                  <div className="text-center">
                    <p className="text-sm tracking-[0.3em] text-gray-400">
                      PROJECT {project.number}
                    </p>
                    <p className="mt-3 text-2xl font-bold tracking-tight text-white">
                      {project.name}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      {project.type}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  
<div className="mt-6 flex flex-wrap gap-3">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#080b12] transition hover:bg-cyan-300"
    >
      View Code ↗
    </a>
  )}

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
    >
      Live Demo ↗
    </a>
  )}
</div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/[0.06] bg-gradient-to-b from-cyan-500/[0.05] to-transparent"
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Let&apos;s build something
            <span className="block text-cyan-400">meaningful.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
            I&apos;m interested in connecting with developers, collaborating on
            projects, and exploring opportunities to grow in software
            development.
          </p>

          <a
            href="mailto:your.email@example.com"
            className="mt-9 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#080b12] transition hover:bg-cyan-300"
          >
            Email Me ↗
          </a>

          <p className="mt-4 text-xs text-gray-500">
            Replace the example email address with your real email.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row lg:px-10">
          <a href="#home" className="font-semibold text-gray-300">
            <span className="text-cyan-400">&lt;</span>
            Christopher
            <span className="text-cyan-400"> /&gt;</span>
          </a>
          <p>
  © 2026 Christopher Dendero. Built with Next.js.
</p>
          <a href="#home" className="transition hover:text-cyan-400">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
