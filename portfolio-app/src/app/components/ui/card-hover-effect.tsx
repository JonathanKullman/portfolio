'use client'
import { cn } from "../../lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../../lib/motion";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    link: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-10",
        className
      )}
    >
{items.map((item, idx) => (
  <motion.div
    //@ts-ignore
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className=""
    key={idx}
  >
    <Link
      href={item?.link}
      key={item?.link}
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-purple-500 block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <motion.div variants={fadeIn("right", "spring", 0.4 + idx * 0.1, idx * 0.5)}> 

      <Card>

          <Image src={item.image} width={100} height={100} alt="devIcon" className="mx-auto" />

      </Card>
      </motion.div>

    </Link>
  </motion.div>
))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 bg-none relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

