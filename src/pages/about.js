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

const focusAreas = [
  "Generative AI · LLMs · RAG · LoRA/PEFT",
  "Kafka · Spark · Redis · Docker · Kubernetes",
  "Python · Go · React · FastAPI · Next.js",
  "AWS · GCP · Azure · CI/CD · MLOps",
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

          {/* Top section: text left, photo right */}
          <div className="flex gap-14 xl:gap-10 lg:flex-col mb-16 lg:mb-12">

            {/* Left: all text content */}
            <div className="flex-1 min-w-0">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 sm:mb-6"
              >
                <p className="font-mono text-sm tracking-[0.2em] uppercase text-ink/70 dark:text-light/70 mb-3 font-semibold">
                  / About Me
                </p>
                <h1 className="font-syne font-black text-6xl md:text-5xl sm:text-4xl xs:text-3xl leading-tight dark:text-light text-ink">
                  Build. Ship.<br />
                  <span className="text-gold">Iterate.</span>
                </h1>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex gap-10 sm:gap-6 mb-8 sm:mb-6"
              >
                {stats.map(({ value, suffix, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="font-syne font-black text-4xl sm:text-3xl xs:text-2xl text-gold leading-none">
                      <AnimatedNumber value={value} suffix={suffix} />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2">
                      {label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-start"
              >
                <span className="font-mono text-xs tracking-widest uppercase text-gold mb-5 border border-gold/30 px-3 py-1 rounded-full bg-gold/5">
                  Biography
                </span>

                <p className="font-lora text-base sm:text-sm leading-relaxed dark:text-light/80 text-ink/85 mb-4">
                  Full-Stack Software Engineer and Data Scientist with a foundation in Computer
                  Engineering and a specialization in AI/ML. Currently pursuing my MS in Data
                  Science at Stony Brook University, with hands-on experience building
                  production-grade LLM systems, distributed backend services, and scalable data
                  infrastructure.
                </p>

                <p className="font-lora text-base sm:text-sm leading-relaxed dark:text-light/80 text-ink/85 mb-4">
                  My work spans the full stack — from designing event-driven microservices and
                  distributed data pipelines to deploying end-to-end AI platforms. I&apos;ve
                  engineered systems handling 10TB+ Spark ETL pipelines, Kafka-based architectures
                  serving 10K+ concurrent users, and RAG pipelines with sub-second response times.
                  Projects include <span className="text-gold font-semibold">DocBrain</span>, a
                  full-stack AI document Q&amp;A platform using LLM tool calling, ChromaDB, and
                  JWT-secured multi-user isolation, and a real-time{" "}
                  <span className="text-gold font-semibold">Log Monitoring</span> system built in
                  Go, Kafka, Redis, and AWS Lambda handling 100K+ events per hour.
                </p>

                <p className="font-lora text-base sm:text-sm leading-relaxed dark:text-light/80 text-ink/85 mb-6">
                  On the data side, I&apos;ve deployed ensemble ML models (XGBoost, Random Forest),
                  built interactive analytics dashboards in Tableau and Plotly Dash, and developed
                  LLM-guided data provenance systems for pipeline reliability across healthcare data
                  workflows.
                </p>

                {/* Focus areas */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {focusAreas.map((area) => (
                    <span key={area}
                      className="font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-border dark:border-border text-ink/65 dark:text-light/65 bg-light-surface dark:bg-surface">
                      {area}
                    </span>
                  ))}
                </div>

                <p className="font-lora text-sm italic text-teal dark:text-teal mb-5">
                  Actively seeking full-time roles in Software Engineering, Data Science, or
                  Generative AI starting July 2026.
                </p>

                <div className="flex gap-4 flex-wrap">
                  {[
                    { label: "GitHub ↗", href: "https://github.com/Parth-Pidadi" },
                    { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/parthpidadi/" },
                    { label: "Resume ↗", href: "/Parth_Pidadi_Resume.pdf" },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer"
                      className="font-mono text-xs tracking-widest uppercase text-muted hover:text-gold dark:hover:text-gold transition-colors">
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-shrink-0 w-80 xl:w-72 lg:w-full lg:max-w-sm lg:mx-auto sm:max-w-[280px]"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border dark:border-border shadow-2xl">
                <Image
                  src={ProfilePic}
                  alt="Parth Pidadi"
                  className="w-full h-auto object-cover"
                  priority
                  width={320}
                  height={400}
                  sizes="(max-width: 768px) 280px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-gold rounded-tl-md" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-teal rounded-br-md" />
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
