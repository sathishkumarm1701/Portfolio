'use client';

import Hero from '@/components/sections/Hero';
import PremiumCTA from '@/components/sections/PremiumCTA';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Timeline from '@/components/sections/Timeline';
import Projects from '@/components/sections/Projects';
import DeviceShowcaseSection from '@/components/sections/DeviceShowcaseSection';
import Achievements from '@/components/sections/Achievements';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <>
      <ParticleBackground />
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
        <Certifications />
        <Contact />
      </div>
    </>
  );
}
