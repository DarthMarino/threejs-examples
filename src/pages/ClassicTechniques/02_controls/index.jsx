import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  TransformControls,
  OrbitControls,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";

import "../../home.css";

function Plane(props) {
  return (
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10} {...props}>
      <planeGeometry />
      <MeshReflectorMaterial
        mirror={0.5}
        blur={[1000, 1000]}
        mixBlur={1}
        color="greenyellow"
      />
    </mesh>
  );
}

function ControlsScene() {
  const getInnerHeight = () => window.innerHeight - 57;
  const cube = useRef();
  const sphere = useRef();

  const Label = ({ text }) => {
    return (
      <Html
        position={[1, 1, 0]}
        center
        distanceFactor={8}
        occlude={[sphere, cube]}
        wrapperClass="label"
      >
        {text}
      </Html>
    );
  };

  function CubeMesh() {
    return (
      <mesh ref={cube} castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    );
  }

  function SphereMesh() {
    return (
      <mesh ref={sphere} castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
        <Label text={"This is a sphere👍"} />
      </mesh>
    );
  }
  return (
    <div style={{ height: getInnerHeight(), backgroundColor: "whitesmoke" }}>
      <Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
        <ambientLight />
        <spotLight
          angle={0.25}
          penumbra={0.5}
          position={[10, 10, 5]}
          castShadow
        />
        <Plane />
        <TransformControls object={cube} mode="rotate" />
        <TransformControls object={sphere} mode="translate" />
        <CubeMesh />
        <SphereMesh />
        <Float speed={5}>
          <Text
            color="salmon"
            position-y={2.2}
            position-x={0.5}
            maxWidth={2}
            fontSize={0.5}
          >
            I LOVE THREE FIBER
            <meshNormalMaterial />
          </Text>
        </Float>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
export default ControlsScene;
