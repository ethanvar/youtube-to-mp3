"use client"
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import WaveSurfer from "wavesurfer.js";
import Regions from 'wavesurfer.js/dist/plugins/regions.esm.js'

interface Props {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  song: string;
}

export const Trackdisplay = ( {title, song}: Props) => {

    const waveformRef = React.useRef<HTMLDivElement | null>(null);
    const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    useEffect(() => {
      if (waveformRef.current) {
        console.log("HELLO")
        const ws = WaveSurfer.create({
          container: waveformRef.current,
          waveColor: "#34374B",
          progressColor: "#F90",
          url: song,
          dragToSeek: true,
          height: 60,
          barHeight: 20,
          barRadius: 20,
          barWidth: 5,
        });
  
        ws.on("finish", () => {
          console.log("Song finished");
          setIsPlaying(false);
        });
  
        ws.on("ready", () => {
          console.log("Waveform is ready");
        });
  
        setWavesurfer(ws);
  
        return () => {
          ws.destroy();
        };
      }
    }, []);

    const handleStop = () => {
      if (wavesurfer) {
        wavesurfer.stop();
        setIsPlaying(false);
      }
    };
  
    const handlePlayPause = () => {
      if (wavesurfer) {
        wavesurfer.playPause();
        setIsPlaying(!isPlaying);
      }
    };
  
    const handleSkipForward = () => {
      if (wavesurfer) {
        wavesurfer.skip(2);
      }
    };
  
    const handleSkipBack = () => {
      if (wavesurfer) {
        wavesurfer.skip(-2);
      }
    };
  

    return (
      <div className="flex flex-col items-center justify-center">
        <div ref={waveformRef} />
        <div className='flex flex-col items-center'>
          <button onClick={handleSkipBack}>
            Skip
          </button>
          <button onClick={handlePlayPause}>
            Pause
          </button>
          <button onClick={handleStop}>
            Stop
          </button>
          <button onClick={handleSkipForward}>
            Skip Forward
          </button>
        </div>
        <h1>{title}</h1>
        <audio controls> 
            <source src={song}>
            </source>
        </audio>
      </div>
    ); 
  }
  