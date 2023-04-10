/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/4D PASTELES.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano001.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano002.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano003.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={materials["Material.001"]}
        position={[0.49, 0, 0.06]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto001.geometry}
        material={materials["Material.001"]}
        position={[0.03, 0, 0.4]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto002.geometry}
        material={materials["Material.001"]}
        position={[0.44, 0.04, -0.25]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom"].geometry}
        material={materials.TQ_ARD_front}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_1"].geometry}
        material={materials["back-dil"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_2"].geometry}
        material={materials.TQ_ARD_edge}
      />
    </group>
  );
}

useGLTF.preload("/4D PASTELES.gltf");
