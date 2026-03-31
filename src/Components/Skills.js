import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "AI / ML & GenAI",
    color: "text-gold border-gold/30 bg-gold/5",
    dot: "bg-gold",
    skills: [
      "Large Language Models", "Generative AI", "RAG", "LangChain",
      "Prompt Engineering", "PyTorch", "TensorFlow", "Scikit-learn",
      "XGBoost", "Fine-tuning (LoRA/PEFT)", "NLP", "Computer Vision",
      "Deep Learning", "MLflow", "AI Agents", "FAISS", "ChromaDB",
    ],
  },
  {
    label: "Languages",
    color: "text-teal border-teal/30 bg-teal/5",
    dot: "bg-teal",
    skills: [
      "Python", "SQL", "Go (Golang)", "JavaScript", "TypeScript",
      "R", "Java", "C/C++",
    ],
  },
  {
    label: "Data Engineering",
    color: "text-[#a78bfa] border-[#a78bfa]/30 bg-[#a78bfa]/5",
    dot: "bg-[#a78bfa]",
    skills: [
      "Apache Spark", "Apache Kafka", "Apache Airflow", "PostgreSQL",
      "MongoDB", "Redis", "Snowflake", "Databricks", "ETL/ELT Pipelines",
      "Vector Databases", "Feature Engineering", "A/B Testing",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    color: "text-[#fb923c] border-[#fb923c]/30 bg-[#fb923c]/5",
    dot: "bg-[#fb923c]",
    skills: [
      "AWS (SageMaker, Lambda, S3)", "GCP (Vertex AI, BigQuery)", "Microsoft Azure",
      "Docker", "Kubernetes", "GitHub Actions", "CI/CD",
      "FastAPI", "REST APIs", "Microservices", "Jenkins",
    ],
  },
  {
    label: "Full-Stack & Backend",
    color: "text-[#34d399] border-[#34d399]/30 bg-[#34d399]/5",
    dot: "bg-[#34d399]",
    skills: [
      "React", "Next.js", "Node.js", "Go-Fiber", "Git/GitHub",
      "Streamlit", "JWT Auth",
    ],
  },
  {
    label: "Analytics & BI",
    color: "text-[#f472b6] border-[#f472b6]/30 bg-[#f472b6]/5",
    dot: "bg-[#f472b6]",
    skills: [
      "Tableau", "Power BI", "Plotly Dash", "SHAP",
      "Statistical Analysis", "A/B Testing",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Skills = () => {
  return (
    <section className="mt-24 mb-8">
      <div className="flex items-baseline gap-4 mb-8 sm:mb-6">
        <h2 className="font-syne font-black text-5xl md:text-4xl sm:text-3xl xs:text-2xl dark:text-light text-ink">
          Skills
        </h2>
        <span className="font-mono text-xs tracking-widest uppercase text-muted">50+</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-4"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.label}
            variants={categoryVariants}
            className="p-5 sm:p-4 xs:p-3 rounded-2xl border border-border dark:border-border bg-light-surface dark:bg-surface"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
              <h3 className="font-syne font-bold text-sm tracking-widest uppercase text-muted dark:text-muted-light">
                {cat.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`skill-tag font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-full border ${cat.color} cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
