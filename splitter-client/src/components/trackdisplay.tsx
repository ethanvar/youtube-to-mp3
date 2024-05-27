"use client"
import React from 'react';
import { useRef } from 'react';
import { useWavesurfer } from '@wavesurfer/react'

interface Props {
  "title" : string,
  "song" : string
}

export const Trackdisplay = ( {title, song} : Props) => {
  const waveformRef = useRef(null);
  console.log(song)
  const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
    container: waveformRef,
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Ulaw_Lalapa_sakatusa.ogg',
    waveColor: "turquoise",
    height: 100,
    width: 1000,
    hideScrollbar: true,
    backend: 'MediaElement',
    normalize: true,
    autoplay: false,
    barGap: 1,
    barHeight: 20,
    barRadius: 20,
    barWidth: 5,
  })
  
  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause()
  }

  return (
    <div className='flex flex-col items-center'>
      <div ref={waveformRef} />
      <div >
        <button onClick={onPlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <h1>{title}</h1>
    </div>
  ); 
}
  