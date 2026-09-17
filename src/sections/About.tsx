import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#25262A] bg-[#0B0B0C] py-28 text-[#F5F2EA] sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#FF6B35]/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* HEADER */}
        <div className="grid gap-12 lg:grid-cols-[0.3fr_1fr]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-px w-8 bg-[#FF6B35]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#55565A]">
              02 / About
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-5xl font-display text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em]">
              I build software that{" "}
              <span className="text-[#FF6B35]">
                solves real problems.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="mt-24 grid items-center gap-20 lg:grid-cols-[1fr_0.75fr]">

          {/* STORY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="max-w-3xl text-xl leading-9 text-[#F5F2EA] sm:text-2xl sm:leading-10">
              I'm a Computer Science student and software builder focused on
              turning ideas into useful digital products.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#A7A5A0]">
              My work sits between software engineering, product thinking and
              experimentation. I enjoy taking an idea from a rough concept,
              designing the system behind it, building the product and
              eventually putting it into the hands of real users.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#A7A5A0]">
              I've worked on web applications, student platforms, event
              management systems, AI-powered tools and developer-focused
              products. My goal is not simply to write code, but to understand
              the problem and build something that can actually be used.
            </p>

            <a
              href="#work"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#25262A] pb-2 font-mono text-xs uppercase tracking-[0.16em] text-[#F5F2EA] transition-colors hover:border-[#FF6B35] hover:text-[#FF6B35]"
            >
              Explore my work

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* PREMIUM PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-[470px] lg:mr-0"
          >

            {/* Orange glow behind image */}
            <div className="pointer-events-none absolute -inset-6 rounded-[45px] bg-[#FF6B35]/10 blur-[45px]" />

            {/* Outer technical frame */}
            <div className="relative">

              {/* Offset orange frame */}
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[32px] border border-[#FF6B35]/35" />

              {/* Secondary frame */}
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[32px] border border-white/[0.08]" />

              {/* Main image */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45 }}
                className="group relative z-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#111214] shadow-[0_35px_100px_rgba(0,0,0,0.65)]"
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <img
                    src="/images/about.jpg"
                    alt="Rithvik Nag"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Very subtle dark gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/60 via-transparent to-transparent" />

                  {/* Orange highlight */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[#FF6B35]/[0.05]" />
                  </div>

                </div>

                {/* Bottom information panel */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                      RITHVIK NAG
                    </p>

                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/80">
                      Software / Product
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur-md">
                    <ArrowUpRight
                      size={14}
                      className="text-[#FF6B35]"
                    />
                  </div>

                </div>
              </motion.div>

              {/* Top technical marker */}
              <div className="absolute -right-1 top-8 z-20 flex items-center gap-2">
                <span className="h-px w-8 bg-[#FF6B35]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#55565A]">
                  002 / PROFILE
                </span>
              </div>

              {/* Bottom left coordinate */}
              <div className="absolute -bottom-10 left-2 z-20">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#55565A]">
                  Hyderabad / India
                </p>
              </div>

              {/* Corner details */}
              <div className="absolute -left-2 -top-2 z-20 h-8 w-8 border-l border-t border-[#FF6B35]" />

              <div className="absolute -bottom-2 -right-2 z-20 h-8 w-8 border-b border-r border-[#FF6B35]" />

            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-32 grid border-y border-[#25262A] sm:grid-cols-3">

          <div className="border-b border-[#25262A] py-8 sm:border-b-0 sm:border-r sm:px-8">
            <p className="font-display text-4xl text-[#F5F2EA]">
              10+
            </p>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#55565A]">
              Projects Built
            </p>
          </div>

          <div className="border-b border-[#25262A] py-8 sm:border-b-0 sm:border-r sm:px-8">
            <p className="font-display text-4xl text-[#F5F2EA]">
              03+
            </p>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#55565A]">
              Products Deployed
            </p>
          </div>

          <div className="py-8 sm:px-8">
            <p className="font-display text-4xl text-[#FF6B35]">
              ∞
            </p>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#55565A]">
              Ideas to Build
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;