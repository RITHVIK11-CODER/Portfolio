import { motion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    number: "01",
    period: "2025 — PRESENT",
    role: "Founder / Technology & Strategy Lead",
    company: "KAGE ORIGIN",
    type: "Startup / Product & Strategy",
    description:
      "Working across technology, product strategy and execution to turn ideas into practical digital products and experiments.",
    highlights: [
      "Product & technology direction",
      "Digital product development",
      "Business and growth strategy",
    ],
  },
  {
    number: "02",
    period: "2025 — PRESENT",
    role: "General Secretary",
    company: "SUH ESPORTS CLUB",
    type: "Leadership / Community",
    description:
      "Leading operational coordination and technology initiatives for the university esports community while supporting tournaments, recruitment and club activities.",
    highlights: [
      "Tournament & event coordination",
      "Club operations",
      "Recruitment & team management",
    ],
  },
  {
    number: "03",
    period: "2024 — PRESENT",
    role: "Software Developer / Builder",
    company: "INDEPENDENT PROJECTS",
    type: "Engineering / Product",
    description:
      "Designing and developing web applications, platforms and developer tools focused on solving practical problems.",
    highlights: [
      "Full-stack web development",
      "System & database design",
      "Deployment & iteration",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-[#25262A] bg-[#0B0B0C] py-28 text-[#F5F2EA] sm:py-36"
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
              05 / Experience
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
              Experience &
              <br />
              <span className="text-[#FF6B35]">leadership.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 max-w-xl text-base leading-7 text-[#A7A5A0]"
            >
              Beyond writing code, I work on teams, products and initiatives
              where technology needs to connect with people and execution.
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">

          {/* Timeline line */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-[#25262A] md:block" />

          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative border-t border-[#25262A] py-10 md:pl-16 md:py-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-[52px] hidden h-3 w-3 rounded-full border border-[#FF6B35] bg-[#0B0B0C] transition-all duration-300 group-hover:bg-[#FF6B35] md:block" />

                <div className="grid gap-8 lg:grid-cols-[150px_1fr_0.8fr]">

                  {/* Period */}
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-[#55565A]">
                      {experience.period}
                    </p>

                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#55565A]">
                      {experience.number}
                    </p>
                  </div>

                  {/* Main role */}
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#25262A] bg-[#111214] lg:hidden">
                        <BriefcaseBusiness
                          size={16}
                          className="text-[#FF6B35]"
                        />
                      </div>

                      <div>
                        <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#FF6B35] sm:text-3xl">
                          {experience.role}
                        </h3>

                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#A7A5A0]">
                          {experience.company}
                        </p>

                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#55565A]">
                          {experience.type}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 max-w-2xl text-sm leading-7 text-[#A7A5A0]">
                      {experience.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="lg:pt-1">
                    <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
                      Focus
                    </p>

                    <div className="space-y-3">
                      {experience.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <span className="h-px w-5 bg-[#FF6B35]/60" />

                          <span className="text-sm text-[#F5F2EA]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-[#25262A] pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
              Open to meaningful opportunities
            </p>

            <p className="mt-2 text-sm text-[#A7A5A0]">
              Software engineering · Product · Technology
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#F5F2EA] transition-colors hover:text-[#FF6B35]"
          >
            Let's connect

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;