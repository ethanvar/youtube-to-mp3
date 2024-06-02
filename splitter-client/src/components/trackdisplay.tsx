"use client"
import React from 'react';
import axios from 'axios'
import { useRef, useState } from 'react';
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
    url: song,
    waveColor: "turquoise",
    height: 100,
    width: 500,
    hideScrollbar: true,
    backend: 'MediaElement',
    normalize: true,
    autoplay: false,
    barGap: 1,
    barHeight: 20,
    barRadius: 20,
    barWidth: 1,
  })
  
  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause()
  }

  return (
    <div className='flex rounded-lg shadow-lg '>
      <div className='flex flex-col m-10 items-center'>
        <div ref={waveformRef} />
        <div >
          <button onClick={onPlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  ); 
}
  