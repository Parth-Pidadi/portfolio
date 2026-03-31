import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link
      href={href}
      className={`${className} relative group font-lora font-semibold text-sm tracking-[0.1em] text-ink dark:text-light hover:text-gold dark:hover:text-gold transition-colors duration-200`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-gold absolute left-0 -bottom-1
        group-hover:w-full transition-[width] ease-in-out duration-300
        ${isActive ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className="relative group font-syne font-black text-3xl tracking-tight uppercase text-light dark:text-ink my-3"
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-gold absolute left-0 -bottom-1
        group-hover:w-full transition-[width] ease-in-out duration-300
        ${isActive ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <header className="z-20 w-full px-16 lg:px-10 md:px-6 sm:px-4 xs:px-3 py-5 sm:py-4 flex items-center justify-between relative">
      {/* Hamburger */}
      <button
        className="flex-col justify-center items-center hidden z-30 lg:flex gap-[5px] p-1"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <span
          className={`bg-ink dark:bg-light block h-[2px] w-6 rounded-full transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`bg-ink dark:bg-light block h-[2px] w-6 rounded-full transition-all duration-300 ${
            isOpen ? "opacity-0 scale-x-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-ink dark:bg-light block h-[2px] w-6 rounded-full transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Desktop nav */}
      <div className="w-full flex justify-between items-center lg:hidden">
        {/* Logo */}
        <Link
          href="/"
          className="font-syne font-black text-2xl tracking-tight text-ink dark:text-light select-none"
        >
          PP<span className="text-gold">.</span>
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-10">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pidadiparth@gmail.com"
            title="Contact"
          />
        </nav>

        {/* Icons */}
        <nav className="flex items-center gap-4">
          <motion.a
            href="https://github.com/Parth-Pidadi"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 text-ink dark:text-light hover:text-gold dark:hover:text-gold transition-colors"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/parthpidadi/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 text-ink dark:text-light hover:text-gold dark:hover:text-gold transition-colors"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            className="w-5 h-5 flex items-center justify-center text-ink dark:text-light hover:text-gold dark:hover:text-gold transition-colors ml-1"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mode === "dark" ? (
              <SunIcon className="fill-light" />
            ) : (
              <MoonIcon className="fill-ink" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2 }}
            className="min-w-[75vw] z-30 flex flex-col fixed justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink/95 dark:bg-light/95 rounded-2xl backdrop-blur-md py-16 gap-1 shadow-2xl border border-border dark:border-border-light"
          >
            <CustomMobileLink toggle={toggle} href="/" title="Home" />
            <CustomMobileLink toggle={toggle} href="/about" title="About" />
            <CustomMobileLink toggle={toggle} href="/projects" title="Projects" />
            <CustomMobileLink
              toggle={toggle}
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pidadiparth@gmail.com"
              title="Contact"
            />
            <div className="flex items-center gap-5 mt-8">
              <motion.a
                href="https://github.com/Parth-Pidadi"
                target="_blank"
                whileHover={{ y: -2 }}
                className="w-7 text-light dark:text-ink"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/parthpidadi/"
                target="_blank"
                whileHover={{ y: -2 }}
                className="w-7 text-light dark:text-ink"
              >
                <LinkedInIcon />
              </motion.a>
              <button
                className="w-7 h-7 flex items-center justify-center text-light dark:text-ink"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "dark" ? (
                  <SunIcon className="fill-light" />
                ) : (
                  <MoonIcon className="fill-ink" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
