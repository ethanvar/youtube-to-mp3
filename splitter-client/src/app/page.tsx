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
  // const res = await fetch('https://443b-70-30-58-172.ngrok-free.app ', { next: { tags: ['collection'] } })
  // console.log(await res.json())

  // const urlData = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Trackdisplay />
      <Searchbar/>
    </main>
  );
}
