import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
// import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  //   const [name, setName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const [message, setMessage] = useState("");

  //   const handleSubmit = () => {
  //     setName("");
  //     setPhone("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   };

  return (
    <div id="contact" className="w-full bg-black  lg:h-screen">
      <div className="max-w-[1240px] bg-black m-auto px-2 py-16 w-full ">
        <p className="text-xl  tracking-widest uppercase text-[white] mt-9">
          Contact
        </p>
        <h2 className="py-4 ">Get In Touch</h2>
      </div>
    </div>
  );
};

export default Contact;

//   <div id="contact" className="w-full bg-black  lg:h-screen">
//     <div className="max-w-[1240px] bg-black m-auto px-2 py-16 w-full ">
//       <p className="text-xl  tracking-widest uppercase text-[white] mt-9">
//         Contact
//       </p>
//       <h2 className="py-4 ">Get In Touch</h2>
//       <div className="grid lg:grid-cols-5 gap-8">
//         {/* left */}
//         <div className="col-span-3 lg:col-span-2 w-full h-full  border-[#EA9EB1] border-[.13rem] rounded-xl p-4">
//           <div className="lg:p-4 h-full ">
//             {/* <div>
//               <Image
//                 className="rounded-xl hover:scale-105 ease-in duration-300"
//                 src={ContactImg}
//                 alt="/"
//               />
//             </div> */}
//             <div>
//               <h2 className="py-2 ">Simran Rai</h2>
//               <p className="text-[white]">Software Developer</p>
//               <p className="py-4 text-[white]">
//                 I am available for freelance or full-time positions. Contact
//                 me and let&apos;s talk.
//               </p>
//             </div>
//             <div>
//               <p className="uppercase pt-8">Connect With Me</p>
//               <div className="flex items-center justify-between py-4">
//                 <a
//                   href="https://www.linkedin.com/in/simranrai98/"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <div className="rounded-full  border-[#EA9EB1] border-[.13rem] p-6 cursor-pointer hover:scale-110 ease-in duration-300  hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
//                     <FaLinkedinIn />
//                   </div>
//                 </a>
//                 <a
//                   href="https://github.com/srai98i"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <div className="rounded-full border-[#EA9EB1] border-[.13rem] p-6 cursor-pointer hover:scale-110 ease-in duration-300  hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
//                     <FaGithub />
//                   </div>
//                 </a>

//                 <div className="rounded-full border-[#EA9EB1] border-[.13rem] p-6 cursor-pointer hover:scale-110 ease-in duration-300  hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
//                   <AiOutlineMail />
//                 </div>
//                 <Link href="/resume">
//                   <a>
//                     <div className="rounded-full border-[#EA9EB1] border-[.13rem] p-6 cursor-pointer hover:scale-110 ease-in duration-300  hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
//                       <BsFillPersonLinesFill />
//                     </div>
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* right */}
//         <div className="col-span-3 w-full h-auto   border-[#EA9EB1] border-[.13rem] shadow-[#EA9EB1] rounded-xl lg:p-4">
//           <div className="p-4">
//             <form
//               onSubmit={handleSubmit}
//               action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
//               method="POST"
//             >
//               <div className="grid md:grid-cols-2 gap-4 w-full py-2">
//                 <div className="flex flex-col">
//                   <label className="uppercase text-sm py-2">Name</label>
//                   <input
//                     className="border-2 rounded-lg p-3 flex border-[#EA9EB1] bg-black"
//                     type="text"
//                     name="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label className="uppercase text-sm py-2 ">
//                     Phone Number
//                   </label>
//                   <input
//                     className="border-2 rounded-lg p-3 flex bg-black border-[#EA9EB1]"
//                     type="text"
//                     name="phone"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col py-2">
//                 <label className="uppercase text-sm py-2">Email</label>
//                 <input
//                   className="border-2 rounded-lg p-3 flex bg-black border-[#EA9EB1]"
//                   type="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col py-2">
//                 <label className="uppercase text-sm py-2">Subject</label>
//                 <input
//                   className="border-2 rounded-lg p-3 flex bg-black border-[#EA9EB1]"
//                   type="text"
//                   name="subject"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col py-2">
//                 <label className="uppercase text-sm py-2">Message</label>
//                 <textarea
//                   className="border-2 rounded-lg p-3 bg-black border-[#EA9EB1]"
//                   rows="10"
//                   name="message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//               </div>
//               <button className="w-full p-4 mt-4 border-[#EA9EB1] border-[.13rem]">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center py-12">
//         <Link href="/">
//           <a>
//             <div className="rounded-full  border-[#EA9EB1] border-[.13rem] p-4 cursor-pointer hover:scale-110 ease-in duration-300  hover:border-[pink] hover:bg-gradient-to-r from-[#DB5375] to-pink-500 hover:text-[black]">
//               <HiOutlineChevronDoubleUp className="text-[#EA9EB1" size={30} />
//             </div>
//           </a>
//         </Link>
//       </div>
//     </div>
//   </div>
// );
