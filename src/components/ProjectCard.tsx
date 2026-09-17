import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  href?: string;
  featured?: boolean;
}

function ProjectCard({
  number,
  title,
  category,
  description,
  tech,
  href,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden border border-[#25262A] bg-[#111214] ${
        featured ? "min-h-[420px]" : "min-h-[360px]"
      }`}
    >
      {/* Hover glow */}
      <motion.div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#FF6B35]/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.15 }}
        transition={{ duration: 0.45 }}
      />

      {/* Top */}
      <div className="relative z-10 flex items-start justify-between p-6 md:p-8">
        <span className="font-mono text-xs text-[#55565A]">
          {number}
        </span>

        {href ? (
          <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.12, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#25262A] text-[#A7A5A0] transition-colors duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35]"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight size={17} />
          </motion.a>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#25262A] text-[#55565A]">
            <ArrowUpRight size={17} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-[calc(100%-90px)] flex-col justify-end p-6 md:p-8">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF6B35]">
          {category}
        </p>

        <h3 className="font-display text-2xl font-medium tracking-[-0.04em] text-[#F5F2EA] md:text-3xl">
          {title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-[#A7A5A0]">
          {description}
        </p>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="border border-[#25262A] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-[#777873] transition-colors duration-300 group-hover:border-[#333438] group-hover:text-[#A7A5A0]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom orange line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#FF6B35]"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.article>
  );
}

export default ProjectCard;