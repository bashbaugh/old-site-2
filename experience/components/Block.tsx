import { PublicApi, useBox } from '@react-three/cannon'
import { RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import * as THREE from 'three'
import type { Group, Vector3 } from 'three'

const Block = forwardRef<PublicApi, {
  shake?: number
  args: [w: number, h: number, d: number]
  vec: Vector3
  rotation: number
}>(
  (
    { shake = 0, args = [1, 1.5, 4], vec = new THREE.Vector3(), rotation, ...props },
    ref
  ) => {
    const group = useRef<Group>(null)

    const [block, api] = useBox(() => ({
      args,
      type: 'Static',
      ...props,
      onCollide: (e) => (shake += e.contact.impactVelocity / 12.5),
    }))

    useFrame(() =>
      group.current?.position.lerp(
        vec.set(0, (shake = THREE.MathUtils.lerp(shake, 0, 0.1)), 0),
        0.2
      )
    )

    useEffect(() => {
      // var axis = new api.Vec3(0,1,0);
      var angle = Math.PI / 3;
      api.quaternion.set(axis, angle);
    }, [rotation])

    useImperativeHandle(ref, () => api, [api])
    return (
      <group ref={group}>
        <RoundedBox ref={block as any} args={args} radius={0.4} smoothness={10}>
          <meshStandardMaterial
            color={'blue'}
            roughness={0.8}
          />
        </RoundedBox>
      </group>
    )
  }
)

export default Block
