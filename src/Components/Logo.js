import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import logo from "../../public/SSS-LOGO.png"
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href={"/"}
        className="w-16 h-16 bg-dark text-light flex items-center justify-center border border-solid border-transparent rounded-full text-2xl font-bold dark:border-dark dark:bg-light dark:text-dark md:w-14 md:h-14"
        // initial={}
        whileHover={{
          scale: 1.05,
          backgroundColor: [
            
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition:{duration:1,repeat:Infinity}
        }}
      >
        GS  
      </MotionLink>
    </div>
  );
};

export default Logo;
