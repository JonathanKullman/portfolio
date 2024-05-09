"use client"
import * as React from "react"
import socialLinks from "../../lib/constants";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { ModeToggle } from "../ui/mode-toggle";
import { motion } from "framer-motion";



type Props = {};

const Navbar = (props: Props) => {

  return (
      
    <div className="w-full max-w-5xl items-center justify-between font-mono text-sm md:flex z-10">
      <div className="max-md:hidden">
      <ModeToggle />  
      </div>
      <div className="z-10  flex gap-12 from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none max-md:hidden">
        <AnimatedTooltip items={socialLinks} />
      </div>
    </div>
  );
};

export default Navbar;
