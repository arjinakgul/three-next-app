import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'

export default function Blob({ route, ...props }) {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  const [colorState, setColorState] = useState(0)
  useCursor(hovered)
  const colors = ['#6C4AB6','#8D72E1','#8D9EFF','#B9E0FF']
  useEffect(() => {
    setColorState((colorState + 1) % colors.length)
  }, [hovered])
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 12, 12]} />
      <MeshDistortMaterial speed={4} distort={0.6} roughness={0.1} transparent={hovered}  color={colors[colorState]} />
    </mesh>
  )
}
