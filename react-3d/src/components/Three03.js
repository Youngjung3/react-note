import "../App.css";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader() {
  const { process } = useProgress();
  return <Html center>{process} % 로딩완료</Html>;
}

const Model = () => {
  // const gltf=useLoader(GLTFLoader,"./rooster/scene.gltf");
  const gltf = useLoader(GLTFLoader, "./cat/scene.gltf");
  return (
    <primitive
      object={gltf.scene}
      scale={1}
      rotation={[1, 1, 1]}
      position={[1, 1, 0.5]}
    />
  );
};

const Three03 = () => {
  const handleCamera = (prop) => {
    console.log("handleCamera:", prop.camera);
  };
  return (
    <div>
      <Canvas
        onCreated={handleCamera}
        camera={{ position: [2, 2, 5], fov: 75, near: 0.1, far: 500 }}>
        <Suspense fallback={<Loader /> }>
          <Model />
          <Environment preset="sunset" background blur={0.5} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Three03;
