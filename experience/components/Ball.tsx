import { usePlane, useSphere } from '@react-three/cannon'
import { PerspectiveCamera, SpotLight } from '@react-three/drei'
import { Camera } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { SpotLight } from 'three'
import { OrbitControls } from '@react-three/drei'

const ORBIT_CONTROLS = false

export default function Ball({ v = new THREE.Vector3() }) {
  const cam = useRef<Camera>()
  const spotlight = useRef<typeof SpotLight>()
  const [ref, api] = useSphere(() => ({
    args: [1.2],
    mass: 1,
    material: { restitution: 0.95 },
    position: [0, 10, 0],
  }))
  if (!ORBIT_CONTROLS) useEffect(
    () =>
      api.position.subscribe(
        (p) => (
          cam.current?.position.lerp(
            v.set(p[0], p[1], 30 + Math.max(0, p[1])),
            0.05
          ),
          cam.current?.lookAt(0, p[1], 0)
        )
      ),
    []
  )
  return (
    <>
      <PerspectiveCamera ref={cam} makeDefault position={[0, 0, 50]} fov={50} />
      {ORBIT_CONTROLS && <OrbitControls camera={cam.current} />}
      <mesh ref={ref as any}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial
          transmission={1}
          roughness={0}
          thickness={10}
          envMapIntensity={1}
          wireframe={true}
        />
      </mesh>
    </>
  )
}
