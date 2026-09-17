import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Sreenidhians Hub",
    category: "Student Platform",
    description:
      "A student collaboration platform designed to connect students, faculty and ideas through structured project discovery, requests and team formation.",
    tags: ["Next.js", "TypeScript", "Supabase", "PWA"],
    status: "LIVE",
    featured: true,
    link: "https://sreenidhians-hub.vercel.app/",
  },
  {
    number: "02",
    title: "ArenaFlow",
    category: "Event Management",
    description:
      "A tournament management platform for esports events covering registration, team verification, allocation, check-in and administrative workflows.",
    tags: ["Next.js", "Supabase", "TypeScript", "RPC"],
    status: "BUILDING",
    featured: true,
    link: "#",
  },
  {
    number: "03",
    title: "Campus Link",
    category: "Campus Technology",
    description:
      "A smart campus web application concept designed to bring important student and campus workflows into one connected digital experience.",
    tags: ["React", "TypeScript", "Web App"],
    status: "BUILDING",
    featured: false,
    link: "#",
  },
  {
    number: "04",
    title: "CodeMate",
    category: "Developer Tool",
    description:
      "A browser-based coding environment with a Monaco-powered editor and execution workflow designed for experimenting with code directly in the browser.",
    tags: ["React", "Monaco", "TypeScript"],
    status: "PROTOTYPE",
    featured: false,
    link: "#",
  },
  {
    number: "05",
    title: "CipherVault",
    category: "Security",
    description:
      "A security-focused project exploring practical approaches to protecting sensitive information through encryption-oriented workflows.",
    tags: ["Python", "Security", "Cryptography"],
    status: "PROJECT",
    featured: false,
    link: "#",
  },
];

function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-[#25262A] bg-[#0B0B0C] py-28 text-[#F5F2EA] sm:py-36"
    >
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#FF6B35]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#55565A]">
                03 / Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]"
            >
              Selected
              <br />
              <span className="text-[#FF6B35]">work.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-sm leading-7 text-[#A7A5A0]"
          >
            A selection of products, platforms and experiments I've designed
            and built around real-world problems.
          </motion.p>
        </div>

        {/* Project list */}
        <div className="mt-20 border-t border-[#25262A]">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group border-b border-[#25262A]"
            >
              <a
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel={project.link !== "#" ? "noreferrer" : undefined}
                className="block py-9 sm:py-12"
              >
                <div className="grid items-center gap-8 lg:grid-cols-[70px_1fr_0.8fr_180px]">

                  {/* Number */}
                  <div className="font-mono text-[11px] tracking-[0.15em] text-[#55565A]">
                    {project.number}
                  </div>

                  {/* Title */}
                  <div>
                    <div className="flex flex-wrap items-center gap-4">

                      <h3 className="font-display text-3xl font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#FF6B35] sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>

                      {project.featured && (
                        <span className="rounded-full border border-[#FF6B35]/30 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.15em] text-[#FF6B35]">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
                      {project.category}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="max-w-md text-sm leading-7 text-[#A7A5A0] transition-colors duration-300 group-hover:text-[#F5F2EA]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#25262A] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#55565A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status + arrow */}
                  <div className="flex items-center justify-between lg:justify-end lg:gap-8">

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#55565A]">
                      {project.status}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#25262A] transition-all duration-300 group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35]">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0B0B0C]"
                      />
                    </div>

                  </div>

                </div>
              </a>
            </motion.article>
          ))}

        </div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-end"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#A7A5A0] transition-colors hover:text-[#FF6B35]"
          >
            <span className="text-base">⌘</span>

            View more on GitHub

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;