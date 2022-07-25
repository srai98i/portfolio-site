import React from "react";

export default function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center bg-pink-blue py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">Bio</p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my latest projects here{" "}
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 easein duration-300">
          put img here
        </div>
      </div>
    </div>
  );
}

//img "rounded-xl"
