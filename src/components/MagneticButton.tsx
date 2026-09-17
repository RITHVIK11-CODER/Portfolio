import { useRef } from "react";
import { motion } from "motion/react";

type MagneticButtonProps = {
  children: any;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = "translate(0px, 0px)";
    }
  };

  const content = (
    <>
      {/* Hover fill */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#FF8A5B]"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </>
  );

  const classNameValue = `
    group relative inline-flex items-center justify-center
    overflow-hidden rounded-full
    border border-[#FF6B35]
    bg-[#FF6B35]
    px-6 py-3.5
    font-mono text-[10px]
    uppercase tracking-[0.14em]
    text-[#0B0B0C]
    shadow-[0_8px_30px_rgba(255,107,53,0.12)]
    transition-all duration-300
    hover:shadow-[0_12px_40px_rgba(255,107,53,0.22)]
    will-change-transform
    ${className}
  `;

  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={classNameValue}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={classNameValue}
    >
      {content}
    </button>
  );
}

export default MagneticButton;