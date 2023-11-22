"use client";
import About from '@/components/about-section';
import Contact from '@/components/contact';
import Header from '@/components/header';
import Services from '@/components/services/services-section';
import TestimonialsSection from '@/components/testimonials/testimonials-section';
import WorkSection from '@/components/work/work-section';
import { getServices } from '@/store/features/services/servicesSlice';
import { getTestimonials } from '@/store/features/testimonials/testimonialsSlice';
import { getWork } from '@/store/features/work/workSlice';
import { AppDispatch } from '@/store/store';
import Script from 'next/script';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/global.scss';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getServices());
    dispatch(getWork());
    dispatch(getTestimonials());
  }, [dispatch]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-P8F5G2HMX7"></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P8F5G2HMX7');
        `}
      </Script>

      <main>
        <Header />
        <Services />
        <About />
        <WorkSection />
        <TestimonialsSection />
        <Contact />
      </main>
    </>
  );
}
