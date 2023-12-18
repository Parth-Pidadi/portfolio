
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, link = "#" }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-blue-500 dark:bg-purple-700 dark:text-white text-white px-4 py-2 shadow-md cursor-pointer absolute"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: 1 }}
      transition={{ duration: 1 }}
    >
      <a href={link}>{name}</a>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-16 mb-5 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-grey text-white">
        <motion.div
          style={{ rotate: [0, 360] }}
          className="flex items-center justify-center rounded-full font-semibold bg-yellow-500 h-12 w-12 text-dark p-8 shadow-md cursor-pointer absolute"
          whileHover={{ scale: 1.1 }}
          initial={{ x: 0, y: 0 }}
        >
          AI/ML
        </motion.div>
        <Skill name="SQL" x="30vw" y="0vw"/>
        <Skill name="Python" x="0vw" y="10vw"/>
        <Skill name="PowerBI" x="0vw" y="20vw"/>
        <Skill name="Scikit-Learn" x="-30vw" y="0vw"/>
        <Skill name="Pandas" x="0vw" y="-10vw"/>
        <Skill name="Java" x="25vw" y="20vw"/>
        <Skill name="AWS " x="-25vw" y="20vw"/>
        <Skill name="Tensorflow" x="0vw" y="-20vw"/>
        <Skill name="Azure" x="25vw" y="-10vw"/>
        <Skill name="PyTorch" x="-22vw" y="-10vw"/>
        <Skill name="Keras" x="-25vw" y="10vw"/>
        <Skill name="GCP" x="29vw" y="10vw"/>
        <Skill name="OPENCV" x="-25vw" y="-20vw"/>
        <Skill name="Scipy" x="25vw" y="-20vw"/>
        {/* Add more skills with different names and positions */}
      </div>
    </>
  );
};

export default Skills;

