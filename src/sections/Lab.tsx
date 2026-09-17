import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";

const builds = [
  {
    number: "01",
    title: "Task Manager",
    description:
      "A cross-platform productivity application focused on organizing tasks, workflows and everyday work in one place.",
    stack: "React Native / Expo / TypeScript",
    icon: Layers3,
    status: "ACTIVE",
  },
  {
    number: "02",
    title: "Campus Link",
    description:
      "A connected campus experience bringing student workflows, information and digital services into a unified platform.",
    stack: "React / TypeScript / Supabase",
    icon: Database,
    status: "BUILDING",
  },
  {
    number: "03",
    title: "Developer Tools",
    description:
      "Experimenting with browser-based development experiences, code execution workflows and tools that reduce repetitive engineering work.",
    stack: "React / TypeScript / Web APIs",
    icon: Code2,
    status: "EXPLORING",
  },
];

function Lab() {
  return (
    <section
      id="lab"
      className="relative overflow-hidden border-t border-[#25262A] bg-[#111214] py-28 text-[#F5F2EA] sm:py-36"
    >
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-px w-8 bg-[#FF6B35]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#55565A]">
              04 / Lab
            </span>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.06em]"
            >
              Currently
              <br />
              <span className="text-[#FF6B35]">building.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-xl text-base leading-7 text-[#A7A5A0]"
            >
              The lab is where unfinished ideas become working products.
              Experiments, prototypes and systems currently taking shape.
            </motion.p>
          </div>
        </div>

        {/* Active indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center gap-3 border-y border-[#25262A] py-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[#FF6B35] opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-[#FF6B35]" />
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A7A5A0]">
            03 active builds
          </span>

          <span className="ml-auto hidden font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A] sm:block">
            Last updated / 2026
          </span>
        </motion.div>

        {/* Builds */}
        <div className="mt-8">
          {builds.map((build, index) => {
            const Icon = build.icon;

            return (
              <motion.article
                key={build.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group border-b border-[#25262A]"
              >
                <div className="grid gap-7 py-9 sm:py-11 lg:grid-cols-[70px_80px_1fr_220px_40px] lg:items-center">

                  {/* Number */}
                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#55565A]">
                    {build.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#25262A] bg-[#0B0B0C] transition-all duration-300 group-hover:border-[#FF6B35]">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#A7A5A0] transition-colors group-hover:text-[#FF6B35]"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#FF6B35] sm:text-3xl">
                      {build.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#A7A5A0]">
                      {build.description}
                    </p>

                    <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#55565A]">
                      {build.stack}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-3 lg:justify-end">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#A7A5A0]">
                      {build.status}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#25262A] transition-all duration-300 group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35] lg:flex">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0B0B0C]"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div className="flex items-center gap-4">
            <Sparkles
              size={18}
              className="text-[#FF6B35]"
            />

            <p className="font-display text-xl tracking-[-0.02em] sm:text-2xl">
              Ideas are only useful when you build them.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#A7A5A0] transition-colors hover:text-[#FF6B35]"
          >
            Start a conversation

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Lab;