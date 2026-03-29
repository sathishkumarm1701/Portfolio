'use client';

import { lazy, Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import PremiumCTA from '@/components/sections/PremiumCTA';
import Stats from '@/components/sections/Stats';
import ParticleBackground from '@/components/ParticleBackground';

// Lazy load below-the-fold sections
const About = lazy(() => import('@/components/sections/About'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Timeline = lazy(() => import('@/components/sections/Timeline'));
const DeviceShowcaseSection = lazy(() => import('@/components/sections/DeviceShowcaseSection'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Achievements = lazy(() => import('@/components/sections/Achievements'));
const Blog = lazy(() => import('@/components/sections/Blog'));
const Certifications = lazy(() => import('@/components/sections/Certifications'));
const Contact = lazy(() => import('@/components/sections/Contact'));

// Loading fallback component
const SectionFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-slate-400">Loading...</div>
  </div>
);

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <PremiumCTA />
        <Stats />
        
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Timeline />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <DeviceShowcaseSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Achievements />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Blog />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </div>
    </>
  );
}
