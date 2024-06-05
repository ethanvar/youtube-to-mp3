"use client"
import React from 'react';
import { useRef, useState } from 'react';
import { useWavesurfer } from '@wavesurfer/react'
import axios from 'axios'


interface Props {
  "title" : string,
  "song" : string
}

export const Trackdisplay = ( {title, song} : Props) => {
  const waveformRef = useRef(null);
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

  const handleDownload = async () => {
    try {
      const res = await axios.get(song, {responseType: 'blob' }).then((response) => {
        console.log(response)
        console.log(response.status, response.data);

        const songBlob = new Blob([response.data]);
        const songURL = window.URL.createObjectURL(songBlob);
        const tempLink = document.createElement('a');

        tempLink.href = songURL;
        tempLink.setAttribute('download', song.slice(28, song.length));
        tempLink.click();
      });
    }
    catch (error) {
      console.error('Error sending data', error);
      console.log('Error sending data');
  }
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
        <button onClick={handleDownload}>
          Download
        </button>
        <h1>{title}</h1>
      </div>
    </div>
  ); 
}
  