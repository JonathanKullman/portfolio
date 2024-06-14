'use client';
import * as React from "react"
import socialLinks from "../../lib/constants";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { ModeToggle } from "../ui/mode-toggle";
import { motion } from "framer-motion";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";



type Props = {};

const navItems = [
  // {
  //   name: "Home",
  //   link: "#home",
  //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  // },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

const Navbar = (props: Props) => {

  return (
    
      
    <div className="w-full max-w-5xl items-center justify-between font-mono text-sm md:flex z-[200]">
      
      <div className="max-md:hidden">
      <ModeToggle />  
      </div>
      <div className="z-10  flex gap-12 from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none max-md:hidden">
        <AnimatedTooltip items={socialLinks} />
      </div>
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
