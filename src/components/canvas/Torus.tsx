import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import { Color } from 'three'
import { useFrame } from '@react-three/fiber'


export default function Torus({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  const ref = useRef(null)
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.4
    ref.current?.position.set(Math.sin(t) * 4, (Math.cos(t) * 4 * Math.atan(t)) / Math.PI / 1.25, 0)
    ref.current?.rotation.set(Math.sin(t) * 10 , (Math.cos(t) * 10 * Math.atan(t)) / Math.PI / 1.25, 0)
  })
  return (
    <mesh
       ref={ref}
       // onClick={() => router.push(route)}
      //  onPointerOver={() => hover(true)}
      //  onPointerOut={() => hover(false)}
      {...props}>
      <torusGeometry args={[2, 3, 24, 32]}/>
      <meshLambertMaterial 
        opacity={0.75} 
        depthTest
        depthWrite
        alphaTest={0.5}
        wireframe//={hovered}  
        color={'blue'} />
    </mesh>
  )
}
