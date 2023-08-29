"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <main className="flex flex-col items-center justify-between">
        <div className="h-screen flex items-center justify-items-center">
          <h1 className="text-6xl text-blue">Hi, Im Louis. <br />A Software Engineer</h1>
        </div>
      </main>
    </motion.div>
  );
}
