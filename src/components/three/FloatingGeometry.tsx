'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function Icosahedron() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={[-3, 2, -2]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function Octahedron() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y -= delta * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={mesh} position={[3, -1, -3]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Torus() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta * 0.1;
      mesh.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={mesh} position={[1, 2.5, -4]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial
          color="#a78bfa"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      <Icosahedron />
      <Octahedron />
      <Torus />
    </group>
  );
}
