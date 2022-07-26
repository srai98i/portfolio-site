import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-sm shadow-[#DB5375] z-[100] bg-[black]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        Hello
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
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
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[447092] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div className="flex w-full items-center justify-between">
              <div className="rounded-full border-[#DB5375] border-[.1rem] p-3 cursor-pointer ">
                <AiOutlineClose onClick={handleNav} />
              </div>
            </div>
            <div className="border-b border-[#DB5375] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest test-[#5651e5]">
                  Let's Connect
                </p>
              </div>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full border-[#DB5375] border-[.1rem] p-3 cursor-pointer hover:scale-105 easein duration">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full border-[#DB5375] border-[.1rem] p-3 cursor-pointer hover:scale-105 easein duration">
                  <FaGithub />
                </div>
                <div className="rounded-full border-[#DB5375] border-[.1rem] p-3 cursor-pointer hover:scale-105 easein duration">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full border-[#DB5375] border-[.1rem] p-3 cursor-pointer hover:scale-105 easein duration">
                  <BsFillPersonLinesFill />
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