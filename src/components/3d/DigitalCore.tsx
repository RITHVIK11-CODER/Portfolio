import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function DigitalCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    /* ================================
       MAIN CORE ROTATION
    ================================= */
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.18;
      coreRef.current.rotation.y += delta * 0.28;

      const targetX = state.pointer.y * 0.15;
      const targetY = state.pointer.x * 0.2;

      coreRef.current.rotation.x = THREE.MathUtils.lerp(
        coreRef.current.rotation.x,
        coreRef.current.rotation.x + targetX,
        0.02
      );

      coreRef.current.rotation.y = THREE.MathUtils.lerp(
        coreRef.current.rotation.y,
        coreRef.current.rotation.y + targetY,
        0.02
      );
    }

    /* ================================
       OUTER RINGS
    ================================= */
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.08;
      ringRef.current.rotation.y -= delta * 0.12;
      ringRef.current.rotation.z += delta * 0.04;
    }

    /* ================================
       INNER RING
    ================================= */
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x -= delta * 0.12;
      innerRingRef.current.rotation.z += delta * 0.09;
    }
  });

  return (
    <>
      {/* =================================
          MAIN GLASS DIGITAL CORE
      ================================= */}
      <Float
        speed={1.3}
        rotationIntensity={0.2}
        floatIntensity={0.45}
      >
        <mesh ref={coreRef} scale={1.15}>
          <icosahedronGeometry args={[1, 2]} />

          <meshPhysicalMaterial
            color="#FF6B35"
            metalness={0.45}
            roughness={0.18}
            transmission={0.45}
            thickness={0.3}
            transparent
            opacity={0.82}
            clearcoat={0.8}
            clearcoatRoughness={0.18}
          />
        </mesh>
      </Float>

      {/* =================================
          INNER ENERGY CORE
      ================================= */}
      <mesh scale={0.48}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#FF6B35"
          emissive="#FF6B35"
          emissiveIntensity={1.6}
          metalness={0.8}
          roughness={0.22}
        />
      </mesh>

      {/* =================================
          OUTER ORBIT RINGS
      ================================= */}
      <group ref={ringRef}>
        {/* Orange ring */}
        <mesh rotation={[Math.PI / 2.7, 0, 0]}>
          <torusGeometry args={[1.55, 0.008, 6, 96]} />

          <meshBasicMaterial
            color="#FF6B35"
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* White ring */}
        <mesh rotation={[Math.PI / 2.7, 0.35, 0]}>
          <torusGeometry args={[1.78, 0.004, 6, 96]} />

          <meshBasicMaterial
            color="#F5F2EA"
            transparent
            opacity={0.22}
          />
        </mesh>
      </group>

      {/* =================================
          INNER ORBIT
      ================================= */}
      <group ref={innerRingRef}>
        <mesh rotation={[0.5, 0.8, 0.2]}>
          <torusGeometry args={[1.3, 0.006, 6, 96]} />

          <meshBasicMaterial
            color="#F5F2EA"
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>

      {/* =================================
          ORBITING ENERGY POINTS
      ================================= */}
      <mesh position={[1.55, 0.15, 0]}>
        <sphereGeometry args={[0.055, 12, 12]} />

        <meshStandardMaterial
          color="#FF6B35"
          emissive="#FF6B35"
          emissiveIntensity={2.5}
        />
      </mesh>

      <mesh position={[-1.35, 0.65, 0.15]}>
        <sphereGeometry args={[0.035, 12, 12]} />

        <meshStandardMaterial
          color="#FF8A5B"
          emissive="#FF6B35"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[0.45, -1.45, 0.2]}>
        <sphereGeometry args={[0.045, 12, 12]} />

        <meshStandardMaterial
          color="#FF6B35"
          emissive="#FF6B35"
          emissiveIntensity={2.2}
        />
      </mesh>

      {/* =================================
          LIGHT PARTICLES
      ================================= */}
      <Sparkles
        count={45}
        scale={[4, 4, 4]}
        size={1.2}
        speed={0.2}
        opacity={0.4}
        color="#FF8A5B"
      />
    </>
  );
}

export default DigitalCore;