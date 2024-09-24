import { easeIn, easeInOut, motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  // change staggerChildren variable to speed up or slow down typing.
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const letterVariants = {
  hidden: { opacity: 0, display: "none" },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 0 },
    },
    transitionEnd: { display: "inline" },
  },
};

export const keyMarkVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      opcaity: { duration: 0 },
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.25,
    },
  },
};

export const Typewriter = ({ text, ...rest }) => (
  <motion.h2
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    className="pr-0 break-words"
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        variants={letterVariants}
        className="pr-0"
      >
        {char}
      </motion.span>
    ))}
    <motion.span
      className="font-normal"
      variants={keyMarkVariants}
      transition={{
        ease: "easeInOut",
        opcaity: { duration: 0 },
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.25,
      }}
      //transition={{ repeat: Infinity, repeatType: "reverse" }}
    >
      |
    </motion.span>
  </motion.h2>
);
