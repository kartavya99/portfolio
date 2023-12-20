import { motion } from "framer-motion";

import classes from "./HomePage.module.css";
const text = "Welcome To My Portfolio";
const text2 = "Kartavya!!";

const HomePage = () => {
  // const words = text.split(" ");
  const words = Array.from(text);
  const title = Array.from(text2);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * 1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className={classes.mainPage}>
      <motion.div
        className={classes.heading} // className="container flex flex-col items-center justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {" "}
          {word}
        </motion.span>
      // ))} */}

        {words.map((word, index) => (
          <motion.span variants={child} key={index}>
            {word === " " ? "\u00A0" : word}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        className={classes.heading2} // className="container flex flex-col items-center justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* {words.map((word, index) => (
    <motion.span variants={child} key={index}>
      {" "}
      {word}
    </motion.span>
  // ))} */}

        {title.map((name, index) => (
          <motion.span variants={child} key={index}>
            {name === " " ? "\u00A0" : name}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
