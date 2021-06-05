import Layout from '../components/SimpleLayout'
import { Canvas, useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default function HomeAnim() {
  const benjaminTextModel = useLoader(OBJLoader, '../public/3d/benjamin_sigmar_plain.obj')

  return <Layout>
    <div className='w-full h-screen'>
      <Canvas>
        <mesh>
          <primitive object={benjaminTextModel} />
          {/* <boxGeometry args={[2, 2, 2]}/> */}
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      </Canvas>
    </div>
  </Layout>
}
