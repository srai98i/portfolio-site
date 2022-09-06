import React from "react";
import Link from "next/link";
import Image from "next/image";
import sim from "../../public/sim.svg";

export default function About() {
  return (
    <div
      className="w-full md:h-screen p-2 flex items-center  py-2
      "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[white]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 flex justify-items-center text-[white]">
            I am a Biomedical Sciences graduate who has finished studying at the
            School of Code 💻{" "}
          </p>{" "}
          <p className="py-2 flex justify-items-center text-[white]">
            I have always found tech exciting but I never saw myself having the
            talent to build the seemingly magical software I enjoyed using.
            After playing around with basic HTML and CSS one day, I was amazed
            with how I was able to make my computer say "Hello World!". I had to
            research more into the tech world and found that in this
            ever-evolving industry, the learning opportunities and challenges
            are endless. A career as a software developer seemed incredibly
            exciting, so I gathered the confidence to join the School of Code.
            16 weeks later, I'm now a Junior Software Developer!
          </p>
          <p className="py-2 flex justify-items-center text-[white]">
            {" "}
            I use my analytical, problem solving and teamworking skills to build
            software with other equally passionate developers. I am interested
            in both front-end and back-end development and am always looking to
            push myself to work with more technologies and languages!
          </p>
          <p className="py-2  text-[#EA9EB1]">
            Check out my Projects{" "}
            <Link href="/#projects">
              <a className="py-2 text-[white] underline cursor-pointer">
                {" "}
                here
              </a>
            </Link>{" "}
          </p>
          <p className="py-2  text-[#EA9EB1]">
            Visit my Github{" "}
            <Link href="https://github.com/srai98i">
              <a
                target="_blank"
                className="py-2 text-[white] underline cursor-pointer"
              >
                {" "}
                here
              </a>
            </Link>{" "}
          </p>
        </div>
        <div className="w-full h-auto m-auto border-[0.2rem] border-[#EA9EB1] rounded-xl flex items-center justify-center p-4 hover:scale-105 easein duration-300 mt-10">
          <div className="m-auto">
            <Image src={sim} width="320px" height="320px" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}

//img "rounded-xl"
