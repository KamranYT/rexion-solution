"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-primary">
            Rexion<span className="text-secondary">Solution</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-lg"
        >
          <nav className="flex flex-col py-4">
            <MobileNavLink
              href="/"
              label="Home"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/about"
              label="About"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/services"
              label="Services"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink
              href="/contact"
              label="Contact"
              onClick={() => setIsMenuOpen(false)}
            />
          </nav>
        </motion.div>
      )}
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="relative font-medium text-gray-dark hover:text-primary transition-colors group"
    >
      {label}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  );
};

const MobileNavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className="px-6 py-3 font-medium text-gray-dark hover:bg-gray-light hover:text-primary transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;
