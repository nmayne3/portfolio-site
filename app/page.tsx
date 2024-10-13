"use client";

import { Typewriter } from "../components/ui/typer";
import React from "react";
import { motion } from "framer-motion";
import ScrollDown from "@/components/scroll_down";
import { DeskModel } from "@/components/desk";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Environment, PerspectiveCamera, Stage } from "@react-three/drei";
import { Vector3 } from "three";

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [-2 + state.pointer.x / 4, 2 + state.pointer.y / 4, 2],
      0.3,
      delta
    );
  });
}

export default function Home({ className }: { className?: string }) {
  return (
    <main
      className={`${className}  flex flex-col items-start p-10 xl:p-24 h-[calc(100vh-64px)]`}
    >
      <div className="flex flex-row place-content-between w-full h-full">
        <div className="flex flex-col self-center pb-24 justify-start">
          {/* Image Container */}
          <div className="overflow-hidden whitespace-pre-wrap text-4xl font-black uppercase md:text-5xl">
            {`Hello,`}
          </div>
          {/* Text Container */}
          <div className={`flex flex-row place-content-between`}>
            <div className="flex flex-wrap max-w-full break-before-column flex-col md:flex-row overflow-hidden whitespace-pre-wrap text-4xl font-black uppercase">
              <motion.div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl break-normal flex-wrap text-left">
                <Typewriter text={`I'm Nathan.`}></Typewriter>
              </motion.div>
            </div>
          </div>
          <h2 className="text-2xl px-1 py-4">
            {" "}
            I'm a software developer in Seattle, WA.
          </h2>
        </div>
        <Canvas
          className="basis-1/2 flex-shrink-0"
          camera={{
            lookAt: () => [0, 0, 0],
            position: [-2, 2, 2],
          }}
        >
          <Stage adjustCamera environment={"sunset"}>
            <DeskModel position={[0, 0, 0]} rotation={[0, 0, 0]} />
          </Stage>
          <Rig />
        </Canvas>{" "}
      </div>
      <ScrollDown className="bottom-6" />
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
