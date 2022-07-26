import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

//#1f1f43
//  "pink-blue": "linear-gradient(to right, #DB5375 20% , #2F97C1 80%);",
export default function Main() {
  return (
    <div className="w-full h-screen text-center bg-[black]">
      <div className="max-w-[1240px] w-full h-full mx-auto items-center p-2 flex justify-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[white]">
            LETS BUILD SOMETHING
          </p>
          <h1 className="drop-shadow-xl ">Hi, I'm</h1>
          <h1 className="py-3 text-[#DB5375] drop-shadow-xl">Simran Rai</h1>
          <p className="py-4 text-[white] max-w-[70%] m-auto">
            Software Developer
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full  shadow-lg shadow-black-400 p-6 cursor-pointer hover:scale-110 easein duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg  border-[#DB5375] border-[.1rem] p-6 cursor-pointer hover:scale-110 easein duration-300 hover:bg-gradient-to-r from-purple-500 to-pink-500">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easein duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easein duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
