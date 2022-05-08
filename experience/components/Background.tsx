import { useAspect, useTexture } from '@react-three/drei'

const Background = (props: any) => (
  <mesh {...props}>
    <planeGeometry />
    {/* <meshBasicMaterial map={useTexture('/bg.jpg')} /> */}
    <meshBasicMaterial color={'#3474eb'} />
  </mesh>
)

export default Background
