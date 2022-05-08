import React, { useMemo, useRef, useState } from 'react'
import { RoundedBox, SpotLight, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {
  usePlane,
} from '@react-three/cannon'
import type { Group, Mesh, MeshStandardMaterial } from 'three'
import Block from './components/Block'
import * as THREE from 'three'
import { useSpring, useSprings } from 'react-spring'

interface SceneGLTF extends GLTF {
  nodes: {
    Background: Mesh
    BoxCenter: Mesh
  }
  materials: {
    Background: MeshStandardMaterial
    Base: MeshStandardMaterial
  }
}

const PLANE_ROTATION = [Math.PI/8, 0, 0]

export default function Scene(props) {
  const group = useRef<Group>()
  const [rotation, setRotation] = useState(Math.PI / 4)

  const { rotZ } = useSpring({
    rotZ: rotation,
  })

  const { nodes, materials } = useGLTF(
    '/3d/models/scene_draco.glb'
  ) as SceneGLTF

  const centerBlock = useRef()

  return <>
    <group ref={group} {...props} dispose={null} rotation={[0, 0, rotZ.get()]}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Background.geometry}
        material={materials.Background}
        position={[0, 0, 3]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 1, 100]}
      /> */}

      <Block ref={centerBlock} args={[40, 20, 6]} vec={new THREE.Vector3(0, 0, 0)} />
    </group>
    </>
}

useGLTF.preload('/3d/models/scene_draco.glb')
