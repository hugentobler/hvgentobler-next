// pages/three.js

// Modules
import { useEffect, useRef } from 'react';
import * as Three from 'three';
import styled from 'styled-components';

export default function SpinningText(props) {
  const mount = useRef(null);
  const controls = useRef(null);
  const menuOpen = props.menuOpen;

  useEffect(() => {
    let frameId;
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;

    const camera = new Three.PerspectiveCamera( 70, width / height, 0.01, 10 );
    camera.position.z = 1;

    const scene = new Three.Scene();

    const geometry = new Three.BoxBufferGeometry( 0.3, 0.6, 0.2 );
    const axis = new Three.Vector3(0.3, 0.3, -0.2).normalize();
    const material = new Three.MeshNormalMaterial();

    const mesh = new Three.Mesh( geometry, material );
    scene.add( mesh );

    const axesHelper = new Three.AxesHelper(5);
    scene.add( axesHelper );

    const renderer = new Three.WebGLRenderer( { alpha: true, antialias: true } );

    // Return's the dpi adjusted width and height.
    const getDisplaySize = () => {
      const pixelRatio = window.devicePixelRatio;
      return { w: width * pixelRatio | 0, h: height * pixelRatio | 0 };
    };

    let { w, h } = getDisplaySize();
    renderer.setSize(w, h);

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      let { w, h } = getDisplaySize();

      renderer.setSize(w, h, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    const render = () => {
      // mesh.rotation.x = -0.4;
      // mesh.rotation.y += 0.02;

      mesh.rotateOnAxis(axis, 0.015);

      renderScene();
      frameId = window.requestAnimationFrame(render);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(render)
      }
    }

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    mount.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    start();

    controls.current = { start, stop };

    return () => {
      stop();
      window.removeEventListener('resize', handleResize);
      mount.current.removeChild(renderer.domElement);

      scene.remove( mesh );
      geometry.dispose();
      material.dispose();
      scene.dispose();
    }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      console.log('stop')
      controls.current.stop();
    } else {
      controls.current.start();
    }
  }, [menuOpen])

  return (
    <Canvas
      ref={mount}
    />
  );
}

const Canvas = styled.div`
  height: 100vh;
  width: 100%;
  & canvas {
    height: 100% !important;
    width: 100% !important;
  }
`;
