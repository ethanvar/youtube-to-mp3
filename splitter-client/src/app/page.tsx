import React from 'react'
import { Trackdisplay } from '@/components/trackdisplay'
import { Songsearch } from '@/components/songsearch'
import { Controlcomponent } from '@/components/controlcomponent'

export default async function Page() {
  const res = await fetch('https://upload.wikimedia.org/wikipedia/commons/3/33/Ulaw_Lalapa_sakatusa.ogg')

  return (
    <div>
      <Controlcomponent/>
    </div>
  );
}
