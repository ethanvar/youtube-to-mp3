import React, {useState, useEffect} from 'react'
import { Trackdisplay } from '@/components/trackdisplay'

function Searchbar(){
  return (
    <div>
      <input type='text'></input>
      <button ></button>
    </div>
  )
}

export default async function Page() {
  const res2 = await fetch('https://7d8f-174-91-124-30.ngrok-free.app/audio/Reality-Surf.mp3')

  return (
    <div>
      <div className='flex min-h-screen items-center justify-center'>
          <Trackdisplay title="Track One" song={res2.url} /> 
      </div>
    </div>
  );
}
