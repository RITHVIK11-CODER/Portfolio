import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 900;

    const animate = (now: number) => {
      const elapsed = now - start;
      const value = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const eased = 1 - Math.pow(1 - value, 3);

      setProgress(Math.round(eased * 100));

      if (value < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setDone(true), 180);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.015,
            transition: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0B0C]"
        >
          <div className="w-[min(420px,80vw)]">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-12 flex items-center justify-between"
            >
              <span className="font-display text-2xl font-semibold tracking-[-0.06em] text-[#F5F2EA]">
                RN
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#55565A]">
                Portfolio
              </span>
            </motion.div>

            {/* Main text */}
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#FF6B35]">
                  Initializing
                </p>

                <h1 className="font-display text-xl font-medium tracking-tight text-[#F5F2EA]">
                  Rithvik Nag
                </h1>
              </div>

              <motion.span
                key={progress}
                className="font-mono text-sm text-[#A7A5A0]"
              >
                {String(progress).padStart(3, "0")}%
              </motion.span>
            </div>

            {/* Progress */}
            <div className="relative h-[2px] w-full overflow-hidden bg-[#25262A]">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#FF6B35]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom metadata */}
            <div className="mt-4 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#55565A]">
                Software Engineer
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#55565A]">
                Hyderabad / India
              </span>
            </div>
          </div>

          {/* Ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B35]/[0.035] blur-[100px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;