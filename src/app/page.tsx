"use client";
import About from '@/components/about-section';
import Contact from '@/components/contact';
import GoogleAnalytics from '@/components/google-analytics';
import Header from '@/components/header';
import Services from '@/components/services/services-section';
import TestimonialsSection from '@/components/testimonials/testimonials-section';
import WorkSection from '@/components/work/work-section';
import { fetchData } from '@/store/all-data-slice';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/global.scss';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <main>
      <GoogleAnalytics />
      <Header />
      <Services />
      <About />
      <WorkSection />
      <TestimonialsSection />
      <Contact />
    </main>
  );
}
