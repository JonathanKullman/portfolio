"use client"
import * as React from "react"
import socialLinks from "../../lib/constants";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { ModeToggle } from "../ui/mode-toggle";



type Props = {};

const Navbar = (props: Props) => {

  return (
    <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex z-10">
      <ModeToggle />  
      

      <div className="z-10 bg-gradient-to-t flex gap-12 from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <AnimatedTooltip items={socialLinks} />
      </div>
    </div>
  );
};

export default Navbar;
