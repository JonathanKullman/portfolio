"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { motion } from "framer-motion";
import quickmation from "../../../public/quickmation.png";
import quicksleek from "../../../public/quicksleek.png";
import apaztron from "../../../public/apaztron.png";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

import {
  fadeIn,
  staggerContainer,
} from "../../lib/motion";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="w-full mt-[160px]">
      <div className="h-[50rem] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black_70%)]"></div>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.25 }}
          className="z-20 bg-gradient-to-br mx-auto font-mono relative dark:from-purple-400 dark:to-purple-600 from-violet-500 to-purple-700 bg-clip-text text-center text-6xl font-semibold tracking-tight text-transparent sm:text-7xl md:text-7xl"
        >
          Projects
        </motion.h1>
        <motion.div
          //@ts-ignore
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeIn("up", "spring", 2, 1)}>
            <div className="flex relative items-center justify-center font-mono pt-14 z-20">
              <span className="text-purple-600">while&nbsp;</span>{" "}
              <span className="text-blue-600">(</span>!moreProjectsAvailable
              <span className="text-violet-600">()</span>
              <span className="text-blue-800">)</span>:
              <span className="text-blue-600">&nbsp;await&nbsp;</span> new_Projects
              <span className="text-violet-600">()</span>; # Reached EOF, waiting
              for new projects...
            </div>
          </motion.div>

          <div className="h-[40rem] max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-32">
            <div className="pb-20 lg:pr-16">
              <motion.div variants={fadeIn("right", "spring", 1, 1)}>
                <a target="_blank" onClick={() =>
                  toast("The website is not deployed yet.", {
                    description: "Feel free to try again in the future.",
                  })
                }>
                  <PinContainer title="In Development">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[23rem] ">
                      <h3 className=" text-white font-mono max-w-xs !pb-2 !m-0 font-bold flex text-lg">
                        QuickMation |{" "}
                        <span className="text-purple-300 font-mono text-base flex items-center">
                          &nbsp;In development
                        </span>
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-white font-mono ">
                          A web-based SaaS application enabling the automation of
                          diverse workflows, minimizing manual tasks and optimizing
                          operational effectiveness.
                        </span>
                      </div>
                      <div className="flex w-full mt-4">
                        <Image
                          src={quickmation}
                          width={1500}
                          height={1500}
                          alt="quickmation"
                          className=" rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </PinContainer>
                </a>
              </motion.div>
            </div>
            <div className="pb-20 z-40">
              <motion.div variants={fadeIn("right", "spring", 1.3, 1)}>
                <a target="_blank" onClick={() =>
                  toast("The website is not deployed yet.", {
                    description: "Feel free to try again in the future.",
                  })
                }>
                  <PinContainer title="In development" href="">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[23rem] ">
                      <h3 className=" text-white font-mono max-w-xs !pb-2 !m-0 font-bold flex text-lg">
                        Apaztron Website |{" "}
                        <span className="text-purple-300 font-mono text-base flex items-center">
                          &nbsp;DJ &amp; Producer
                        </span>
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-white font-mono ">
                          The official website for the Swedish DJ and producer
                          &quot;Apaztron&quot;. This project was completed through my freelance
                          service, Quicksleek.
                        </span>
                      </div>

                      <div className="flex w-full mt-4">
                        <Image
                          src={apaztron}
                          width={1500}
                          height={1500}
                          alt="apaztron"
                          className=" rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </PinContainer>
                </a>
              </motion.div>
            </div>
            <div className="pb-20 lg:pl-16">
              <motion.div variants={fadeIn("right", "spring", 1.6, 1)}>
                <a href="https://quicksleek.se/" target="_blank">
                  <PinContainer title="Visit Website" href="">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] h-[23rem] ">
                      <h3 className=" text-white font-mono max-w-xs !pb-2 !m-0 font-bold flex text-lg">
                        Quicksleek |{" "}
                        <span className="text-purple-300 font-mono text-base flex items-center">
                          &nbsp; My Freelancing Service
                        </span>
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-white font-mono ">
                          The official website for Quicksleek. We aim to create
                          modern, responsive, and SEO friendly websites for small
                          businesses locally.
                        </span>
                      </div>
                      <div className="flex w-full mt-4">
                        <Image
                          src={quicksleek}
                          width={1500}
                          height={1500}
                          alt="quickmation"
                          className=" rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </PinContainer>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="relative mx-auto">
          <Toaster />
        </div>
      </div>
    </section>
  );
};

export default Projects;
