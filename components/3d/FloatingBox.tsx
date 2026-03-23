'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingBoxProps {
  position: [number, number, number];
}

const FloatingBox = ({ position }: FloatingBoxProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhongMaterial
        color="#3b82f6"
        emissive="#1e40af"
        shininess={100}
        wireframe={false}
      />
    </mesh>
  );
};

export default FloatingBox;
