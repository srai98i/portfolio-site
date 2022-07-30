import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center bg-pink-blue py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mt-9">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[white]">
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>
          <p className="py-2 flex justify-items-center text-[white]">
            I am a Biomedical Sciences graduate currently studying at the School
            of Code 💻{" "}
          </p>{" "}
          <p className="py-2 flex justify-items-center text-[white]">
            I use my analytical, problem solving and teamworking skills to build
            software with other equally passionate developers. I am interested
            in both front-end and back-end development and am always looking to
            push myself to work with more technologies and languages!
          </p>
          <p className="py-2  text-[white]">
            Check out my Projects{" "}
            <Link href="/#projects">
              <a className="py-2 text-[white] underline cursor-pointer">
                {" "}
                here
              </a>
            </Link>{" "}
          </p>
          <p className="py-2  text-[white]">
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
        <div className="w-full h-auto m-auto shadow-xl shadow-[#EA9EB1] rounded-xl flex items-center justify-center p-4 hover:scale-105 easein duration-300 mt-10">
          put img here
        </div>
      </div>
    </div>
  );
}

//img "rounded-xl"
