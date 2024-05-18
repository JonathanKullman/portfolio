import React from 'react'
import socialLinks from "../lib/constants";
import { ModeToggle } from "../components/ui/mode-toggle";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
} from "../../lib/motion";

type Props = {}

const Footer = (props: Props) => {
  return (
    <section
    id="footer"
    className={`flex flex-col w-full max-w-7xl mx-auto py-9`}
  >
    <div className={`flex md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
      <div className="max-md:hidden">
      <ModeToggle />  
      </div>
      </div>
    </div>
    <motion.div
        //@ts-ignore
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
         <motion.div variants={fadeIn("", "spring", 0.8, 1)}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#8c3a9c]">
    <motion.div variants={fadeIn("right", "spring", 0.8, 1)}>
      <p className="font-mono text-center font-medium text-[18px] leading-[27px] dark:text-white text-black">
        Footer<span className='text-purple-500'>.</span>exe
      </p>
      </motion.div>

      <div className="flex flex-row md:mt-0 mt-6">
      <div className="z-10 flex gap-12 from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none max-md:hidden pr-3">
        <AnimatedTooltip items={socialLinks} />
      </div>
      </div>
    </div>
    </motion.div>
    </motion.div>
  </section>
  )
}

export default Footer