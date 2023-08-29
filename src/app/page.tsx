"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <main className="flex flex-col items-center justify-between">
        <div className="h-screen flex items-center justify-items-center">
          <h1 className="text-6xl">Hi, Im Louis. A Software Engineer</h1>
        </div>
      </main>
    </motion.div>
  );
}
