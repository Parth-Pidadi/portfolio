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
          content="About Parth Pidadi — MS Data Science at Stony Brook University. Data Scientist and ML Engineer."
        />
      </Head>
      <Transitions />
      <main className="flex w-full flex-col items-center justify-center dark:text-light text-ink">
        <Layout className="pt-12 pb-20">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-8"
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-3">/ about me</p>
            <h1 className="font-syne font-black text-6xl md:text-5xl sm:text-4xl xs:text-3xl leading-tight dark:text-light text-ink">
              Build. Ship.<br />
              <span className="text-gold">Iterate.</span>
            </h1>
          </motion.div>

          {/* Bio + Photo — stacks cleanly on mobile */}
          <div className="flex flex-col gap-8 mb-12 lg:mb-10">

            {/* Photo + Stats row */}
            <div className="flex gap-8 md:flex-col md:gap-6 sm:gap-5">

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative flex-shrink-0 w-72 xl:w-64 lg:w-56 md:w-full md:max-w-xs md:mx-auto sm:max-w-[240px]"
              >
                <div className="relative rounded-2xl overflow-hidden border border-border dark:border-border shadow-2xl">
                  <Image
                    src={ProfilePic}
                    alt="Parth Pidadi"
                    className="w-full h-auto object-cover"
                    priority
                    width={288}
                    height={360}
                    sizes="(max-width: 768px) 240px, 288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-gold rounded-tl-md" />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-teal rounded-br-md" />
              </motion.div>

              {/* Stats — vertical column next to photo on desktop, horizontal row below on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-col justify-around gap-6 md:flex-row md:justify-start md:gap-8 sm:gap-6 xs:gap-4"
              >
                {stats.map(({ value, suffix, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="font-syne font-black text-5xl xl:text-4xl md:text-4xl sm:text-3xl xs:text-2xl text-gold leading-none">
                      <AnimatedNumber value={value} suffix={suffix} />
                    </span>
                    <p className="font-mono text-[10px] xs:text-[9px] uppercase tracking-widest text-muted mt-2">
                      {label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-start"
            >
              <span className="font-mono text-xs tracking-widest uppercase text-gold mb-4 border border-gold/30 px-3 py-1 rounded-full bg-gold/5">
                Biography
              </span>
              <p className="font-lora text-base sm:text-sm leading-relaxed dark:text-light/80 text-ink/85 mb-4">
                I&apos;m a Data Scientist and ML Engineer currently pursuing my MS in Data Science
                at Stony Brook University, with a background in Computer Engineering. My work
                sits at the intersection of AI systems, data infrastructure, and full-stack engineering.
              </p>
              <p className="font-lora text-base sm:text-sm leading-relaxed dark:text-light/80 text-ink/85 mb-4">
                I specialize in production-grade LLM systems and agentic RAG pipelines — DocBrain,
                a full-stack AI document Q&amp;A platform with LLM tool calling and JWT-secured
                multi-user isolation, and a real-time Log Monitor in Go and Kafka handling
                100K+ events per hour.
              </p>
              <p className="font-lora text-base sm:text-sm leading-relaxed dark:text-light/80 text-ink/85">
                On the data engineering side, I&apos;ve built 10TB+ Spark ETL pipelines on Azure,
                designed Kafka architectures serving 10K+ concurrent users, and deployed
                LLM-guided lineage tracing systems for healthcare data workflows.
                Seeking full-time roles in SWE, Data Science, or Generative AI starting July 2026.
              </p>

              <div className="flex gap-4 mt-5 flex-wrap">
                {[
                  { label: "GitHub ↗", href: "https://github.com/Parth-Pidadi" },
                  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/parthpidadi/" },
                  { label: "Resume ↗", href: "/Parth_Pidadi_Resume.pdf" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold dark:hover:text-gold transition-colors gold-link">
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <Skills />

          {/* Experience */}
          <Experience />

          {/* Education */}
          <Education />

        </Layout>
      </main>
    </>
  );
};

export default About;
