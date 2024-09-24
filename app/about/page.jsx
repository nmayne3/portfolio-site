"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section id="about" className="max-w-screen-lg m-auto pb-4">
      <motion.h1
        className="text-3xl text-center p-4 font-black uppercase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.2,
          margin: "-40px -40px -40px -40px",
        }}
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.1,
          margin: "-40px -40px -40px -40px",
        }}
      >
        <p>
          {`I'm a software developer and recent graduate from CSU Fullerton with a
          B.S. in Computer Science. I have a strong proficiency in C++ and
          Python and am well experienced in C#, Java, and Swift.\n`}
        </p>
        <p>
          {`Throughout my education I built a wide portfolio of projects, and I
          have developed a passion for creating fast, intuitive interfaces.`}
        </p>
        <p>{`In my spare time, I program games in Unreal Engine.`}</p>
        <p>
          {`I am looking forward to continuing my journey as a software developer
          while carrying on my passions.`}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutPage;
