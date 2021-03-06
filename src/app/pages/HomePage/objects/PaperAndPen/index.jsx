/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import paperModel from './paper.glb';
import penModel from './pen.glb';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function PaperAndPen(props) {
  const paper = useLoader(GLTFLoader, paperModel);
  const pen = useLoader(GLTFLoader, penModel);
  return (
    <group {...props}>
      <primitive object={paper.scene} />
      <primitive object={pen.scene} position={[10, 0, -10]} scale={4} />
    </group>
  );
}
