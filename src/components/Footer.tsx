import { ArrowUpRight, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#25262A] bg-[#0B0B0C] text-[#F5F2EA]">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* Large CTA */}
        <div className="border-b border-[#25262A] py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            <div>
              <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.25em] text-[#FF6B35]">
                RITHVIK NAG / 2026
              </p>

              <h2 className="max-w-4xl font-display text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.07em]">
                Keep
                <br />
                <span className="text-[#FF6B35]">building.</span>
              </h2>
            </div>

            <motion.a
              href="#home"
              whileHover={{ y: -5 }}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#25262A] transition-colors hover:border-[#FF6B35] hover:bg-[#FF6B35]"
            >
              <ArrowUp
                size={20}
                className="transition-colors hover:text-[#0B0B0C]"
              />
            </motion.a>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-[1fr_0.5fr_0.5fr]">

          {/* Brand */}
          <div>
            <p className="font-display text-xl font-medium tracking-[-0.03em]">
              RITHVIK<span className="text-[#FF6B35]">.</span>
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#55565A]">
              Software engineer and builder focused on turning ideas into
              useful digital products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
              Navigate
            </p>

            <div className="flex flex-col gap-3">
              {[
                ["Work", "#work"],
                ["Lab", "#lab"],
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Stack", "#stack"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-sm text-[#A7A5A0] transition-colors hover:text-[#FF6B35]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
              Connect
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/RITHVIK11-CODER"
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-2 text-sm text-[#A7A5A0] transition-colors hover:text-[#FF6B35]"
              >
                GitHub
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/rithvik-nag-medudhula-2b0a35374/"
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-2 text-sm text-[#A7A5A0] transition-colors hover:text-[#FF6B35]"
              >
                LinkedIn
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="mailto:rithiviknag1177@gmail.com"
                className="group flex w-fit items-center gap-2 text-sm text-[#A7A5A0] transition-colors hover:text-[#FF6B35]"
              >
                Email
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-4 border-t border-[#25262A] py-6 sm:flex-row sm:items-center">

          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#55565A]">
            © {year} Rithvik Nag. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#55565A]">
              Designed & built with curiosity
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;