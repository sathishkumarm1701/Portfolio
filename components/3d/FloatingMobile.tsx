'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface FloatingMobileProps {
  position: [number, number, number];
}

const FloatingMobile = ({ position }: FloatingMobileProps) => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.003;
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.7) * 0.0015;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Phone Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1.6, 0.08]} />
        <meshPhongMaterial
          color="#1f2937"
          emissive="#1e40af"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Phone Screen */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[0.75, 1.5, 0.02]} />
        <meshBasicMaterial color="#3b82f6" />
      </mesh>

      {/* Screen Glow */}
      <mesh position={[0, 0, 0.07]}>
        <boxGeometry args={[0.76, 1.51, 0.01]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.3} />
      </mesh>

      {/* Notch */}
      <mesh position={[0, 0.7, 0.06]}>
        <boxGeometry args={[0.3, 0.08, 0.02]} />
        <meshPhongMaterial color="#111827" />
      </mesh>
    </group>
  );
};

export default FloatingMobile;
