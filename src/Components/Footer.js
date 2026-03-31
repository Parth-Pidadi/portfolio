import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import HireMe from "./HireMe";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border dark:border-border dark:text-light text-ink mt-8">
      <Layout className="py-6 flex items-center justify-between md:flex-col md:gap-4 md:items-start sm:py-6 xs:py-4">
        <span className="font-mono text-xs tracking-widest uppercase text-muted">
          &copy; {new Date().getFullYear()} Parth Pidadi
        </span>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/Parth-Pidadi"
            target="_blank"
            className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold dark:hover:text-gold transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/parthpidadi/"
            target="_blank"
            className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold dark:hover:text-gold transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pidadiparth@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-muted hover:text-teal dark:hover:text-teal transition-colors duration-200"
          >
            Email
          </a>
        </div>

        <span className="font-mono text-xs text-muted">
          Built with Next.js + Tailwind
          <span className="text-gold ml-1">.</span>
        </span>
      </Layout>
      <HireMe />
    </footer>
  );
};

export default Footer;
