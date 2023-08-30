"use client";
import { motion } from "framer-motion";
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

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
        <div className="h-screen flex items-center justify-content-center flex-col justify-center">
          <div className="social-icons flex justify-evenly items-center w-full">
            <a href="https://github.com/LouisAlemar/" target="_blank">
              <BsGithub className="text-5xl text-blue" />
            </a>
            <a href="https://www.linkedin.com/in/louisalemar/" target="_blank">
              <BsLinkedin className="text-5xl text-green" />
            </a>


          </div>
          <h1 className="text-8xl text-blue font-roboto block">Hi,</h1>
          <h1 className="text-6xl text-gray font-roboto block">I&apos;m <span className="text-green">Louis.</span></h1>
          <h1 className="text-6xl text-gray font-roboto">A Software Engineer!</h1>
        </div>
      </main>
    </motion.div>
  );
}
