import { usePlane, useSphere } from '@react-three/cannon'
import { PerspectiveCamera } from '@react-three/drei'
import { Camera } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Ball({ v = new THREE.Vector3() }) {
  const cam = useRef<Camera>()
  const [ref, api] = useSphere(() => ({
    args: [1.2],
    mass: 1,
    material: { restitution: 0.95 },
    position: [0, 100, 0],
  }))
  usePlane(() => ({
    position: [0, -8.9, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => (/*api.position.set(0, 0, 0), */ api.velocity.set(0, 0, 0)),
  }))
  usePlane(() => ({
    position: [-8, 0, 0],
    rotation: [-Math.PI / 2, Math.PI / 2, 0],
  }))
  usePlane(() => ({
    position: [8, 0, 0],
    rotation: [Math.PI / 2, -Math.PI / 2, 0],
  }))
  useEffect(
    () =>
      api.position.subscribe(
        (p) => (
          cam.current?.position.lerp(
            v.set(p[0], p[1], 20 + Math.max(0, p[1])),
            0.1
          ),
          cam.current?.lookAt(0, p[1] / 1.5, 0)
        )
      ),
    []
  )
  return (
    <>
      <PerspectiveCamera ref={cam} makeDefault position={[0, 0, 30]} fov={50} />
      <mesh ref={ref as any}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial
          transmission={1}
          roughness={0}
          thickness={10}
          envMapIntensity={1}
        />
      </mesh>
    </>
  )
}
