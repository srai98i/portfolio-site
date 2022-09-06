import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

//#1f1f43
//  "pink-blue": "linear-gradient(to right, #DB5375 20% , #2F97C1 80%);",
export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center  bg-[black]">
      <div className="max-w-[1240px] w-full h-full mx-auto items-center p-2 flex justify-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#eae9d3]"></p>
          <h1 className="drop-shadow-xl ">Hi, I&apos;m</h1>
          <h1 className="py-3  drop-shadow-xl">Simran Rai</h1>
          <p className="py-4 text-[white] max-w-[70%] m-auto">
            Software Developer
          </p>
          <div className="flex items-center justify-between space-x-6 max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/simranrai98/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full border-[#EA9EB1] border-[.13rem] shadow-lg shadow-black-400 p-6 cursor-pointer hover:scale-110 easein duration-300 hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/srai98i"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg  border-[#EA9EB1] border-[.13rem] p-6 cursor-pointer hover:scale-110 easein duration-300 hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
                <FaGithub />
              </div>
            </a>
            <div className="rounded-full shadow-lg border-[#EA9EB1] border-[.13rem] p-6 cursor-pointer hover:scale-110 easein duration-300 hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
              <Link href="/#contact" rel="noreferrer">
                <AiOutlineMail />
              </Link>
            </div>
            <Link href="/cv-simran-rai.pdf" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <div className="rounded-full shadow-lg border-[#EA9EB1] border-[.13rem] p-6 cursor-pointer hover:scale-110 easein duration-300 hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
