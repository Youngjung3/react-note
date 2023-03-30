import { Canvas } from "@react-three/fiber";
const Threr01 = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.1}></ambientLight>
        <directionalLight color="red" position={[0,0,5]}></directionalLight>
        <mesh>
          <boxGeometry></boxGeometry>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  );
};
export default Threr01;
