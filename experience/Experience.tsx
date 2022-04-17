import { Canvas } from '@react-three/fiber'
import {
  Environment,
} from '@react-three/drei'
import {
  Physics,
} from '@react-three/cannon'
import Ball from './components/Ball'
import Paddle from './components/Paddle'
import MovingBlock from './components/MovingBlock'
import Block from './components/Block'

const Experience = () => (
  <Canvas dpr={1.5} camera={{ position: [0, 2, 12], fov: 50 }}>
    <Physics iterations={5} gravity={[0, -30, 0]}>
      <Ball />
      {/* <Paddle /> */}
      {
        Array.from({ length: 10 }, (_, i) => <MovingBlock key={i} position={[0, 1 + i * 4.5, 0]} offset={10000 * i} />) /* prettier-ignore */
      }
      {/* <Block
        args={[10, 1.5, 4]}
        position={[-11, -7, 0]}
        rotation={[0, 0, -0.7]}
        material={{ restitution: 1.2 }}
      />
      <Block
        args={[10, 1.5, 4]}
        position={[11, -7, 0]}
        rotation={[0, 0, 0.7]}
        material={{ restitution: 1.2 }}
      /> */}

      <Block
        args={[50, 2, 4]}
        position={[0, -10, 0]}
        // rotation={[0, 0, 0.7]}
        material={{ restitution: 1.2 }}
      />
      <Environment preset="night" />
      {/* <Background position={[0, 0, -5]} /> */}
    </Physics>
  </Canvas>
)

export default Experience
