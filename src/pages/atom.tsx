import Atom from '@/components/canvas/Atom'
import AtomScene from '@/components/canvas/AtomScene'
import dynamic from 'next/dynamic'


const Blob = dynamic(() => import('@/components/canvas/Atom'), { ssr: false })

export default function Page(props) {
  return (
    null
  )
}

Page.canvas = (props) => <AtomScene route='/'  />

export async function getStaticProps() {
  return { props: { title: 'Atom' } }
}
