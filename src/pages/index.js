import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Transitions from "@/Components/Transitions";
import ProfilePic from "../../public/images/profile/Parth_pic.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const tags = ["LLMs & RAG", "Distributed Systems", "Data Engineering", "Full-Stack"];

const metrics = [
  { value: "5+", label: "LLM Systems" },
  { value: "18%", label: "Accuracy Gain" },
  { value: "3×", label: "Faster Pipelines" },
  { value: "50+", label: "Technologies" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Parth Pidadi — Data Scientist & ML Engineer</title>
        <meta
          name="description"
          content="Parth Pidadi — MS Data Science at Stony Brook. Building production LLM systems, distributed infrastructure, and full-stack applications."
        />
      </Head>
      <Transitions />

      {/* ─── MOBILE: stacked layout ─── */}
      <div className="hidden lg:flex flex-col dark:text-light text-ink min-h-[calc(100vh-72px)]">
        {/* Photo banner at top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-56 sm:h-44 xs:h-36 overflow-hidden flex-shrink-0"
        >
          <Image
            src={ProfilePic}
            alt="Parth Pidadi"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Gradient fade bottom */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t dark:from-dark from-light to-transparent" />
          {/* Dot grid overlay */}
          <div className="absolute inset-0 dot-grid-dark dark:block hidden opacity-40" />
        </motion.div>

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-5 xs:px-4 py-8 relative">
          <div className="absolute inset-0 dot-grid-dark dark:block hidden pointer-events-none opacity-50" />
          <div className="absolute inset-0 dot-grid-light dark:hidden block pointer-events-none opacity-50" />
          <div className="relative z-10">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="mb-5">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-ink/70 dark:text-light/70 border border-border dark:border-border rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block animate-pulse flex-shrink-0" />
                MS DS @ Stony Brook · Seeking FT&apos;26
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-syne font-black leading-[0.88] dark:text-light text-ink mb-3 select-none"
              style={{ fontSize: "clamp(4rem, 15vw, 6.5rem)" }}
            >
              PARTH<br />PIDADI<span className="text-gold">.</span>
            </motion.h1>

            {/* Role */}
            <motion.p {...fadeUp(0.3)} className="font-syne font-bold text-sm tracking-[0.18em] uppercase text-gold mb-4">
              Data Scientist & ML Engineer
            </motion.p>

            {/* Bio */}
            <motion.p {...fadeUp(0.38)} className="font-lora text-sm leading-relaxed text-ink/75 dark:text-light/75 mb-5 max-w-sm">
              Building production LLM systems, Kafka-based distributed backends, and end-to-end
              data pipelines. Currently at SUNY Research Foundation, MS at Stony Brook.
            </motion.p>

            {/* Tags */}
            <motion.div {...fadeUp(0.44)} className="flex flex-wrap gap-1.5 mb-6">
              {tags.map((tag) => (
                <span key={tag} className="font-mono text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border border-border dark:border-border text-ink/65 dark:text-light/65">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-2 mb-8">
              <Link href="/Parth_Pidadi_Resume.pdf" target="_blank"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gold text-light font-syne font-bold text-xs tracking-[0.1em] uppercase">
                Resume ↓
              </Link>
              <Link href="/projects"
                className="inline-flex items-center px-5 py-2 rounded-lg border border-border dark:border-border font-syne font-bold text-xs tracking-[0.1em] uppercase">
                Projects
              </Link>
              <Link href="/about"
                className="inline-flex items-center px-5 py-2 rounded-lg border border-border dark:border-border font-syne font-bold text-xs tracking-[0.1em] uppercase">
                About
              </Link>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pidadiparth@gmail.com"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-lg border border-border dark:border-border font-syne font-bold text-xs tracking-[0.1em] uppercase">
                Contact
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div {...fadeUp(0.56)} className="grid grid-cols-4 xs:grid-cols-2 gap-4 pt-5 border-t border-border dark:border-border">
              {metrics.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-syne font-black text-xl xs:text-lg leading-none dark:text-light text-ink">{value}</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted mt-1">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── DESKTOP: side-panel layout ─── */}
      <main className="lg:hidden relative w-full min-h-[calc(100vh-72px)] flex dark:text-light text-ink overflow-hidden hero-glow">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid-dark dark:block hidden pointer-events-none" />
        <div className="absolute inset-0 dot-grid-light dark:hidden block pointer-events-none" />

        {/* Left: Text */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-16 xl:px-12 py-12 max-w-[62%] xl:max-w-[64%]">
          {/* Badge */}
          <motion.div {...fadeUp(0.05)} className="mb-7">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-ink/70 dark:text-light/70 border border-border dark:border-border rounded-full px-4 py-1.5 bg-surface/40 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block animate-pulse" />
              MS DS @ Stony Brook · Seeking Full-time&apos;26
            </span>
          </motion.div>

          {/* Name */}
          <motion.div {...fadeUp(0.15)} className="mb-4">
            <h1
              className="font-syne font-black leading-[0.85] tracking-tight dark:text-light text-ink select-none"
              style={{ fontSize: "clamp(5.5rem, 11vw, 11rem)" }}
            >
              PARTH<br />PIDADI<span className="text-gold">.</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p {...fadeUp(0.28)} className="font-syne font-bold text-base tracking-[0.2em] uppercase text-gold mb-5">
            Data Scientist & ML Engineer
          </motion.p>

          {/* Bio */}
          <motion.p {...fadeUp(0.38)} className="font-lora text-[15px] leading-relaxed text-ink/75 dark:text-light/75 max-w-lg mb-6">
            Building production LLM systems, Kafka-based distributed backends,
            and end-to-end data pipelines. Currently at SUNY Research Foundation,
            pursuing MS at Stony Brook.
          </motion.p>

          {/* Tags */}
          <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span key={tag}
                className="font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-border dark:border-border text-ink/65 dark:text-light/65 hover:border-gold dark:hover:border-gold hover:text-gold dark:hover:text-gold transition-colors duration-200">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.52)} className="flex flex-wrap gap-3 mb-12">
            <Link href="/Parth_Pidadi_Resume.pdf" target="_blank"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg bg-gold text-light font-syne font-bold text-sm tracking-[0.1em] uppercase hover:bg-gold-dim transition-colors duration-200 shadow-lg shadow-gold/20">
              Resume
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Link>
            <Link href="/projects"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg border border-border dark:border-border font-syne font-bold text-sm tracking-[0.1em] uppercase hover:border-gold hover:text-gold dark:hover:text-gold transition-colors duration-200">
              Projects
            </Link>
            <Link href="/about"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg border border-border dark:border-border font-syne font-bold text-sm tracking-[0.1em] uppercase hover:border-teal hover:text-teal dark:hover:text-teal transition-colors duration-200">
              About
            </Link>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pidadiparth@gmail.com"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-lg border border-border dark:border-border font-syne font-bold text-sm tracking-[0.1em] uppercase hover:border-teal hover:text-teal dark:hover:text-teal transition-colors duration-200">
              Contact
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div {...fadeUp(0.62)} className="flex items-center gap-10 pt-6 border-t border-border dark:border-border">
            {metrics.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-syne font-black text-2xl leading-none dark:text-light text-ink">{value}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted mt-1">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Full-height photo panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative w-[38%] xl:w-[36%] flex-shrink-0 photo-panel overflow-hidden"
        >
          <Image src={ProfilePic} alt="Parth Pidadi" fill className="object-cover object-center" priority sizes="42vw" />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r dark:from-dark from-light to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t dark:from-dark/70 from-light/70 to-transparent pointer-events-none" />
        </motion.div>
      </main>
    </>
  );
}
