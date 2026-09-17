import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import DigitalCore from "./DigitalCore";

function Scene() {
  return (
    <Canvas
      dpr={[1, 1.25]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{
        position: [0, 0, 5],
        fov: 42,
      }}
      frameloop="always"
    >
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={42} />

      <ambientLight intensity={0.3} />

      <pointLight
        position={[2.5, 2.5, 3]}
        intensity={5}
        distance={7}
        color="#FF6B35"
      />

      <pointLight
        position={[-3, 1, 2]}
        intensity={2.5}
        distance={8}
        color="#F5F2EA"
      />

      <DigitalCore />
    </Canvas>
  );
}

export default Scene;