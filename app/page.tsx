'use client';

import Hero from '@/components/sections/Hero';
import PremiumCTA from '@/components/sections/PremiumCTA';
import Stats from '@/components/sections/Stats';
import ParticleBackground from '@/components/ParticleBackground';
import StickyCTA from '@/components/StickyCTA';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Timeline from '@/components/sections/Timeline';
import DeviceShowcaseSection from '@/components/sections/DeviceShowcaseSection';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Blog from '@/components/sections/Blog';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <StickyCTA />
      <div className="relative z-10">
        <Hero />
        <PremiumCTA />
        <Stats />
        <About />
        <Skills />
        <Timeline />
        <DeviceShowcaseSection />
        <Projects />
        <Achievements />
        <Blog />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}
