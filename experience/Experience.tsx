import { Canvas } from '@react-three/fiber'
import { Environment, Stage, Stars } from '@react-three/drei'
import { Debug, Physics } from '@react-three/cannon'
import Ball from './components/Ball'
import MovingBlock from './components/MovingBlock'
import Block from './components/Block'
import Scene from './Scene'
import Background from './components/Background'
import { Vector3 } from 'three'

const PHYS_DEBUG = true
const PhysicsDebugWrapper = ({ children }) => {
  const debug = process.env.NODE_ENV === 'development' && PHYS_DEBUG
  return debug ? (
    <Debug color={'red'} scale={1}>
      {children}
    </Debug>
  ) : (
    children
  )
}

const Experience = () => (
  <Canvas dpr={1.5} camera={{ position: [0, 2, 12], fov: 50 }}>
    <Physics iterations={5} gravity={[0, -30, 0]}>
      <PhysicsDebugWrapper>
        <Background position={new Vector3(0, 0, -5)} scale={new Vector3(1000, 1000)} />
        <Environment preset="dawn" />
        <ambientLight intensity={0.2} />
        <Scene />
        <Ball />
        {/* <Paddle /> */}
        {/* {
          Array.from({ length: 10 }, (_, i) => <MovingBlock key={i} position={[0, 1 + i * 4.5, 0]} offset={10000 * i} />)
        } */}
        {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}
      </PhysicsDebugWrapper>
    </Physics>
  </Canvas>
)

export default Experience
