"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.1;
    meshRef.current.rotation.x = Math.sin(t * 0.18) * 0.06;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.35}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <MeshTransmissionMaterial
          backside={false}
          samples={2}
          thickness={1.4}
          anisotropy={0.2}
          roughness={0.12}
          ior={1.45}
          color="#f5dcb3"
          attenuationDistance={2.4}
          attenuationColor="#c8662a"
        />
      </mesh>
    </Float>
  );
}

function InnerCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = -t * 0.22;
    meshRef.current.rotation.z = t * 0.06;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.62, 1]} />
      <meshPhysicalMaterial
        color="#e89a4b"
        emissive="#c8662a"
        emissiveIntensity={0.45}
        metalness={0.55}
        roughness={0.4}
        clearcoat={0.8}
        clearcoatRoughness={0.3}
        iridescence={0.7}
        iridescenceIOR={1.55}
        iridescenceThicknessRange={[120, 720]}
      />
    </mesh>
  );
}

export default function OrbScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.28} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} color="#f9eed4" />
      <directionalLight
        position={[-3, -2, 2]}
        intensity={0.4}
        color="#8db09e"
      />
      <pointLight position={[0, 0, 3]} intensity={0.55} color="#e89a4b" />

      <Suspense fallback={null}>
        <Environment preset="sunset" environmentIntensity={0.6} />
        <InnerCore />
        <Orb />
      </Suspense>
    </Canvas>
  );
}
