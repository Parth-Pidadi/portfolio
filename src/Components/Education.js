import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, grade,coursework }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
    <LiIcon reference={ref}/>
    <motion.div
     initial={{y:50}}
     whileInView={{y:0}}
     transition={{duration:0.5,type:"spring"}}>

      <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">{type}</h3>
      <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
        {time}|{place}
      </span>
      <p className="font-medium w-full md:text-sm">{grade}</p>
      <p className="font-medium w-full md:text-sm">{info}</p>
      <p className="font-style: italic w-full md:text-sm">{coursework}</p>

    </motion.div>
    </li>
  );
};

const Education = () => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "center start"],
  });
  useEffect(() => {
    console.log("scrollYprogress: ", scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        EDUCATION
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{scaleY:scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]" 
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          
          <Details
            type="Bachelor Of Engineering in Computer Engineering"
            time="August 2019- May 2023 "
            place=" Savitribai Phule Pune University , Pune"
            info="Pune, Maharashtra, India"
            grade="Grade: 9.34 CGPA with Honors in AIML" 
            coursework="Related Coursework: Python Programming, Business Analytic, AIML, Deep Learning, Database Management, High-
            Performance Computing, Object Oriented Programming, Data Science and Big Data Analytics"
          />
          <Details
            type="12th board (Telangana State Board)"
            time="August 2017 - April 2019 "
            place=" Narayana Junior College"
            info="Hyderabad, Telangana, India"
            grade= " Marks: 97% "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
