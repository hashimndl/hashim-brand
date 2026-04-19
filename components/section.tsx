"use client";

import { motion } from "framer-motion";

export const Section = ({ children }: any) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      {children}
    </motion.section>
  );
};