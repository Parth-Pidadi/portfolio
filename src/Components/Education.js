import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const educationItems = [
  {
    degree: "Master of Science in Data Science",
    institution: "Stony Brook University",
    time: "August 2024 – May 2026",
    place: "Stony Brook, NY",
    grade: "GPA: 3.74 / 4.00",
    coursework: "Big Data Analytics, Computer Vision, NLP, Machine Learning, Statistical Analysis",
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    time: "August 2019 – May 2023",
    place: "Pune, India",
    grade: "GPA: 9.34 / 10 · Honours in AIML",
    coursework: "Python, Business Analytics, AI/ML, Deep Learning, Database Management, High-Performance Computing, Data Science & Big Data Analytics",
  },
];

const Details = ({ degree, institution, time, place, grade, coursework }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-10 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-start justify-between md:w-[80%] xs:w-full"
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
          {institution}
        </h3>
        <p className="font-lora italic text-base text-gold mt-0.5 xs:text-sm">
          {degree}
        </p>
        <span className="font-mono text-xs tracking-widest uppercase text-muted mt-1 block xs:text-[10px]">
          {time} · {place}
        </span>
        <p className="font-syne font-semibold text-sm dark:text-teal text-teal-light mt-2">
          {grade}
        </p>
        {coursework && (
          <p className="font-lora text-sm text-muted dark:text-muted-light mt-1 italic">
            {coursework}
          </p>
        )}
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-24 mb-8">
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className="font-syne font-extrabold text-5xl md:text-4xl sm:text-3xl dark:text-light text-ink">
          Education
        </h2>
      </div>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[3px] h-full bg-teal/50 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          {educationItems.map((item) => (
            <Details key={item.institution} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
