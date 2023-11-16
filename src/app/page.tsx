"use client";
import Header from '@/components/header';
// import { motion } from "framer-motion";
// import { BsGithub } from 'react-icons/bs';
// import { BsLinkedin } from 'react-icons/bs';
// import { FaHandPeace } from 'react-icons/fa';
import Services from '@/components/services/services-section';
import { fetchData } from '@/store/all-data-slice';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/global.scss';
import About from '@/components/about-section';
import WorkSection from '@/components/work/work-section';
import TestimonialsSection from '@/components/testimonials/testimonials-section';



export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <Services />
      <About />
      <WorkSection />
      <TestimonialsSection />

    </main>
    // <motion.div
    //   className="text-center"
    //   initial={{ opacity: 0, scale: 0.5 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{
    //     duration: 0.8,
    //     delay: 0.5,
    //     ease: [0, 0.71, 0.2, 1.01]
    //   }}
    // >
    //   <main className="flex flex-col items-center justify-between">
    //     <div className="h-screen flex items-center flex-col justify-center">
    //       <div className="social-icons flex justify-center items-center w-full mb-5">
    //         <a href="https://github.com/LouisAlemar/" target="_blank" className="pr-5">
    //           <BsGithub className="text-5xl text-blue hover:text-green" />
    //         </a>
    //         <a href="https://www.linkedin.com/in/louisalemar/" target="_blank">
    //           <BsLinkedin className="text-5xl text-green hover:text-blue" />
    //         </a>
    //       </div>

    //       <h1 className="text-8xl text-blue font-roboto block">Hi <FaHandPeace className="align-baseline inline-block text-7xl" /></h1>
    //       <h1 className="text-6xl text-gray font-roboto-condensed block">I&apos;m <span className="text-green">&#123;Louis&#125;</span></h1>
    //       <h1 className="text-4xl text-gray font-roboto-condensed">A Front-End Developer!</h1>
    //     </div>
    //   </main>
    // </motion.div>
  );
}
