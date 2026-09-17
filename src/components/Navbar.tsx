import { useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#FF6B35]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0B0B0C]/70 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-5">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-[#111214]">
              <span className="relative z-10 font-display text-sm font-semibold tracking-[-0.05em] text-[#F5F2EA]">
                RN
              </span>

              <motion.div
                className="absolute inset-0 bg-[#FF6B35]/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </div>

            <div className="hidden sm:block">
              <div className="font-display text-sm font-medium tracking-[-0.03em] text-[#F5F2EA]">
                Rithvik Nag
              </div>

              <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#55565A]">
                Software Engineer
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#777873] transition-colors duration-300 hover:text-[#F5F2EA]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#FF6B35] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Availability */}
            <div className="hidden items-center gap-2 xl:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B35]/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B35]" />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#777873]">
                Open to opportunities
              </span>
            </div>

            {/* Resume */}
            <a
              href="/Rithvik-Nag-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 rounded-xl border border-[#25262A] bg-[#111214]/70 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#A7A5A0] transition-all duration-300 hover:border-[#FF6B35]/50 hover:bg-[#17181A] hover:text-[#F5F2EA] sm:flex"
            >
              Resume

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#25262A] bg-[#111214]/70 text-[#A7A5A0] transition-all duration-300 hover:border-[#FF6B35]/50 hover:text-[#F5F2EA] lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-4 right-4 top-[76px] z-50 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0B0C]/95 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:hidden"
            >
              <div className="p-4">
                {/* Menu Header */}
                <div className="mb-2 flex items-center justify-between px-2 py-2">
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#55565A]">
                    Navigation
                  </span>

                  <span className="font-mono text-[8px] text-[#FF6B35]">
                    06
                  </span>
                </div>

                {/* Links */}
                <div>
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.25,
                      }}
                      className="group flex items-center justify-between border-b border-[#25262A] px-2 py-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[8px] text-[#55565A]">
                          0{index + 1}
                        </span>

                        <span className="font-display text-sm text-[#A7A5A0] transition-colors duration-300 group-hover:text-[#F5F2EA]">
                          {item.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-[#55565A] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF6B35]"
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Resume */}
                <motion.a
                  href="/Rithvik-Nag-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#FF6B35]/50 bg-[#FF6B35]/[0.06] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#F5F2EA] transition-colors duration-300 hover:bg-[#FF6B35]/10"
                >
                  View Resume
                  <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;