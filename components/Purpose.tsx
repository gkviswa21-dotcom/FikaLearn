
import React from 'react';
import { motion } from 'framer-motion';

const Purpose: React.FC = () => {
  const sentence = "Exam Prep shouldn’t be stressful — or confusing.";
  const words = sentence.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-32 md:py-52 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-5xl font-medium leading-tight text-[#121E1F] mb-6">
            {words.map((word, index) => (
              <motion.span variants={child} key={index} className="inline-block mr-2">
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-xl md:text-3xl text-[#38A4BE] font-medium"
          >
            Fikalearn helps students practice, revise, and improve confidence.
          </motion.h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Purpose;