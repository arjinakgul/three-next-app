import { Line, Sphere, TorusKnot } from "@react-three/drei"
import { useMemo } from "react"
import { Color, EllipseCurve } from "three"
import Electron from "./Electron"

export default function Atom({ route, ...props }) {
    const points = useMemo(() => new EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    return (
      <group {...props}>
        {/* <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
        <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, 1]} />
        <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, -1]} /> */}
        <Electron radius = {3}  position={[0, 0, 0]} speed={6} route={undefined} />
        <Electron radius = {3} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 3]} speed={6.5} route={undefined}  />
        <Electron radius = {3} position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 3]} speed={7} route={undefined}  />
        <Sphere args={[0.5, 21, 24,]} >
          <meshNormalMaterial wireframe   />
        </Sphere>
      </group>
    )
  }
