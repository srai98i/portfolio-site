import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiFillHome,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-md shadow-[#EA9EB1] border-[#EA9EB1] border-b-[0.05rem] z-[100]  bg-[black] text-[#EA9EB1]">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        💻
        <div>
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 font-semibold text-sm uppercase hover:border-b hover:border-b-[#EA9EB1]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 font-semibold text-sm uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 font-semibold text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 font-semibold text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden text-[#EA9EB1]">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[black] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[447092] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div className="flex w-full items-center justify-between">
              <div className="rounded-full border-[#EA9EB1] border-[.2rem] p-3 mb-8 cursor-pointer hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black] ">
                <AiOutlineClose onClick={handleNav} />
              </div>
            </div>
            <div className=" border-[#EA9EB1] border-b-[0.2rem] my-4 ">
              {/* <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together
              </p> */}
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/#home">
                  <li
                    className="py-4 text-sm hover:text-[#EA9EB1]"
                    onClick={handleNav}
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    className="py-4 text-sm hover:text-[#EA9EB1]"
                    onClick={handleNav}
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    className="py-4 text-sm hover:text-[#EA9EB1]"
                    onClick={handleNav}
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    className="py-4 text-sm hover:text-[#EA9EB1]"
                    onClick={handleNav}
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    className="py-4 text-sm hover:text-[#EA9EB1]"
                    onClick={handleNav}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest mb-2">
                  Let&apos;s Connect
                </p>
              </div>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/simranrai98/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full border-[#EA9EB1] border-[.1rem] p-3 cursor-pointer hover:scale-105 easein duration hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/srai98i"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full border-[#EA9EB1] border-[.1rem] p-3 cursor-pointer hover:scale-105 easein duration hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
                    <FaGithub />
                  </div>
                </a>
                <div className="rounded-full border-[#EA9EB1] border-[.1rem] p-3 cursor-pointer hover:scale-105 easein duration hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
                  <Link href="/#contact" rel="noreferrer">
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded-full border-[#EA9EB1] border-[.1rem] p-3 cursor-pointer hover:scale-105 easein duration hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
                  <Link href="/cv-simran-rai.pdf" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <BsFillPersonLinesFill />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <Image src="/../public/assets" alt="/" width="125/87" height="50/35"/> */
}
