import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { LatheGeometry } from "three";
const AnimateBox = () => {
    const ref=useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    ref.current.rotation.x=a;
    // console.log(a);
    // console.log(clock);}
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[3,3,3]} />
      <meshPhongMaterial color="skyblue" />
      {/* <meshStandardMaterial></meshStandardMaterial> */}
    </mesh>
  );
};

const Threr02 = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.1}></ambientLight>
        <directionalLight color="royalblue" position={[0, 0, 5]}></directionalLight>
        <AnimateBox />
      </Canvas>
    </div>
  );
};
export default Threr02;
