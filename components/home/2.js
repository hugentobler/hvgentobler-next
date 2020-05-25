// components/home/2.js

// Modules
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import styled from 'styled-components';

export default (props) => {
  const menuOpen = props.menuOpen;

  const mount = useRef(null),
    control = useRef(null),
    canvasVisual = useRef(null);

  useEffect(() => {
    let frameId;

    const FOV = 45,
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

    // Scene and box
    let scene, camera, renderer, axesHelper, gridHelper, controls;

    // let directionVectorAngle = 0, directionVectorHelper;

    // const directionVectorRadius = 50,
    const directionVector = new THREE.Vector3(-0.3, 1, 0).normalize();

    let box, textures;

    const origin = new THREE.Vector3(0, 0, 0);

    // The box
    function Box(w, h, d){
      const geometry = new THREE.BoxBufferGeometry(w, h, d);
      // Pass array of textures as material.
      THREE.Mesh.call(this, geometry, textures);

      // Define a vector in world coordinates for this box to look at
      this.lookAtVector = new THREE.Vector3();
      // Set the initial direction of the arrow
      // This MUST have the  correct orientation for the initial box
      // so that when the box is rotated, then this arrow will rotate with it
      // const direction = new THREE.Vector3(0, 0, 1);
      // Create a vector to hold the arrows position
      // const position = new THREE.Vector3();
      // Create the arrow
      // this.arrow = new THREE.ArrowHelper(direction, position, h, 0xffffff);
      // And make it a child of the box
      // this.add(this.arrow);
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

    // The text textures
    function Texture(w, h, text){
      const ctx = document.createElement('canvas').getContext('2d');
      ctx.canvas.width = w;
      ctx.canvas.height = h;
      ctx.fillStyle = 'gray';
      ctx.fillRect(0, 0, w, h);
      ctx.font = '100px Soehne';
      ctx.fillStyle = 'white';
      ctx.fillText(text, 0, h-30, w);

      const texture = new THREE.CanvasTexture(ctx.canvas);

      this.canvas = ctx.canvas;

      this.material = new THREE.MeshBasicMaterial({
        map: texture
      });
    };

    canvasVisual.current.appendChild(new Texture(100,100, 'BACKFACE').canvas);

    const init = () => {
      scene = new THREE.Scene();

      // gridHelper = new THREE.GridHelper(100, 10);
      // scene.add(gridHelper);
      // axesHelper = new THREE.AxesHelper(100);
      // scene.add(axesHelper);
      // directionVectorHelper = new THREE.ArrowHelper(directionVector, origin, 50);
      //scene.add(directionVectorHelper);

      // Create the text textures
      textures = [
        new Texture(100, 100, 'ONE').material,
        new Texture(240, 160, 'TWO').material,
        new Texture(480, 320, 'THREE').material,
        new Texture(100, 100, 'FOUR').material,
        new Texture(100, 100, 'BACKFACE').material,
        new Texture(320, 160, 'BOTTOM').material,
      ];

      // Create the box
      box = new Box(80, 40, 120);
      box.position.set(0, 0, 0);
      scene.add(box);
      // Set the rotation angle of box
      box.setDirection(directionVector);

      camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
      camera.position.set(150, -120, 150);
      camera.lookAt(origin);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      let renderSize = getDisplaySize();
      renderer.setSize(renderSize.w, renderSize.h);

      // controls = new OrbitControls(camera, renderer.domElement);
      // controls.enableZoom = false;

      mount.current.appendChild(renderer.domElement);
      window.addEventListener('resize', handleResize);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      // Rotate the box
      box.rotation.z += 0.02;
      //controls.update();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      let renderSize = getDisplaySize();
      renderer.setSize(renderSize.w, renderSize.h, false);
      camera.aspect = mount.current.clientWidth/mount.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    const start = () => {
      if (!frameId) frameId = requestAnimationFrame(animate);
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    init();
    start();

    control.current = {start, stop};

    return () => {
      stop();
      mount.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);

      // Memory cleanup
      scene.remove(box);
      //box1.geometry.dispose();
      //box1.material.dispose();
      scene.dispose();
    }
  }, [])

  useEffect(() => {
    menuOpen ? control.current.stop() : control.current.start();
  }, [menuOpen])

  return (
    <>
      <div
        ref={canvasVisual}
      />
      <Canvas
        ref={mount}
      />
    </>
  );
}

// Styled components
const Canvas = styled.div`
  max-height: 800px;
  height: 100vh;
  width: 100%;
  & canvas {
    height: 100% !important;
    outline: 0;
    width: 100% !important;
  }
`;
