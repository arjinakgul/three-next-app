import { Float,  Stars } from "@react-three/drei"
import Atom from "./Atom"

export default function AtomScene({ route, ...props }) {
    return (
        <>
        <color attach="background" args={['black']} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Atom route={'/atom'}  />
        </Float>
        <Stars saturation={0} count={400} speed={0.5} />
        </>
    )
  }
