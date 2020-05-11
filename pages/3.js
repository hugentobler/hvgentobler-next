// pages/3.js

// Modules
import { useEffect, useRef } from 'react';
import * as Three from 'three';
import styled from 'styled-components';
import Layout from '../components/Layout';

export default function PageThree() {
  const mount = useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    let frameId;

    const camera = new Three.PerspectiveCamera( 70, width / height, 0.01, 10 );
    camera.position.z = 1;

    const scene = new Three.Scene();

    const geometry = new Three.BoxGeometry( 0.2, 0.2, 0.2 );
    const material = new Three.MeshNormalMaterial();

    const mesh = new Three.Mesh( geometry, material );
    scene.add( mesh );

    const renderer = new Three.WebGLRenderer( { alpha: true, antialias: true } );
    renderer.setSize( width, height );

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    const animate = () => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    mount.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      stop();
      window.removeEventListener('resize', handleResize);
      mount.current.removeChild(renderer.domElement);

      scene.remove( mesh );
      geometry.dispose();
      material.dispose();
    }
  }, [])

  return (
    <Layout>
      <Canvas
        ref={mount}
      />
    </Layout>
  );
}

const Canvas = styled.div`
  height: 100vh;
`;
