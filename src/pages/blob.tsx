import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

export default function Page(props) {
  return (
    null
  )
}

Page.canvas = (props) => <Blob route='/' position-y={-0.6} />

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
