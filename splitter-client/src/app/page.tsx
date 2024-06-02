import React from 'react'
import axios from 'axios'
import { Controlcomponent } from '@/components/controlcomponent'

export default async function Page() {

  // const data = await axios('http://127.0.0.1:8800/audio/Reality-Surf.mp3')
  // console.log(data)
  return (
    <div>
      <Controlcomponent/>
    </div>
  );
}
