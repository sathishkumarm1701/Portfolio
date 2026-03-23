'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

interface FloatingTVProps {
  position: [number, number, number];
}

const FloatingTV = ({ position }: FloatingTVProps) => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.002;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* TV Screen */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshPhongMaterial
          color="#1f2937"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Screen Glow */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[1.9, 1.1, 0.01]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.2} />
      </mesh>

      {/* TV Stand */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[1.2, 0.2, 0.3]} />
        <meshPhongMaterial color="#111827" />
      </mesh>

      {/* Stand Legs */}
      <mesh position={[-0.4, -1.1, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshPhongMaterial color="#111827" />
      </mesh>
      <mesh position={[0.4, -1.1, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshPhongMaterial color="#111827" />
      </mesh>
    </group>
  );
};

export default FloatingTV;
