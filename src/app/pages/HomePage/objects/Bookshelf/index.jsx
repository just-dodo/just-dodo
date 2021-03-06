/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import bookshelfModel from './bookshelf.glb';
export default function Bookshelf(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(bookshelfModel);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        position={[0, -6.35, 0]}
        scale={[0.98, 4.43, 3.04]}
      />
    </group>
  );
}

useGLTF.preload(bookshelfModel);
