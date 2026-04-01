import Link from "next/link";
import React from "react";
import { CircularTextFullStack, CircularTextML } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 z-10 bottom-6 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="w-36 h-36 flex items-center justify-center relative md:w-24 sm:w-20">
        <CircularTextML className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          // href={"mailto:pidadiparth@gmail.com"}
          href={"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pidadiparth@gmail.com"}
          target="_blank"
          className="font-syne font-bold text-xs tracking-widest uppercase flex items-center pointer-events-auto justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-ink shadow-lg w-20 h-20 rounded-full hover:bg-gold-dim transition-colors duration-200 md:w-12 md:h-12 md:text-[9px]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
