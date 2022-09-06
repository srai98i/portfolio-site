import Image from "next/image";
import Link from "next/link";
import React from "react";
// import propertyImg from '../public/assets/projects/property.jpg';
// import cryptoImg from '../public/assets/projects/crypto.jpg'
// import netflixImg from '../public/assets/projects/netflix.jpg'
// import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[white] mt-9">
          Projects
        </p>

        <h2 className="py-4">What I&apos;ve Built</h2>
        <p className="py-2  text-[#EA9EB1]">
          See my projects on my Github{" "}
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
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            // backgroundImg={propertyImg}
            // projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            // backgroundImg={cryptoImg}
            // projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            // backgroundImg={netflixImg}
            // projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            // backgroundImg={twitchImg}
            // projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
