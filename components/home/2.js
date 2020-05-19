// components/home/2.js

// Modules
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

export default (props) => {
  const menuOpen = props.menuOpen;

  const mount = useRef(null),
    controls = useRef(null);

  useEffect(() => {

    const VIEW_ANGLE = 45,
      NEAR = 1,
      FAR = 10000;

    // Width and height
    let WIDTH = mount.current.clientWidth,
      HEIGHT = mount.current.clientHeight,
      ASPECT = WIDTH/HEIGHT;

    // Screen pixel density adjusted width and height.
    const getDisplaySize = () => {
      const r = window.devicePixelRatio;
      return { w: WIDTH * r | 0, h: HEIGHT * r | 0 }
    };

    let scene, camera, renderer, axisHelper, gridHelper;

    let directionVectorAngle = 0, directionVectorHelper;

    const directionVectorRadius = 50,
      directionVector = new THREE.Vector3(1, 1, 1).normalize();

    const init = () => {
      scene = new THREE.Scene();

      gridHelper = new THREE.GridHelper(100, 10);
      scene.add(gridHelper);

      axisHelper = new THREE.AxisHelper(100);
      scene.add(axisHelper);

      directionVectorHelper = new THREE.ArrowHelper(directionVector, origin, 50);
      scene.add(directionVectorHelper);

      camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
      camera.position.set(150, 150, 150);
      camera.lookAt(origin);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      let renderSize = getDisplaySize();
      renderer.setSize(renderSize.w, renderSize.h);

      mount.current.appendChild(renderer.domElement);
    };

    init();

  }, [])


  return (
    <Canvas
      ref={mount}
    />
  );
}

// Styled components
const Canvas = styled.div`
  height: 100vh;
  width: 100%;
  & canvas {
    height: 100% !important;
    width: 100% !important;
  }
`;
