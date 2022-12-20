import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Create component to return red cube in a canvas
const RedCube = () => {
  const canvasRef = useRef(null);
  const getInnerHeight = () => window.innerHeight - 57;

  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / getInnerHeight(),
      1,
      1000
    );

    // Create renderer
    let renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });

    // Create cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const cube = new THREE.Mesh(geometry, material);

    // Add cube to scene
    scene.add(cube);

    // Set camera position
    camera.position.z = 2;

    // Create resize listener
    let onWindowResize = function () {
      camera.aspect = window.innerWidth / getInnerHeight();
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, getInnerHeight());
      renderer.resetState();
      renderer.render(scene, camera);
    };

    const cursor = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / window.innerWidth - 0.5;
      cursor.y = event.clientY / getInnerHeight() - 0.5;
    });

    // Cursor
    let moveCamera = function () {
      camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
      camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
      camera.position.y = cursor.y * 3;
      camera.lookAt(scene.position);
      renderer.resetState();
      renderer.render(scene, camera);
    };

    window.addEventListener("mousemove", moveCamera, false);
    window.addEventListener("resize", onWindowResize, false);
    renderer.render(scene, camera);
  }, []);

  return (
    <canvas
      height={getInnerHeight()}
      width={window.innerWidth}
      ref={canvasRef}
    />
  );
};

const BasicControls = () => {
  return <RedCube />;
};

export default BasicControls;
