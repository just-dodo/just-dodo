import { useFBX, useGLTF, PresentationControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import bell from './bell.fbx';
import bell from './bell.glb';

import React, { useRef } from 'react';

// export default function Bell(props) {
//   // const fbx = useFBX(bell);
//   // const fbx = useGLTF(bell);
//   const fbx = useLoader(FBXLoader, bell);
//   return <primitive object={fbx} {...props} />;
//   // const gltf = useLoader(GLTFLoader, bell);
//   // return <primitive object={gltf.scene} />;
// }

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
export default function Bell(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(bell);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[0, 0.08, 0]}
        scale={[0.46, 0.43, 0.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        scale={[0.49, -0.04, 0.49]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.003']}
        position={[0, 0.52, 0]}
        scale={[0.05, -0.04, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[0, 0.57, 0]}
        scale={[0.07, -0.01, 0.07]}
      />
    </group>
  );
}

useGLTF.preload(bell);