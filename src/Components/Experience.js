import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const experiences = [
  {
    company: "Stony Brook University — SUNY RF",
    position: "Research Assistant · Data Science & ML",
    time: "May 2025 – Present",
    place: "Stony Brook, NY",
    bullets: [
      "Built end-to-end R/Python pipelines for phosphoproteomics using limma-eBayes, Cyclic Loess normalization, and Hallmark ORA — cutting analysis runtime 3× and accelerating cancer biomarker discovery.",
      "Developed scalable Python pipelines processing 20,000+ genes across 1,000+ cell lines (DepMap/CCLE) with FDR-corrected hypothesis testing, ranking 10K+ therapeutic candidates and reducing variance from 40% to under 5%.",
      "Automated preprocessing for 1.5M+ high-dimensional biological samples with outlier detection and dimensionality reduction; deployed Docker workflows on GCP, improving model accuracy by 18%.",
    ],
  },
  {
    company: "Headstarter",
    position: "SWE (AIML) Fellow",
    time: "June 2024 – August 2024",
    place: "New York, USA",
    bullets: [
      "Completed an intensive AI/ML fellowship focused on shipping production-grade software using modern LLM frameworks and full-stack tooling.",
      "Built and deployed AI-integrated applications with hands-on experience in generative AI, RAG pipelines, and scalable backend development.",
    ],
  },
  {
    company: "Pratyin Infotech",
    position: "Data Engineer · Analytics & ML",
    time: "June 2023 – May 2024",
    place: "Pune, India",
    bullets: [
      "Delivered $500K+ annual revenue impact by building a hybrid recommendation engine (collaborative + content-based ML) that increased engagement 25% and retention 30%.",
      "Optimized a 10TB Spark ETL pipeline on Azure — reducing processing time from 6 hours to 45 minutes using adaptive partitioning, caching, and join optimization.",
      "Reduced API latency 20% under peak traffic by redesigning Kafka consumer architecture with Redis-based cache invalidation; containerized with Docker/Kubernetes and automated via GitHub Actions CI/CD.",
    ],
  },
  {
    company: "Pratyin Infotech",
    position: "Software Development Intern",
    time: "December 2020 – February 2021",
    place: "Pune, India",
    bullets: [
      "Engineered an employee leave management system used by 200+ employees, reducing administrative workload by 30%.",
      "Built with Node.js, NoSQL databases, Bootstrap, and Passport.js for secure authentication.",
    ],
  },
];

const Details = ({ company, position, time, place, bullets }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-10 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-start justify-between md:w-[80%] sm:w-[90%] xs:w-full"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h3 className="font-syne font-extrabold text-2xl sm:text-xl xs:text-lg dark:text-light text-ink">
          {company}
        </h3>
        <p className="font-syne font-semibold text-base text-gold mt-0.5 xs:text-sm">
          {position}
        </p>
        <span className="font-mono text-xs tracking-widest uppercase text-muted mt-1 block xs:text-[10px]">
          {time} · {place}
        </span>
        <ul className="mt-3 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="font-lora text-sm leading-relaxed text-ink/80 dark:text-light/75 flex gap-2">
              <span className="text-gold mt-1 flex-shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-24 mb-8">
      <div className="flex items-baseline gap-4 mb-8 sm:mb-6">
        <h2 className="font-syne font-black text-5xl md:text-4xl sm:text-3xl xs:text-2xl dark:text-light text-ink">
          Experience
        </h2>
        <span className="font-mono text-xs tracking-widest uppercase text-muted">4 roles</span>
      </div>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[3px] h-full bg-gold/50 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          {experiences.map((exp) => (
            <Details key={exp.time} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
