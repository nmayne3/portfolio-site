"use client";

import { Typewriter } from "../components/ui/typer";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between p-10 xl:p-24">
      {/* Image Container */}
      <div className="relative block overflow-hidden whitespace-pre-wrap text-4xl font-black uppercase">
        I'm Nathan
      </div>
      {/* Text Container */}
      <div className="flex flex-wrap max-w-full break-before-column flex-col md:flex-row relative overflow-hidden whitespace-pre-wrap text-4xl font-black uppercase">
        <motion.div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl break-normal flex-wrap">
          <Typewriter text="Software Developer;"></Typewriter>
        </motion.div>
      </div>
    </main>
  );
}

const TypeText = ({ text }: { text: string }) => {
  return (
    <motion.div initial="initial" whileHover="hovered">
      <div className="flex flex-row">
        {text.split("").map((letter, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{ delay: 0.2 * i }}
              className="inline-block whitespace-pre"
              key={i}
            >
              {letter}
            </motion.span>
          );
        })}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {" "}
          |{" "}
        </motion.div>
      </div>
    </motion.div>
  );
};
