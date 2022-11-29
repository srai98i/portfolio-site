import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import PositiveMind from "../../public/Projects/PositiveMind.png";
import InstaReactClone from "../../public/Projects/InstaReactClone.png";

export default function InProgress() {
  return (
    <div id="inprogress" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[white] mt-9">
          In Progess
        </p>

        <h2 className="py-4">Projects I&apos;m Currently Working On</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Positive Mind"
            backgroundImg={PositiveMind.src}
            projectUrl="https://github.com/shabana89/Positive-Mind"
            tech="React Native Project"
            alt="Positive Mind"
          />
          <ProjectItem
            title="Instagram Clone"
            backgroundImg={InstaReactClone.src}
            projectUrl="https://github.com/srai98i/insta-clone-react-native"
            tech="Frontend: React Native | Backend: Firebase"
            alt="Instagram React Clone"
          />
        </div>
        <h2 className="py-4 mt-10">Technology I&apos;m Currently Learning</h2>
        <div className="grid  text-[white] md:grid-cols-2 gap-8 mb-5 text-lg md:text-xl">
          <ul>
            <li>* TypeScript</li>
            <li>* React Native</li>
            <li>* Python</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8"></div>
        <p className="py-2  text-[#EA9EB1] text-md md:text-lg">
          Follow my progress and check out my #100DaysOfCode challenge{" "}
          <Link href="https://github.com/srai98i/100-Days-Of-Code">
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
    </div>
  );
}
