import Education from "@/Components/Education";
import Layout from "@/Components/Layout";
import Skills from "@/Components/Skills";
import Transitions from "@/Components/Transitions";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProfilePic from "../../public/images/profile/Parth_pic.jpg";
import Experience from "@/Components/Experience";

const AnimatedNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  useEffect(() => {
    spring.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0) + suffix;
      }
    });
  }, [spring, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 50, suffix: "+", label: "Technologies" },
];

const About = () => {
  return (
    <>
      <Head>
        <title>Parth Pidadi — About</title>
        <meta
          name="description"
          content="About Parth Pidadi — MS Data Science at Stony Brook University. Data Scientist and ML Engineer building production AI systems and distributed infrastructure."
        />
      </Head>
      <Transitions />
      <main className="flex w-full flex-col items-center justify-center dark:text-light text-ink">
        <Layout className="pt-12 pb-24">

          {/* ─── Hero heading ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-3">/ about me</p>
            <h1 className="font-syne font-extrabold text-6xl md:text-5xl sm:text-4xl leading-tight dark:text-light text-ink">
              Build. Ship.<br />
              <span className="text-gold">Iterate.</span>
            </h1>
          </motion.div>

          {/* ─── Bio + Photo ─── */}
          <div className="grid w-full grid-cols-8 gap-12 sm:gap-8 mb-20">

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-5 md:order-2 md:col-span-8"
            >
              <span className="font-mono text-xs tracking-widest uppercase text-gold mb-4 border border-gold/30 px-3 py-1 rounded-full bg-gold/5">
                Biography
              </span>
              <p className="font-lora text-base leading-relaxed dark:text-light/80 text-ink/85 mb-4">
                I&apos;m a Data Scientist and ML Engineer currently pursuing my MS in Data Science
                at Stony Brook University (GPA: 3.74), with a background in Computer Engineering
                from Savitribai Phule Pune University. My work sits at the intersection of
                AI systems, data infrastructure, and full-stack engineering.
              </p>
              <p className="font-lora text-base leading-relaxed dark:text-light/80 text-ink/85 mb-4">
                I specialize in production-grade LLM systems and agentic RAG pipelines, building
                things like DocBrain — a full-stack AI document Q&amp;A platform with LLM tool
                calling, ChromaDB, and JWT-secured multi-user isolation — and a real-time Log
                Monitor in Go and Kafka handling 100K+ events per hour.
              </p>
              <p className="font-lora text-base leading-relaxed dark:text-light/80 text-ink/85">
                On the data engineering side, I&apos;ve built 10TB+ Spark ETL pipelines on Azure,
                designed Kafka architectures serving 10K+ concurrent users, and deployed
                LLM-guided lineage tracing systems for healthcare data workflows. I&apos;m actively
                seeking full-time roles in Software Engineering, Data Science, or Generative AI
                starting July 2026.
              </p>

              {/* Social links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/Parth-Pidadi"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold dark:hover:text-gold transition-colors gold-link"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/parthpidadi/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold dark:hover:text-gold transition-colors gold-link"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="/Parth_Pidadi_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold dark:hover:text-gold transition-colors gold-link"
                >
                  Resume ↗
                </a>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-3 relative h-max md:order-1 md:col-span-8 xl:col-span-3"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border dark:border-border shadow-2xl">
                <Image
                  src={ProfilePic}
                  alt="Parth Pidadi"
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-teal rounded-br-lg" />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-1 flex flex-col justify-between xl:col-span-8 xl:flex-row xl:items-start md:order-3 gap-6"
            >
              {stats.map(({ value, suffix, label }) => (
                <div key={label} className="flex flex-col xl:items-center">
                  <span className="font-syne font-extrabold text-5xl md:text-4xl sm:text-3xl text-gold leading-none">
                    <AnimatedNumber value={value} suffix={suffix} />
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted mt-2 max-w-[120px] xl:text-center">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── Skills ─── */}
          <Skills />

          {/* ─── Experience ─── */}
          <Experience />

          {/* ─── Education ─── */}
          <Education />

        </Layout>
      </main>
    </>
  );
};

export default About;
