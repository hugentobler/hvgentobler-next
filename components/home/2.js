// components/home/2.js

// Modules
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
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

    let scene, camera, renderer, axesHelper, gridHelper, controls;

    let directionVectorAngle = 0, directionVectorHelper;

    const directionVectorRadius = 50,
      directionVector = new THREE.Vector3(1, 1, 1).normalize();

    let box1;

    const origin = new THREE.Vector3(0, 0, 0);

    function Box(w, h, d){
      const geometry = new THREE.BoxGeometry(w, h, d);
      const material = new THREE.MeshBasicMaterial({ wireframe: true });
      THREE.Mesh.call(this, geometry, material);

      // Define a vector in world coordinates for this box to look at
      this.lookAtVector = new THREE.Vector3();

      // Set the initial direction of the arrow
      // This MUST have the  correct orientation for the initial box
      // so that when the box is rotated, then this arrow will rotate with it
      const direction = new THREE.Vector3(0, 0, 1);

      // Create a vector to hold the arrows position
      const position = new THREE.Vector3();

      // Create the arrow
      this.arrow = new THREE.ArrowHelper(direction, position, h, 0xffffff);

      // And make it a child of the box
      this.add(this.arrow);
    };

    Box.prototype = Object.assign(Object.create(THREE.Mesh.prototype), {

      constructor: Box,

      setDirection(vector) {
        this.lookAtVector.set(
          this.position.x + vector.x,
          this.position.y + vector.y,
          this.position.z + vector.z,
        );
        this.lookAt(this.lookAtVector);
      },
    });

    const init = () => {
      scene = new THREE.Scene();

      gridHelper = new THREE.GridHelper(100, 10);
      scene.add(gridHelper);

      axesHelper = new THREE.AxesHelper(100);
      scene.add(axesHelper);

      directionVectorHelper = new THREE.ArrowHelper(directionVector, origin, 50);
      scene.add(directionVectorHelper);

      box1 = new Box(20, 30, 20);
      box1.position.set(50, 50, 0);
      scene.add(box1);

      camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
      camera.position.set(150, 150, 150);
      camera.lookAt(origin);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      let renderSize = getDisplaySize();
      renderer.setSize(renderSize.w, renderSize.h);

      controls = new OrbitControls(camera, renderer.domElement);

      mount.current.appendChild(renderer.domElement);
      window.addEventListener('resize', handleResize);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      let renderSize = getDisplaySize();
      renderer.setSize(renderSize.w, renderSize.h, false);
      camera.aspect = mount.current.clientWidth/mount.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      mount.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    }

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
    outline: 0;
    width: 100% !important;
  }
`;
