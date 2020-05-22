// components/home/2.js

// Modules
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import styled from 'styled-components';

export default (props) => {
  const menuOpen = props.menuOpen;

  const mount = useRef(null),
    control = useRef(null);

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

    let scene, camera, renderer, axesHelper, gridHelper, controls;

    let directionVectorAngle = 0, directionVectorHelper;

    const directionVectorRadius = 50,
      directionVector = new THREE.Vector3(-0.3, 1, 0).normalize();

    let box1;

    const origin = new THREE.Vector3(0, 0, 0);

    // Text
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = 120;
    ctx.canvas.height = 40;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var x = ctx.canvas.width / 2;
    var y = ctx.canvas.height / 2;
    ctx.font = '30px Soehne';
    ctx.fillStyle = 'blue';
    ctx.fillText('Christopher', 0, 0, ctx.canvas.width);
    //ctx.fillRect(0, 0, 150, 100);
    //var strDataURI = canvas.toDataURL("image/jpeg");
    //var imag = new Image();
    //imag.src = strDataURI;
    const texture = new THREE.CanvasTexture(ctx.canvas);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
    });

    const textMaterials = [
      material
    ];

    /*
    USE TEXTURE LOADER INSTEAD
    */

    function Box(w, h, d){
      const geometry = new THREE.BoxBufferGeometry(w, h, d);
      //const material = new THREE.MeshBasicMaterial();
      THREE.Mesh.call(this, geometry, textMaterials);

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

    const init = () => {
      scene = new THREE.Scene();

      gridHelper = new THREE.GridHelper(100, 10);
      //scene.add(gridHelper);

      axesHelper = new THREE.AxesHelper(100);
      //scene.add(axesHelper);

      directionVectorHelper = new THREE.ArrowHelper(directionVector, origin, 50);
      //scene.add(directionVectorHelper);

      box1 = new Box(80, 40, 120);
      box1.position.set(0, 0, 0);
      scene.add(box1);
      box1.setDirection(directionVector);

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
      box1.rotation.z += 0.02;
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

      scene.remove(box1);
      box1.geometry.dispose();
      box1.material.dispose();
      scene.dispose();
    }
  }, [])

  useEffect(() => {
    menuOpen ? control.current.stop() : control.current.start();
  }, [menuOpen])

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
