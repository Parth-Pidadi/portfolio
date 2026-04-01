import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Transitions from "@/Components/Transitions";
import { motion } from "framer-motion";
import { GithubIcon } from "@/Components/Icons";

// Existing images
import uberimg from "../../public/images/projects/Uber-analytics.png";
import ytimg from "../../public/images/projects/YT-analytics.png";
import anprimg from "../../public/images/projects/ANPR.jpeg";
import olympicsimg from "../../public/images/projects/olympics.jpeg";

// New project images
import docbrainimg from "../../public/images/projects/docbrain.png";
import llmimg from "../../public/images/projects/llm.png";
import logmonitorimg from "../../public/images/projects/logmonitor.png";
import chatimg from "../../public/images/projects/chat.png";
import movieimg from "../../public/images/projects/movie.png";
import mepsimg from "../../public/images/projects/meps.png";

const CATEGORIES = {
  AI: { label: "AI / LLM", color: "text-gold border-gold/30 bg-gold/5" },
  DATA: { label: "Data Engineering", color: "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/5" },
  ML: { label: "ML & Analytics", color: "text-teal border-teal/30 bg-teal/5" },
  FULLSTACK: { label: "Full-Stack", color: "text-[#34d399] border-[#34d399]/30 bg-[#34d399]/5" },
  CV: { label: "Computer Vision", color: "text-[#fb923c] border-[#fb923c]/30 bg-[#fb923c]/5" },
};

