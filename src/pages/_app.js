import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
import { Big_Shoulders_Display, Fraunces, Fira_Code } from "next/font/google";
import Head from "next/head";

// Ultra-condensed display — tall, dramatic, technical
const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
});

// Wonky optical serif — elegant, unexpected for tech, reads beautifully
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Clean monospace for code/tags
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#07070e" />
      </Head>
      <main
        className={`${bigShoulders.variable} ${fraunces.variable} ${firaCode.variable} font-lora bg-light dark:bg-dark flex flex-col min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
