import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ company, position, time, place, info1, info2 }) => {
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

      <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">{company}</h3>
      <h6 className="capitalize font-style: italic text-xl sm:text-2xl xs:text-lg">{position}</h6>
      <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
        {time}|{place}
      </span>
      <p className="font-medium w-full md:text-sm">{info1}</p>
      <p className="font-medium w-full md:text-sm">{info2}</p>
    </motion.div>
    </li>
  );
};

const Experience = () => {
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
        EXPERIENCE
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{scaleY:scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]" 
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
         
          <Details
            company="PwC Virtual"
            position="Virtual Intern, Forage"
            time="September 2023 - December 2023 "
            place="Pune, Maharashtra"
            info1=" ● Conducted comprehensive data analysis and visualization tasks using the Call Centre dataset, transforming raw data
            into actionable insights with Power BI."
            info2=" ● Optimizing data queries and automated reporting processes to enhance workflow efficiency."
          />
          <Details
            company="Pratyin Infotech"
            position="Software Development Intern"
            time="December 2021 - February 2022 "
            place="Pune, Maharashtra"
            info1=" ● Implemented a system for employee leave management, where the employee and the organization both can keep track
            of employees leaves."
            info2=" ● Utilized technologies such as Node.js, NoSQL, and Bootstrap for the development of the website and passport.js for
            authentication purposes."
          />  
        </ul>
      </div>
    </div>
  );
};

export default Experience;
