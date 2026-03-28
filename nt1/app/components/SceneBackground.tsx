"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function DriftingParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.012;
    ref.current.position.x = Math.sin(clock.elapsedTime * 0.015) * 0.4;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00E5A0"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function PerspectiveGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x =
      Math.PI / 2.4 + Math.sin(clock.elapsedTime * 0.025) * 0.03;
    ref.current.position.y =
      -5 + Math.sin(clock.elapsedTime * 0.04) * 0.2;
  });

  return (
    <mesh ref={ref} position={[0, -5, -5]}>
      <planeGeometry args={[60, 60, 80, 80]} />
      <meshBasicMaterial
        color="#00E5A0"
        wireframe
        transparent
        opacity={0.018}
      />
    </mesh>
  );
}

export default function SceneBackground() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 1]}
        style={{ pointerEvents: "none" }}
        gl={{ antialias: false, alpha: true }}
      >
        <color attach="background" args={["#0C0C14"]} />
        <fog attach="fog" args={["#0C0C14", 8, 28]} />
        <DriftingParticles />
        <PerspectiveGrid />
      </Canvas>
    </div>
  );
}
