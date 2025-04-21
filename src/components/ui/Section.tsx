"use client";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: "white" | "light" | "dark";
}

const Section = ({
  children,
  className = "",
  id,
  bgColor = "white",
}: SectionProps) => {
  const getBgColor = () => {
    switch (bgColor) {
      case "light":
        return "bg-gray-light dark:bg-slate-800/50";
      case "dark":
        return "bg-slate-800 dark:bg-slate-900 text-white";
      default:
        return "bg-white dark:bg-slate-900";
    }
  };

  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-20 ${getBgColor()} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">{children}</div>
    </motion.section>
  );
};

export default Section;
