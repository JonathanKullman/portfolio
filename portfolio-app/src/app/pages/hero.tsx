"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../lib/motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-[1000px]"
      >
        <div className="flex flex-col items-center justify-center h-[40rem] z-10 text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold">
          <div className="py-3">
            <motion.div variants={textVariant(0.0)}>
              <div className="py-2 text-7xl">
                <span className="font-mono">Hi</span>
                <span className="text-purple-600 tracking-[0.01rem]">, </span>
                <span className="text-6xl tracking-tighter font-mono">
                  I&apos;m <br />
                </span>
                <span className="text-purple-600 text-8xl font-mono">Jonathan</span>
              </div>
            </motion.div>
          </div>

          <div className="flex font-mono">
            <motion.div variants={textVariant(0.7)} className="">
              Junior
              <TypeAnimation
                className="text-purple-600 font-mono"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " Fullstack",
                  2500, // wait 1s before replacing "Mice" with "Hamsters"
                  " Frontend",
                  2500,
                  " Backend",
                  2500,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
              Developer<span className="text-purple-600 font-mono">.</span>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row space-x-4 mt-14">
            <motion.div variants={textVariant(0.4)} className="">
              <a href="#contact" className="relative z-20">
                <button className="w-40 h-10 rounded-xl font-mono bg-purple-600 border dark:border-black text-white text-sm z-10 transition duration-200 ease-linear hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]">
                  Get_in_touch
                </button>
              </a>
            </motion.div>
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1OfzESTG0ej1t51EPl1ViXYHKzKt12L1K&export=download"
              target="_blank"
              className="z-10 flex"
            >
              <motion.div variants={textVariant(0.6)} className="">
                <button className="w-40 h-10 rounded-xl font-mono bg-white text-black border border-black text-sm transition duration-200 ease-linear hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]">
                  Download_CV.pdf
                </button>
              </motion.div>
            </a>
          </div>
        </div>
      </motion.div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
