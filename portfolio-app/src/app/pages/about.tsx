'use client';
import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/motion";
import { Meteors } from "../components/ui/meteors";
import Image from "next/image";
import person from "../../../public/person.png";
import profile from "../../../public/profile-pic.png";

type Props = {}

const About = (props: Props) => {
  return (
    <>
     
    <div id="about" className="flex items-center justify-center mx-auto pt-36 pb-36">

      <div className="w-3/5 relative flex">
      <motion.div
        //@ts-ignore
        variants={fadeIn("down", "tween", 0.0, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className=""
      >
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black to-black dark:from-purple-600 dark:to-purple-900 transform scale-[0.70] dark:scale-[0.70] rounded-full blur-3xl" />
       
        <div className="relative shadow-xl bg-purple-900 border border-black border-opacity-50 px-4 py-8 h-full overflow-hidden rounded-2xl items-center flex justify-between">
        
          <div className="px-5">
            <motion.div className="flex flex-row mb-4" variants={fadeIn("", "tween", 0.1, 1)}>
              <div className="h-5 w-5 rounded-full border items-center justify-center border-gray-500 flex">       
                <Image 
                  src={person}
                  width={10}
                  height={10}
                  className="invert items-center"
                  alt="person-icon"
                />
              </div>
              <p className="flex font-mono text-xs justify-center items-center ml-2 text-white">Based in Varberg, Sweden</p>
            </motion.div>
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h1 className="font-bold text-2xl font-mono text-white mb-4 relative z-50">
                About Me
              </h1>
            </motion.div>
            <motion.div variants={fadeIn("", "tween", 0.2, 1)}>
              <p className=" font-medium text-base font-mono text-white mb-4 relative z-50">
                Hey there! I&apos;m a junior developer with a passion for coding and creativity. 
                Whether it&apos;s crafting cool frontend designs or diving deep into backend challenges, 
                I&apos;m all about making tech magic happen. <br/><br/>
                I&apos;m genuinely thrilled to be part of a team that&apos;s all about innovation and growth. Can&apos;t wait to get stuck into some exciting projects and see what we can achieve together!
              </p>
            </motion.div>
          </div>
          {/* Right side image */}
          <div className="">
            <div className="">
              <motion.div variants={fadeIn("", "tween", 0.2, 1)}>
                <Image src={profile} alt="profile-pic" width={600} height={600} />
              </motion.div>
            </div>
          </div>
          <Meteors number={20} />
        </div>
      </motion.div>
      </div>
    </div>
    </>
  );
}

export default About;
