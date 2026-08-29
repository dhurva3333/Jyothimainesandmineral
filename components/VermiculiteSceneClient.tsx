'use client'

import dynamic from 'next/dynamic'

const VermiculiteScene = dynamic(() => import('./VermiculiteScene'), { ssr: false })

export default function VermiculiteSceneClient() {
  return <VermiculiteScene />
}
