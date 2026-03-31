import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Transitions from "@/Components/Transitions";
import ProfilePic from "../../public/images/profile/Parth_pic.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const tags = ["LLMs & RAG", "Distributed Systems", "Data Engineering", "Full-Stack"];

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

      <main className="relative w-full min-h-[calc(100vh-80px)] flex items-center dark:text-light text-ink overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid-dark dark:block hidden pointer-events-none" />
        <div className="absolute inset-0 dot-grid-light dark:hidden block pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none dark:block hidden" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-teal/5 blur-[100px] pointer-events-none dark:block hidden" />

        <Layout className="py-12 md:py-16 sm:py-8 relative z-10">
          <div className="flex items-center justify-between gap-16 xl:gap-10 lg:flex-col lg:gap-12">

            {/* ─── Text block ─── */}
            <div className="flex-1 flex flex-col lg:items-center lg:text-center max-w-2xl">

              {/* Status badge */}
              <motion.div {...fadeUp(0.1)} className="mb-6">
                <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-muted dark:text-muted-light border border-border dark:border-border rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block animate-pulse" />
                  MS DS @ Stony Brook · Seeking Full-time&apos;26
                </span>
              </motion.div>

              {/* Name */}
              <motion.div {...fadeUp(0.2)} className="overflow-hidden mb-3">
                <h1 className="font-syne font-extrabold leading-[0.92] tracking-tight text-[clamp(3.5rem,8vw,6rem)] dark:text-light text-ink">
                  Parth
                  <br />
                  Pidadi
                  <span className="text-gold">.</span>
                </h1>
              </motion.div>

              {/* Role */}
              <motion.p
                {...fadeUp(0.35)}
                className="font-syne font-semibold text-lg tracking-wide text-gold mb-5 uppercase"
              >
                Data Scientist & ML Engineer
              </motion.p>

              {/* Bio */}
              <motion.p
                {...fadeUp(0.45)}
                className="font-lora text-base leading-relaxed text-muted dark:text-muted-light max-w-lg mb-6 lg:mx-auto"
              >
                Building production-grade LLM systems, Kafka-based distributed
                backends, and end-to-end data pipelines. 10TB+ Spark ETL,
                RAG with sub-second latency, Kafka serving 10K+ concurrent users.
              </motion.p>

              {/* Tags */}
              <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-2 mb-8 lg:justify-center">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] tracking-widest uppercase px-3 py-1 rounded-full border border-gold/30 text-gold/80 dark:text-gold bg-gold/5"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3 lg:justify-center">
                <Link
                  href="/Parth_Pidadi_Resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gold text-ink font-syne font-bold text-sm tracking-wide uppercase hover:bg-gold-dim transition-colors duration-200 shadow-lg shadow-gold/20"
                >
                  Resume
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border dark:border-border font-syne font-bold text-sm tracking-wide uppercase hover:border-gold hover:text-gold dark:hover:text-gold transition-colors duration-200"
                >
                  Projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border dark:border-border font-syne font-bold text-sm tracking-wide uppercase hover:border-gold hover:text-gold dark:hover:text-gold transition-colors duration-200"
                >
                  About
                </Link>
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pidadiparth@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border dark:border-border font-syne font-bold text-sm tracking-wide uppercase hover:border-teal hover:text-teal transition-colors duration-200"
                >
                  Contact
                </a>
              </motion.div>
            </div>

            {/* ─── Photo block ─── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative flex-shrink-0 lg:w-64 md:w-52 sm:w-44"
            >
              {/* Decorative frame */}
              <div className="absolute -inset-3 rounded-3xl border border-gold/20 dark:border-gold/15" />
              <div className="absolute -inset-6 rounded-3xl border border-gold/8 dark:border-gold/8" />

              {/* Gold accent corner */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-lg" />

              <div className="relative w-72 xl:w-60 lg:w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={ProfilePic}
                  alt="Parth Pidadi"
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 200px, 288px"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-16 top-8 bg-surface dark:bg-surface border border-border rounded-xl px-4 py-2.5 shadow-xl lg:hidden"
              >
                <p className="font-syne font-extrabold text-gold text-xl leading-none">10+</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-0.5">Projects</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -right-16 bottom-12 bg-surface dark:bg-surface border border-border rounded-xl px-4 py-2.5 shadow-xl lg:hidden"
              >
                <p className="font-syne font-extrabold text-teal text-xl leading-none">3.74</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-0.5">MS GPA</p>
              </motion.div>
            </motion.div>
          </div>

          {/* ─── Bottom metrics strip ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 lg:mt-14 pt-8 border-t border-border dark:border-border grid grid-cols-4 sm:grid-cols-2 gap-8"
          >
            {[
              { value: "10TB+", label: "Spark ETL Pipeline" },
              { value: "100K+", label: "Kafka events / hour" },
              { value: "<2s", label: "RAG response time" },
              { value: "3.74", label: "MS GPA @ Stony Brook" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col lg:items-center">
                <span className="font-syne font-extrabold text-3xl sm:text-2xl text-gold leading-none">
                  {value}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted mt-2">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </Layout>
      </main>
    </>
  );
}
