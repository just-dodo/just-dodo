/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three';
import React, { useRef } from 'react';
import catModel from './cat_220222.glb';
import { useGLTF, PresentationControls, useTexture } from '@react-three/drei';
export default function Cat(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(catModel);

  function onClickModel() {
    window.open('https://www.instagram.com/mone__ca__t', '_blank');
  }
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.69, 0]}>
        <primitive object={nodes.Bone001} />
        <primitive object={nodes.Bone004} />
        <skinnedMesh
          geometry={nodes.Sphere_1.geometry}
          material={materials['Material.004']}
          skeleton={nodes.Sphere_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Sphere_2.geometry}
          material={materials['Material.003']}
          skeleton={nodes.Sphere_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mball011.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Mball011.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(catModel);
