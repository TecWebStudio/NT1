"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Rotating wireframe icosahedron ─── */
function Icosahedron() {
  const groupRef = useRef<THREE.Group>(null);

  const geo = useMemo(() => new THREE.IcosahedronGeometry(2.5, 1), []);
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.1;
    groupRef.current.rotation.x = Math.sin(t * 0.06) * 0.25;
    groupRef.current.rotation.z = Math.cos(t * 0.04) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geo}>
        <meshBasicMaterial
          color="#00E5A0"
          transparent
          opacity={0.025}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#00E5A0" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

/* ─── Orbiting ring ─── */
function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.x = t * 0.12 + 0.8;
    ref.current.rotation.z = t * 0.06;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.8, 0.008, 16, 120]} />
      <meshBasicMaterial color="#00E5A0" transparent opacity={0.2} />
    </mesh>
  );
}

/* ─── Second ring — perpendicular ─── */
function OrbitRing2() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.y = t * 0.09 + 1.5;
    ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.05) * 0.15;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[4.2, 0.006, 16, 120]} />
      <meshBasicMaterial color="#818CF8" transparent opacity={0.12} />
    </mesh>
  );
}

/* ─── Floating particles ─── */
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.012;
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
        size={0.03}
        color="#00E5A0"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ─── Subtle grid plane ─── */
function GridFloor() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 2.3 + Math.sin(clock.elapsedTime * 0.03) * 0.02;
    ref.current.position.y = -4 + Math.sin(clock.elapsedTime * 0.05) * 0.15;
  });

  return (
    <mesh ref={ref} position={[0, -4, -3]}>
      <planeGeometry args={[40, 40, 50, 50]} />
      <meshBasicMaterial color="#00E5A0" wireframe transparent opacity={0.025} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ pointerEvents: "none" }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#06060B"]} />
      <fog attach="fog" args={["#06060B", 12, 28]} />
      <Icosahedron />
      <OrbitRing />
      <OrbitRing2 />
      <Particles />
      <GridFloor />
    </Canvas>
  );
}
