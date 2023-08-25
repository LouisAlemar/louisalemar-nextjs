"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <main className="flex flex-col items-center justify-between">
        <h1>Resume Page</h1>
      </main>
    </motion.div>
  );
}
