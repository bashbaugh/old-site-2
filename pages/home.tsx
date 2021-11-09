import { useEffect } from 'react'
import Layout from '../components/SimpleLayout'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { FontLoader } from 'three'
import NameFont from '../public/3d/baloo_tammudu_2.json'
// import { AsciiEffect as ThreeAsciiEffect } from '../lib/ThreeAsciiEffect'

// function AsciiEffect () {
//   const { gl } = useThree()

//   const effect = new ThreeAsciiEffect(gl, ' .:-+*=%@#', { invert: true })
//   effect.setSize(window.innerWidth, window.innerHeight)
//   // effect.domElement.style.color = 'white'
//   // effect.domElement.style.backgroundColor = 'black'
//   document.body.appendChild( effect.domElement )

//   return <></>
// }

export default function HomeAnim() {
  // const benjaminTextModel = useGLTF('/3d/benjamin_text.gltf')

  const nameFont = new FontLoader().parse(NameFont)

  return (
    <div>
      <div className="w-screen h-screen">
        <Canvas camera={{ fov: 10, position: [0, 0, 50] }}>
          {/* <mesh>
          { benjaminTextModel && <primitive object={benjaminTextModel} />}
          <boxGeometry args={[2, 2, 2]}/>
          <meshPhongMaterial />
        </mesh> */}
          <mesh position={[-3, 0, 0]}>
            <textGeometry
              args={[
                'Benjamin',
                {
                  font: nameFont,
                  size: 1,
                  height: 1,
                },
              ]}
            />
            <meshStandardMaterial />
          </mesh>
          <ambientLight intensity={0.1} />
          <directionalLight color="blue" position={[0, 0, 5]} />
        </Canvas>
      </div>
    </div>
  )
}