const projects = [
  {
    title: "DocBrain — AI Document Platform",
    summary:
      "Full-stack AI platform for natural language Q&A over financial and legal documents. Uses LLM tool calling with 6 specialized tools routing between SQL analytics and ChromaDB RAG. Hybrid OCR pipeline (Donut GPU + pdfplumber + Tesseract) handles both native PDFs and scanned docs. Multi-user data isolation with JWT/Argon2 auth enforced at both PostgreSQL and ChromaDB layers.",
    stack: ["FastAPI", "React", "PostgreSQL", "ChromaDB", "Donut", "BGE", "Docker", "GitHub Actions"],
    github: "https://github.com/Parth-Pidadi/docbrain",
    link: "https://github.com/Parth-Pidadi/docbrain",
    category: "AI",
    featured: true,
    img: docbrainimg,
    metrics: ["Sub-second response", "4+ doc types", "5 file formats"],
  },
  {
    title: "Log Monitor",
    summary:
      "Real-time log ingestion and search system handling high-throughput event streams from distributed services. Kafka for event ingestion, S3 for durable timestamped storage, Redis with mutex locks for concurrent-safe caching. Serverless search layer powered by AWS Lambda and Go's concurrency primitives — scales on demand with zero always-on compute cost.",
    stack: ["Go", "Go-Fiber", "Apache Kafka", "Redis", "AWS Lambda", "S3", "FluentD", "ReactJS"],
    github: "https://github.com/Parth-Pidadi/Log-Monitor",
    link: "https://github.com/Parth-Pidadi/Log-Monitor",
    category: "DATA",
    featured: true,
    img: logmonitorimg,
    metrics: ["100K+ events/hr", "Zero always-on infra", "Serverless search"],
  },
  {
    title: "LLM-Guided Data Provenance Platform",
    summary:
      "Traces data lineage across a 9-stage CMS Medicare Spark pipeline using OpenLineage and Marquez, then wraps it in a RAG interface so engineers can ask natural language questions like 'which stage caused this anomaly?' LLM layer uses OpenAI with subgraph retrieval to ground answers in actual lineage data — 30%+ hallucination reduction vs. cold querying.",
    stack: ["PySpark", "RAG", "OpenLineage", "Marquez", "FastAPI", "Docker", "OpenAI", "GCP"],
    github: "https://github.com/csmsum/bigdata",
    link: "https://github.com/csmsum/bigdata",
    category: "AI",
    featured: true,
    img: llmimg,
    metrics: ["99.2% pipeline reliability", "30%+ less hallucination", "9-stage pipeline"],
  },
  {
    title: "MEPS Healthcare Analysis",
    summary:
      "End-to-end ML project on the Medical Expenditure Panel Survey dataset — 100K+ records. MICE/KNN imputation, ensemble models (Ridge/Lasso, Random Forest, XGBoost) with 82% classification accuracy. SHAP for interpretability, PCA/t-SNE for 3 patient clusters explaining 72% variance. Interactive Tableau + Plotly Dash dashboards with real-time SQL integration.",
    stack: ["Python", "R", "XGBoost", "Scikit-learn", "Tableau", "SQL", "SHAP", "Plotly Dash"],
    github: "https://github.com/Parth-Pidadi/MEPS-Healthcare-Analysis",
    link: "https://github.com/Parth-Pidadi/MEPS-Healthcare-Analysis",
    category: "ML",
    featured: false,
    img: mepsimg,
    metrics: ["82% accuracy", "100K+ records", "12+ demographic segments"],
  },
  {
    title: "Chat PDF RAG",
    summary:
      "Production-grade RAG pipeline for conversational PDF Q&A — 85%+ retrieval accuracy, sub-2s response time. FAISS with hybrid semantic + keyword retrieval — 10× faster search across 10K+ chunks. RabbitMQ async worker pools for 50+ concurrent users. Full Docker deployment with Streamlit frontend.",
    stack: ["Python", "PyTorch", "FAISS", "LangChain", "ChromaDB", "OpenAI", "Streamlit", "Docker"],
    github: "https://github.com/Parth-Pidadi/Chat-PDF-RAG",
    link: "https://github.com/Parth-Pidadi/Chat-PDF-RAG",
    category: "AI",
    featured: false,
    img: chatimg,
    metrics: ["85%+ retrieval accuracy", "Sub-2s response", "50+ concurrent users"],
  },
  {
    title: "Movie Explorer",
    summary:
      "Full-stack web app for searching films, viewing trailers, and managing a personal favorites list with ratings and notes. API proxy pattern keeps TMDB keys server-side. Custom useFavorites hook handles localStorage with SSR hydration edge cases. Deployed on Vercel with secure environment variable management.",
    stack: ["Next.js 14", "TypeScript", "React", "Tailwind CSS", "TMDB API", "Vercel"],
    github: "https://github.com/Parth-Pidadi/Movie_Explorer-TMDB",
    link: "https://github.com/Parth-Pidadi/Movie_Explorer-TMDB",
    category: "FULLSTACK",
    featured: false,
    img: movieimg,
    metrics: ["SSR + API proxy", "TypeScript", "Vercel deployed"],
  },
  {
    title: "Uber Data Analysis",
    summary:
      "Cloud-native ETL pipeline on GCP to process and analyze Uber trip data. Google Cloud Storage for raw ingestion, Compute Engine for orchestration, BigQuery as data warehouse for fast analytical queries. Looker Studio dashboard for business-facing visualization.",
    stack: ["Python", "GCP", "BigQuery", "Google Cloud Storage", "Looker Studio"],
    github: "https://github.com/Parth-Pidadi/UBER_datapipeline_with-analysis",
    link: "https://lookerstudio.google.com/s/lFOwfPgEm2o",
    category: "DATA",
    featured: false,
    img: uberimg,
    metrics: ["Full GCP stack", "Looker Studio viz"],
  },
  {
    title: "YouTube Data Analysis",
    summary:
      "End-to-end data pipeline on AWS for analyzing structured and semi-structured YouTube trending data. S3 → Glue → Athena with QuickSight on top. Careful schema handling in Glue for semi-structured JSON alongside tabular CSV. Serverless Lambda-based scaling.",
    stack: ["Python", "AWS S3", "AWS Glue", "AWS Lambda", "Athena", "QuickSight"],
    github: "https://github.com/Parth-Pidadi/YT-DATA-ANALYSIS",
    link: "https://github.com/Parth-Pidadi/YT-DATA-ANALYSIS",
    category: "DATA",
    featured: false,
    img: ytimg,
    metrics: ["Full AWS stack", "Serverless pipeline"],
  },
  {
    title: "ANPR System for Motorcyclists",
    summary:
      "Automatic Number Plate Recognition system detecting motorcyclists riding without helmets from live video feeds. YOLOv8 for real-time object detection, EasyOCR for number plate extraction from flagged frames, stored in a database for enforcement tracking.",
    stack: ["Python", "YOLOv8", "EasyOCR", "JavaBeans", "SQL", "OpenCV"],
    github: "https://github.com/Parth-Pidadi/ANPR-System",
    link: "https://github.com/Parth-Pidadi/ANPR-System",
    category: "CV",
    featured: false,
    img: anprimg,
    metrics: ["Real-time detection", "Dual-model pipeline"],
  },
  {
    title: "Olympics 105 Years Data Visualisation",
    summary:
      "Comprehensive analysis of 105 years of Olympic Games history — participant diversity, gender distribution, country performance, medal counts, event growth. Power BI dashboard for interactive slicing by year, country, sport, and gender.",
    stack: ["Power BI", "Python", "Jupyter Notebook"],
    github: "https://github.com/Parth-Pidadi/OlympicsDataVisualisation",
    link: "https://github.com/Parth-Pidadi/OlympicsDataVisualisation",
    category: "ML",
    featured: false,
    img: olympicsimg,
    metrics: ["105 years of data", "Power BI dashboard"],
  },
];

