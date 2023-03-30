import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  const boxRef = useRef();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(true);

  useFrame(() => {
    if (hover) {
      boxRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={boxRef}>
      <mesh
        onPointerOver={() => {
          setHover(true);
        }}
        onClick={() => {
            setActive(!active);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        {/* <icosahedronGeometry /> */}
        {/* <boxGeometry attach="geometry" /> */}
        <torusKnotGeometry attach="geometry" />
        <meshLambertMaterial
          attach="material"
          color={active ? "green" : "red"}
        />
      </mesh>
    </group>
  );
};

const Three04 = () => {
  return (
    <div>
      <Canvas
        style={{ height: 400, width: 400 }}
        camera={{ fov: 88, position: [0, 2, 2] }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} />
        <Box />
        <OrbitControls></OrbitControls>
      </Canvas>
    </div>
  );
};
export default Three04;
