import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
function HeroText() {
  const variants = {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* desktop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="from"
          animate="to"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi im Vlad
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="from"
            animate="to"
            transition={{ delay: 1.2 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A developer dedicated to survive
          </motion.p>
          <motion.div
            initial="from"
            animate="to"
            variants={variants}
            transition={{ delay: 1.5 }}
          >
            {" "}
            <FlipWords
              className="font-black text-white text-8xl"
              words={["Sigma", "gnoome", "nagibator"]}
            />{" "}
          </motion.div>
          <motion.p
            variants={variants}
            initial="from"
            animate="to"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex text-center flex-col space-y-6 md:hidden">
        <motion.p
          variants={variants}
          initial="from"
          animate="to"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi im vlad
        </motion.p>
        <div>
          <motion.p
            variants={variants}
            initial="from"
            animate="to"
            transition={{ delay: 1.2 }}
            className="font-black text-5xl text-neutral-300"
          >
            Building
          </motion.p>
          <motion.div
            initial="from"
            animate="to"
            variants={variants}
            transition={{ delay: 1.5 }}
          >
            <FlipWords className="font-black text-6xl" />
          </motion.div>
          <motion.p
            variants={variants}
            initial="from"
            animate="to"
            transition={{ delay: 1.8 }}
            className="text-3xl font-black "
          >
            Web Aplications
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
