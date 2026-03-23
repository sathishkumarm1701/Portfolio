'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingTV from '@/components/3d/FloatingTV';
import FloatingMobile from '@/components/3d/FloatingMobile';

const DeviceShowcase = () => {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
      
      <ambientLight intensity={0.6} />
      <pointLight position={[15, 15, 15]} intensity={1.2} />
      <pointLight position={[-15, -15, 15]} intensity={0.6} color="#8b5cf6" />

      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
          <FloatingTV position={[-3, 0, 0]} />
        </Float>
        
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
          <FloatingMobile position={[3, 0, 0]} />
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default DeviceShowcase;
