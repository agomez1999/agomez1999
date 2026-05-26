"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up", // "up" | "left" | "right" | "none"
}) {
  const variants = {
    up:    { hidden: { opacity: 0, y: 24 },  visible: { opacity: 1, y: 0 }  },
    left:  { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 24 },  visible: { opacity: 1, x: 0 } },
    none:  { hidden: { opacity: 0 },          visible: { opacity: 1 }        },
  };

  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
