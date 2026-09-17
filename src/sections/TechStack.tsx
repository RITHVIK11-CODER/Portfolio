import { motion } from "motion/react";

const stack = [
  {
    category: "Languages",
    items: ["Java", "Python", "C++", "TypeScript", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    items: ["Supabase", "PostgreSQL", "MongoDB", "MySQL", "Node.js"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
  },
];

function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-[#25262A] bg-[#111214] py-28 text-[#F5F2EA] sm:py-36"
    >
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr]">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-px w-8 bg-[#FF6B35]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#55565A]">
              06 / Stack
            </span>
          </motion.div>

          {/* Heading */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.88] tracking-[-0.06em]"
            >
              Tools of
              <br />
              <span className="text-[#FF6B35]">the trade.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-xl text-base leading-7 text-[#A7A5A0]"
            >
              Technologies I use to design, build, deploy and iterate on
              digital products.
            </motion.p>
          </div>
        </div>

        {/* Stack grid */}
        <div className="mt-20 grid border-t border-[#25262A] md:grid-cols-2">
          {stack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`group border-b border-[#25262A] p-7 sm:p-10 ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#55565A]">
                  {group.items.length} technologies
                </span>
              </div>

              <h3 className="mt-10 font-display text-2xl tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#FF6B35] sm:text-3xl">
                {group.category}
              </h3>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#25262A] bg-[#0B0B0C] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[#A7A5A0] transition-all duration-300 hover:border-[#FF6B35]/50 hover:text-[#FF6B35]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-sm leading-7 text-[#55565A]">
            The stack changes with the problem. I focus on choosing tools that
            make products reliable, maintainable and useful.
          </p>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FF6B35]">
            Always learning / Always building
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;