/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  alt,
  deployUrl,
}) => {
  console.log(backgroundImg);
  return (
    <div className=" relative flex items-center justify-center h-full w-full rounded-xl group hover:bg-gradient-to-r  to-[#EA9EB1] from-pink-400">
      <img
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
      <div className="hidden  group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <a href={projectUrl} target="_blank" rel="noreferrer">
          <p className="text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-md cursor-pointer">
            More Info
          </p>
        </a>{" "}
        <br />
        <a href={deployUrl} target="_blank" rel="noreferrer">
          <p className="text-center py-1 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer">
            See Deployed Version
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
