import Head from "next/head";
import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simran Rai | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black scroll-pb-6">
        <Navbar />
        <Main />
        <div id="about" className=" py-10" />
        <About />
        <div id="skills" className="py-10  mt-10" />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
