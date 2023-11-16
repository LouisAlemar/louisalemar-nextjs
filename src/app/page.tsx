"use client";
import Header from '@/components/header';
import { motion } from "framer-motion";
import Services from '@/components/services/services-section';
import { fetchData } from '@/store/all-data-slice';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/global.scss';
import About from '@/components/about-section';
import WorkSection from '@/components/work/work-section';
import TestimonialsSection from '@/components/testimonials/testimonials-section';
import Contact from '@/components/contact';



export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0.5 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   transition={{
    //     duration: 0.8,
    //     delay: 0.5,
    //     ease: [0, 0.71, 0.2, 1.01]
    //   }}
    // >
    <main>
      <Header />
      <Services />
      <About />
      <WorkSection />
      <TestimonialsSection />
      <Contact />
    </main>
    // </motion.div>
  );
}
