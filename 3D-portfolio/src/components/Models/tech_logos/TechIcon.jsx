import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, Suspense } from "react";
import * as THREE from "three";

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene]);

  return (
    <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
      <Environment preset="city" />

      <Suspense fallback={null}>
        <Float speed={3} rotationIntensity={0.3} floatIntensity={0.5}>
          <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
          </group>
        </Float>
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default TechIcon;