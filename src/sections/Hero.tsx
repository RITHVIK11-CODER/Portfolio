import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Scene from "../components/3d/Scene";
import MagneticButton from "../components/MagneticButton";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    mouseX.set(x * 18);
    mouseY.set(y * 18);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#0B0B0C]"
    >
      {/* ================================
          BACKGROUND GRID
      ================================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#F5F2EA 1px, transparent 1px), linear-gradient(90deg, #F5F2EA 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* ================================
          AMBIENT GLOW
      ================================= */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B35]/[0.045] blur-[140px]" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[300px] w-[300px] rounded-full bg-[#FF6B35]/[0.025] blur-[100px]" />

      {/* ================================
          MAIN CONTAINER
      ================================= */}
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">

          {/* =================================
              LEFT — INTRO
          ================================= */}
          <div className="relative z-30">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#FF6B35]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#777873]">
                Software Engineer / Builder
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-[#F5F2EA]"
            >
              RITHVIK
              <br />

              <span className="text-[#FF6B35]">
                NAG.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-xl text-sm leading-7 text-[#A7A5A0] sm:text-base"
            >
              I build practical digital products, platforms, and developer
              tools — turning ideas into software people can actually use.
            </motion.p>

            {/* =================================
                CTA BUTTONS
            ================================= */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {/* Primary */}
              <MagneticButton
                href="#work"
                className="px-6 py-3.5 sm:px-7"
              >
                View my work

                <ArrowUpRight
                  size={14}
                  className="ml-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </MagneticButton>

              {/* Resume */}
              <a
                href="/Rithvik-Nag-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[#25262A] bg-[#111214]/70 px-6 py-3.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#A7A5A0] shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-300 hover:border-[#FF6B35]/50 hover:bg-[#17181A] hover:text-[#F5F2EA] hover:shadow-[0_12px_35px_rgba(255,107,53,0.08)] sm:px-7"
              >
                Download resume

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            {/* =================================
                META
            ================================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#55565A]">
                Based in Hyderabad / India
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#55565A]">
                Available for opportunities
              </span>
            </motion.div>
          </div>

          {/* =================================
              RIGHT — PORTRAIT + 3D CORE
          ================================= */}
          <motion.div
            style={{
              x: springX,
              y: springY,
            }}
            className="relative mx-auto h-[430px] w-full max-w-[560px] lg:h-[620px]"
          >
            {/* ================================
                ORBIT RING 1
            ================================= */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6B35]/15 sm:h-[420px] sm:w-[420px]"
            />

            {/* ================================
                ORBIT RING 2
            ================================= */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rotate-[25deg] rounded-full border border-white/[0.07] sm:h-[500px] sm:w-[500px]"
            />

            {/* ================================
                ORBIT DOT
            ================================= */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 sm:h-[500px] sm:w-[500px]"
            >
              <span className="absolute right-[8%] top-1/2 h-2 w-2 rounded-full bg-[#FF6B35] shadow-[0_0_20px_rgba(255,107,53,0.7)]" />
            </motion.div>

            {/* ================================
                3D DIGITAL CORE
            ================================= */}
            <div className="absolute inset-0 z-10">
              <Scene />
            </div>

            {/* ================================
                PORTRAIT
            ================================= */}
            <div className="portrait-stage absolute inset-0 z-20 flex items-center justify-center">
              <motion.div
                whileHover={{
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-[260px] w-[260px] overflow-hidden rounded-full border border-white/15 bg-[#111214] shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:h-[330px] sm:w-[330px] lg:h-[390px] lg:w-[390px]"
              >
                <img
                  src="/images/profile.jpg"
                  alt="Rithvik Nag"
                  className="h-full w-full object-cover object-center"
                />

                {/* Subtle border */}
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[#FF6B35]/20" />
              </motion.div>
            </div>

            {/* ================================
                TECH LABEL
            ================================= */}
            <div className="absolute bottom-5 right-2 z-30 hidden sm:block">
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#55565A]">
                Digital Core / 01
              </span>
            </div>

            {/* Top technical marker */}
            <div className="absolute right-5 top-8 z-30 hidden sm:block">
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#55565A]">
                System / Online
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================================
          SCROLL INDICATOR
      ================================= */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.6,
        }}
        className="absolute bottom-7 left-5 hidden items-center gap-3 sm:flex lg:left-12"
      >
        <span className="h-8 w-px bg-gradient-to-b from-[#FF6B35] to-transparent" />

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#55565A]">
          Scroll to explore
        </span>
      </motion.a>

      {/* Version */}
      <div className="absolute bottom-7 right-5 hidden lg:right-12 lg:block">
        <span className="font-mono text-[8px] tracking-[0.14em] text-[#55565A]">
          RN / 2026
        </span>
      </div>
    </section>
  );
}

export default Hero;