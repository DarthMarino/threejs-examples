import * as THREE from "three";

import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  shaderMaterial,
  useGLTF,
  OrbitControls,
  useTexture,
  Center,
  Sparkles,
} from "@react-three/drei";

import { useRef } from "react";

import portalVertexShader from "/src/shaders/portal/vertex.js";
import portalFragmentShader from "/src/shaders/portal/fragment.js";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#ef3309"),
    uColorEnd: new THREE.Color("#110e0d"),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

const Portal = () => {
  // Load the GLTF model and scene to get the nodes
  const { nodes } = useGLTF("/model/portal.glb");

  // Load the baking textures and flip it on the Y axis
  const bakedTexture = useTexture("/model/baked.jpg");
  bakedTexture.flipY = false;

  const portalMaterial = useRef();
  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <>
      <OrbitControls makeDefault maxDistance={8} maxZoom={2} minZoom={0.5} />
      <color args={["#201919"]} attach="background" />
      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
          scale={nodes.poleLightA.scale}
        />
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
          scale={nodes.poleLightB.scale}
        />
        <mesh
          geometry={nodes.portaLight.geometry}
          position={nodes.portaLight.position}
          scale={nodes.portaLight.scale}
          rotation={nodes.portaLight.rotation}
        >
          <portalMaterial ref={portalMaterial} />
        </mesh>
        <Sparkles
          size={6}
          scale={[3, 2, 4]}
          position-y={1}
          speed={0.4}
          count={50}
          color="#efbc75"
        />
      </Center>
    </>
  );
};
function PortalScene() {
  const getInnerHeight = () => window.innerHeight - 57;

  return (
    <div style={{ height: getInnerHeight() }}>
      <Canvas
        flat
        dpr={[1, 2]}
        shadows
        camera={{ position: [-50, 10, 0], fov: 30 }}
      >
        <Portal />
      </Canvas>
    </div>
  );
}
export default PortalScene;
