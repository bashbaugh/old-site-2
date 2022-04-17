import { PublicApi } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import Block from './Block'

export default function MovingBlock({
  offset = 0,
  position: [x, y, z],
  ...props
}: any) {
  const api = useRef<PublicApi>()
  useFrame((state) =>
    api.current?.position.set(
      x +
        (Math.sin(offset + state.clock.elapsedTime) * state.viewport.width) / 4,
      y,
      z
    )
  )
  return (
    <Block
      ref={api}
      args={[3, 1.5, 4]}
      material={{ restitution: 1.1 }}
      {...props}
    />
  )
}
