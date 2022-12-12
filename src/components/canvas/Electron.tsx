import { Trail } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import {Color} from "three"


// defaults: { radius = 2.75, speed = 6, ...props }
export default function Electron({ route, ...props }) {
    const {speed, radius} = props
    const ref = useRef(null)
    const color = new Color(2, 1, 10)
    useFrame((state) => {
      const t = state.clock.getElapsedTime() * speed
      ref.current?.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
    })
    return (
      <group {...props}>
        <Trail local width={7} length={6} color={color} attenuation={(t) => t * t}>
          <mesh ref={ref}>
            <sphereGeometry args={[0.25]} />
            <meshBasicMaterial color={[10, 1, 10]} toneMapped={true} />
          </mesh>
        </Trail>
      </group>
    )
  }
