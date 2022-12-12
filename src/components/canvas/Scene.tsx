import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      {/* <directionalLight intensity={4} /> */}
      <ambientLight intensity={7} />
      <color attach="background" args={['#151515']} />
      {/* <fog attach="fog" args={['#3f7b9d']} /> */}
      {/* <spotLight intensity={10} angle={Math.PI / 3} position={[8, 8, 8]}  /> */}
      
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
