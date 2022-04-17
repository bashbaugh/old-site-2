import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import Block from './Block'

export default function Paddle() {
  const api = useRef<Group>()
  useFrame(
    (state) => (
      api.current?.position.set(state.mouse.x * 10, -5, 0),
      api.current?.rotation.set(0, 0, (state.mouse.x * Math.PI) / 4)
    )
  )
  return <Block ref={api} args={[5, 1.5, 4]} material={{ restitution: 1.3 }} />
}
