'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingBox from './FloatingBox';
import FloatingTV from './FloatingTV';

const Scene = () => {
  return (
    <Canvas className="w-full h-full" dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={2}
      />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#8b5cf6" />

      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <FloatingBox position={[-2, 0, 0]} />
        </Float>
        
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
          <FloatingTV position={[2, 0, 0]} />
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
