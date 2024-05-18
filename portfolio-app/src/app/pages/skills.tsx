"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../lib/motion";

type Props = {};

export const projects = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    link: "https://dotnet.microsoft.com/en-us/languages/csharp",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg",
    link: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    link: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
    link: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    link: "https://nextjs.org/",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    link: "https://react.dev/",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com/",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    link: "https://vitejs.dev/",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    link: "https://www.python.org/",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
    link: "https://git-scm.com/",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
    link: "https://visualstudio.microsoft.com/",
  },

];

const Skills = (props: Props) => {
  return (
    <div id="skills" className="w-full">
      <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="z-40 bg-gradient-to-br mt-[80px] mb-[-200px] relative font-mono dark:from-purple-300 dark:to-purple-500 from-violet-500 to-purple-700 bg-clip-text text-center text-6xl font-semibold tracking-tight text-transparent md:text-7xl"
          >
            Skills
          </motion.h1>
      <div className="mb-[-250px]">
        
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}         
          >         
          </motion.h1>
        </LampContainer>
      </div>

      
      <div className="max-w-5xl mx-auto px-8 mt-[-490px]">
     
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Skills;
