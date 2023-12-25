import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ytimg from "../../public/images/projects/YT-analytics.png";
import uberimg from "../../public/images/projects/Uber-analytics.png";
import Transitions from "@/Components/Transitions";
import Portfolioimg from "../../public/images/projects/Portfolio.png";
import anprimg from "../../public/images/projects/ANPR.jpeg";
import bscimg from "../../public/images/projects/Black Scholes Calculator.jpeg";
import olympicsimg from "../../public/images/projects/olympics.jpeg";

const FeatureProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="dark:bg-dark dark:border-light w-full flex relative items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-primary xs:-right-3 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:hover:un"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, github, link }) => {
  return (
    <>
      <article className=" dark:bg-dark dark:border-light w-full flex relative shadow-2xl items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

        <Link
          href={link}
          target="_blank"
          className=" w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full dark:text-light text-left text-3xl font-bold lg:text-xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="w-full justify-between mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10 md:w-6">
              {" "}
              <GithubIcon className={"dark:fill-light"} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold md:text-base"
            >
              {" "}
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Parth | Project Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="It is not about ideas, it is about making ideas happen"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5 ">
          <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"F A B A L L E Y"}
                link="https://fab-alley-clone-10.vercel.app/"
                github={"https://github.com/soumyasootar/FabAlley"}
                img={uberimg}
                summary="FABALLEY is an Indian e-commerce website that offers a vast collection of trendy and affordable fashion styles. With authenticated login/signup, voice search, and sorting/filtering options, customers can enjoy a seamless shopping experience. The website features a well-designed landing page, login/signup with Email JS, cart, address, payment, and profile pages that are responsive across all devices. FABALLEY also provides multiple user login options, and its backend is built using Express and MongoDB Mongoose."
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT (CLIENT WORK)"}
                title={"P L A C E P R E P"}
                link="https://place-prep-com-sigma.vercel.app/HomePage/index.html"
                github={"https://github.com/soumyasootar/PlacePrep.com"}
                img={anprimg}
                summary="Placeprep.com is a Educational website where anybody can learn about coding related topics and languages. Placeprep allows you to give MCQ test, apart from that it has two logins one for user login and another for admin with Email validation and Chatbot,Quiz,Proctoring,etc .This website was developed using HTML,SCSS,CSS,Javascript,Bootstrap & JSON Server."
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"Z O S T E L"}
                link="https://zostel-ten.vercel.app/"
                github={"https://github.com/soumyasootar/zostel"}
                img={ytimg}
                summary="Zostel is a hostel booking website with over 60+ destinations across India and Nepal. The website features authenticated login with email verification, the ability to book multiple rooms, voice search, and dark mode. The tech stack used includes React, React-Redux, JS, Chakra UI, Framer Motion, and Email JS. The project responsibilities included implementing Email JS on the login page, coding the destination page, debugging the payment page, ensuring responsiveness, debugging the room booking page, and maintaining the GitHub codebase."
              />
            </div>
           
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"C O N V E R S O"}
                link="https://github.com/soumyasootar/Converso"
                github={"https://github.com/soumyasootar/Converso"}
                img={olympicsimg}
                summary="Converso is a real-time chat application built using React, Socket.IO, MongoDB, Express, Node.js,Mongoose and Chakra UI. The app enables users to chat with each other instantly, while offering an intuitive and modern UI. Converso is built to be scalable and reliable, and can be easily deployed to any environment. "
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"C O N V E R S O"}
                link="https://github.com/soumyasootar/Converso"
                github={"https://github.com/soumyasootar/Converso"}
                img={Portfolioimg}
                summary="Converso is a real-time chat application built using React, Socket.IO, MongoDB, Express, Node.js,Mongoose and Chakra UI. The app enables users to chat with each other instantly, while offering an intuitive and modern UI. Converso is built to be scalable and reliable, and can be easily deployed to any environment. "
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"C O N V E R S O"}
                link="https://github.com/soumyasootar/Converso"
                github={"https://github.com/soumyasootar/Converso"}
                img={bscimg}
                summary="Converso is a real-time chat application built using React, Socket.IO, MongoDB, Express, Node.js,Mongoose and Chakra UI. The app enables users to chat with each other instantly, while offering an intuitive and modern UI. Converso is built to be scalable and reliable, and can be easily deployed to any environment. "
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"F A B A L L E Y"}
                link="https://fab-alley-clone-10.vercel.app/"
                github={"https://github.com/soumyasootar/FabAlley"}
                img={uberimg}
                summary=" portal is an Indian e-commerce website that offers a vast collection of trendy and affordable fashion styles. With authenticated login/signup, voice search, and sorting/filtering options, customers can enjoy a seamless shopping experience. The website features a well-designed landing page, login/signup with Email JS, cart, address, payment, and profile pages that are responsive across all devices. FABALLEY also provides multiple user login options, and its backend is built using Express and MongoDB Mongoose."
              />
            </div>
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
