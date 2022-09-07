import Link from "next/link";
import React from "react";

import ProjectItem from "./ProjectItem";
import Athena from "../../public/Projects/Athena.jpg";
import Hero from "../../public/Projects/Hero_quiz.jpg";
import CleanUp from "../../public/Projects/Project_Clean-Up.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[white] mt-9">
          Projects
        </p>

        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Project Clean-Up"
            backgroundImg={CleanUp.src}
            projectUrl="https://github.com/srai98i/environment_variables_frontend"
            tech="Frontend: Next JS, CSS Tailwind, Ant Design, Leaflet API | Backend: Express, Heroku"
            alt="Project Clean-Up"
            deployUrl="https://projectcleanup.netlify.app/"
          />
          <ProjectItem
            title="Athena Resource Tool"
            backgroundImg={Athena.src}
            projectUrl="https://github.com/srai98i/w9_frontend-project-shabana-jenan-dan-kendall-simran/tree/main/bootcamp-buddy"
            tech="Frontend:React JS | Backend: Express, Heroku"
            alt="Athena Resource Tool"
            deployUrl="/"
          />
          <ProjectItem
            title="Personality Quiz"
            backgroundImg={Hero.src}
            projectUrl="https://github.com/srai98i/personality-quiz"
            tech="Next JS, CSS Tailwind"
            alt="Personality Quiz"
            deployUrl="https://personality-quiz.vercel.app/"
          />
        </div>
        <p className="py-2  text-[#EA9EB1]">
          See more projects on my Github{" "}
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
    </div>
  );
};

export default Projects;