const FeaturedCard = ({ title, summary, stack, github, link, category, metrics, img, index }) => {
  const cat = CATEGORIES[category];
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
      className="group relative rounded-2xl border border-border dark:border-border bg-light-surface dark:bg-surface overflow-hidden hover:border-gold/40 dark:hover:border-gold/40 transition-colors duration-300"
    >
      <div className="grid grid-cols-2 lg:grid-cols-1">
        {/* Image */}
        <div className="relative overflow-hidden bg-elevated dark:bg-elevated min-h-[260px] lg:min-h-[200px] sm:min-h-[160px]">
          {img ? (
            <Image
              src={img}
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-500"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="dot-grid-dark absolute inset-0 opacity-60" />
              <span className="font-syne font-extrabold text-5xl text-gold/20 relative z-10 select-none">
                {title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/30 lg:from-transparent lg:to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 lg:p-6 sm:p-4 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-3">
            <span className={`font-mono text-xs tracking-[0.15em] uppercase px-3 py-1 rounded-full border ${cat.color} flex-shrink-0`}>
              {cat.label}
            </span>
            <div className="flex gap-2">
              {github && github !== "#" && (
                <a href={github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border dark:border-border font-syne font-bold text-xs tracking-wide text-ink dark:text-light hover:border-gold hover:text-gold dark:hover:text-gold transition-colors duration-200">
                  <span className="w-4 flex-shrink-0"><GithubIcon /></span>
                  GitHub
                </a>
              )}
              {link && link !== "#" && link !== github && (
                <a href={link} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border dark:border-border font-syne font-bold text-xs tracking-wide text-ink dark:text-light hover:border-teal hover:text-teal dark:hover:text-teal transition-colors duration-200">
                  Live ↗
                </a>
              )}
            </div>
          </div>

          <h2 className="font-syne font-extrabold text-2xl sm:text-xl dark:text-light text-ink mb-3 leading-tight">
            {title}
          </h2>
          <p className="font-lora text-base sm:text-sm leading-relaxed text-ink/75 dark:text-light/75 mb-4 flex-1 line-clamp-5 lg:line-clamp-none">
            {summary}
          </p>

          {/* Metrics */}
          {metrics && (
            <div className="flex flex-wrap gap-2 mb-4">
              {metrics.map((m) => (
                <span key={m} className="font-mono text-xs tracking-wide px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                  {m}
                </span>
              ))}
            </div>
          )}

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="font-mono text-xs tracking-wide px-2.5 py-1 rounded border border-border dark:border-border text-ink/65 dark:text-light/65">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const SmallCard = ({ title, summary, stack, github, link, category, metrics, img, index }) => {
  const cat = CATEGORIES[category];
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      viewport={{ once: true, margin: "-30px" }}
      className="group relative rounded-2xl border border-border dark:border-border bg-light-surface dark:bg-surface overflow-hidden hover:border-gold/40 dark:hover:border-gold/40 transition-colors duration-300 flex flex-col"
    >
      {/* Image strip */}
      <div className="relative h-48 overflow-hidden bg-elevated dark:bg-elevated flex-shrink-0">
        {img ? (
          <>
            <Image
              src={img}
              alt={title}
              className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500"
              fill
              sizes="(max-width: 639px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
          </>
        ) : (
          <>
            <div className="dot-grid-dark absolute inset-0 opacity-40" />
            <span className="font-syne font-extrabold text-4xl text-gold/15 absolute inset-0 flex items-center justify-center select-none">{title.charAt(0)}</span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className={`font-mono text-xs tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border ${cat.color}`}>
            {cat.label}
          </span>
          <div className="flex gap-2">
            {github && github !== "#" && (
              <a href={github} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-border dark:border-border font-syne font-bold text-base tracking-wide text-ink dark:text-light hover:border-gold hover:text-gold dark:hover:text-gold transition-colors duration-200">
                <span className="w-6 flex-shrink-0"><GithubIcon /></span>
                GitHub
              </a>
            )}
            {link && link !== "#" && link !== github && (
              <a href={link} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border dark:border-border font-syne font-bold text-xs tracking-wide text-ink dark:text-light hover:border-teal hover:text-teal dark:hover:text-teal transition-colors duration-200">
                Live ↗
              </a>
            )}
          </div>
        </div>

        <h2 className="font-syne font-extrabold text-xl dark:text-light text-ink mb-2 leading-tight">
          {title}
        </h2>
        <p className="font-lora text-sm leading-relaxed text-ink/75 dark:text-light/75 mb-4 flex-1 line-clamp-4">
          {summary}
        </p>

        {metrics && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {metrics.slice(0, 2).map((m) => (
              <span key={m} className="font-mono text-xs tracking-wide px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {stack.slice(0, 5).map((s) => (
            <span key={s} className="font-mono text-xs tracking-wide px-2.5 py-1 rounded border border-border dark:border-border text-ink/65 dark:text-light/65">
              {s}
            </span>
          ))}
          {stack.length > 5 && (
            <span className="font-mono text-xs px-2.5 py-1 rounded border border-border dark:border-border text-muted">
              +{stack.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Parth Pidadi — Projects</title>
        <meta
          name="description"
          content="Projects by Parth Pidadi — LLM systems, distributed data pipelines, ML analytics, full-stack apps."
        />
      </Head>
      <Transitions />
      <main className="w-full dark:text-light text-ink">
        <Layout className="pt-12 pb-24">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="font-mono text-sm tracking-[0.2em] uppercase text-ink/70 dark:text-light/70 font-semibold mb-3">/ selected work</p>
            <h1 className="font-syne font-black text-6xl md:text-5xl sm:text-4xl xs:text-3xl leading-tight">
              Projects
              <span className="text-gold">.</span>
            </h1>
            <p className="font-lora text-lg sm:text-base text-ink/70 dark:text-light/70 mt-4 max-w-xl">
              Production systems, research experiments, and engineering deep-dives across
              AI, data infrastructure, and full-stack development.
            </p>
          </motion.div>

          {/* Category legend */}
          <div className="flex flex-wrap gap-2 mb-12">
            {Object.values(CATEGORIES).map((c) => (
              <span key={c.label} className={`font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full border ${c.color}`}>
                {c.label}
              </span>
            ))}
          </div>

          {/* Featured projects */}
          <div className="mb-6">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-6">Featured</p>
            <div className="flex flex-col gap-6">
              {featured.map((p, i) => (
                <FeaturedCard key={p.title} {...p} index={i} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-border dark:bg-border" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted px-4">All Projects</span>
            <div className="flex-1 h-px bg-border dark:bg-border" />
          </div>

          {/* Grid of rest */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-5 sm:gap-4">
            {rest.map((p, i) => (
              <SmallCard key={p.title} {...p} index={i} />
            ))}
          </div>

        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
