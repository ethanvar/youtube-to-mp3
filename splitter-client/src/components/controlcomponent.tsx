"use client"

import React, { useState } from 'react'
import { Trackdisplay } from '@/components/trackdisplay'
import { Songsearch } from '@/components/songsearch'

export const Controlcomponent = () =>  {
    const [title, setTitle] = useState<string>('Track 1')
    const [currSong, setCurrSong] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/3/33/Ulaw_Lalapa_sakatusa.ogg')
    
    const handleSongSelect = (songUrl: string) => {
        // setCurrSong(songUrl);
        // setTitle("Reality Surf -- bladee")
    };
 
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='m-10'>
                <Songsearch setSong={handleSongSelect}/>
            </div>
            <div className='m-10'>
                <Trackdisplay title={title} song={currSong} /> 
            </div>
        </div>
    );
}
