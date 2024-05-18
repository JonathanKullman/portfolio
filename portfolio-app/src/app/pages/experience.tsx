"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";
import vercel from "../../../public/vercel.svg";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, fadeIn, textVariant, textVariant2 } from "../../lib/motion";

type Props = {};

const dummyContent = [
  {
    title: "Freelancing As Webdeveloper | 2024",
    description: (
      <>
        <p className="font-mono">
          I've initiated a freelance project with two friends where our goal is
          to create modern, responsive, and SEO-friendly websites for small
          businesses using the latest technologies such as Next.js and Tailwind
          CSS in React. It's done under the name "Quicksleek".
        </p>
        <p className="pt-2 font-mono">
          Within the Projects section, you'll discover details
          including links for every website we've successfully
          completed to date.
        </p>
      </>
    ),
    badge: "EXPERIENCE",
    frameworks: [
      "Nextjs",
      "React",
      "Tailwind.CSS",
      "TypeScript",
    ],
    image: vercel,
  },
  {
    title: "Internship As Developer At Vertiseit AB | 2021 - 2022",
    description: (
      <>
        <p className="font-mono">
          During my internship, which lasted for six months, I was involved in
          both frontend and backend development. I worked on client projects
          where I had direct contact with the clients. It was my responsibility
          not only to communicate effectively with the clients but also to
          ensure that the product was launched within the given timeframes.
          During this period, I primarily worked with technologies such as
          JavaScript, Python, C# .NET, Angular, and SQL.
        </p>
      </>
    ),
    badge: "",
    frameworks: [
      "C#",
      ".NET",
      "JavaScript",
      "Python",
      "Angular",
      "SQL",
    ],
    image: vercel,
  },
  {
    title: "Software Development At Campus Varberg | 2020 - 2022",
    description: (
      <>
        <p className="font-mono">
        During my time at Campus Varberg, I studied a range of subjects 
        including development with C#, agile software development, 
        object-oriented programming, database development and administration, 
        advanced .NET, backend system testing, development of Windows applications, 
        development of web applications, and frontend development for backend developers.  
        </p>
        <p className="pt-2 font-mono">These courses have equipped me with a strong foundation in software 
        development and prepared me for a career in the field.</p>
      </>
    ),
    badge: "EDUCATION",
    image: vercel,
  },
];

const Experience = (props: Props) => {
  return (
    <section id="experience" className="pt-20">
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="w-[1000px]"
      >
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                {item.badge !== "" ? (
                  <motion.div variants={fadeIn("", "tween", 0.0, 1)}>
                    <h2 className="dark:bg-white bg-black dark:text-black text-white rounded-[8px] text-sm font-semibold w-fit px-4 py-1 mb-4 font-mono">
                      {item.badge}
                    </h2>
                  </motion.div>
                ) : null}

                <div className="text-xl dark:text-purple-400 text-purple-500 mb-4 flex font-mono">
                  <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
                    {item.title}
                  </motion.div>
                  {item.title !== "Freelancing As Webdeveloper | 2024" ? null : (
                    <div className="pl-4 flex">
                      <motion.div variants={fadeIn("left", "tween", 0.6, 1)}>
                        <span className="dark:bg-white dark:text-black bg-black text-white font-mono rounded-full text-sm w-fit px-2 py-1">
                          Present
                        </span>
                      </motion.div>
                    </div>
                  )}
                </div>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {/* {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )} */}
                  <motion.div variants={fadeIn("", "tween", 0.4, 1)}>
                    {item.description}
                  </motion.div>
                </div>
                <div className="flex">
                {item.frameworks &&
                  item.frameworks.map((framework, index) => (
                    <div
                      key={index}
                      className=" bg-black dark:bg-white bg-opacity-70 mt-3 mr-2 text-white dark:text-black rounded-[8px] font-mono text-sm w-fit px-2 py-0"
                    >
                      {framework.split(",").map((item, subIndex) => (
                        <span key={subIndex}>{item.trim()}</span>
                      ))}
                    </div>
                  ))}
              </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </motion.div>
    </section>
  );
};

export default Experience;
