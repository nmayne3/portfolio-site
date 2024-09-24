import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { DOMElement } from "react";

export default function ScrollDown({ className }: { className?: string }) {
  return (
    <motion.div
      className={`${className} self-center flex flex-col place-items-center `}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 40, opacity: 0 }}
    >
      <h2> {`Scroll Down`} </h2>
      <BsArrowDown />
    </motion.div>
  );
}
