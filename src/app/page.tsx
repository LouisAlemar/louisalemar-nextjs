"use client";
import About from '@/components/about-section';
import Contact from '@/components/contact';
import Header from '@/components/header';
import Services from '@/components/services/services-section';
import TestimonialsSection from '@/components/testimonials/testimonials-section';
import WorkSection from '@/components/work/work-section';
import { fetchData } from '@/store/all-data-slice';
import { AppDispatch } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/global.scss';
import Script from 'next/script';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
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
