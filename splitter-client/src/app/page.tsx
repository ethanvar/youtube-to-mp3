import React from 'react'
import { Trackdisplay } from '@/components/trackdisplay'
import { Songsearch } from '@/components/songsearch'

export default async function Page() {
  const res = await fetch('https://upload.wikimedia.org/wikipedia/commons/3/33/Ulaw_Lalapa_sakatusa.ogg')

  return (
    <div className='flex flex-row min-h-screen items-center justify-center'>
      <div className='m-10'>
        <Songsearch />
      </div>
      <div className='m-10'>
        <Trackdisplay title="Track One" song={res.url} /> 
      </div>
    </div>
  );
}
