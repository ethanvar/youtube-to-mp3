"use client"

import React, { useState } from 'react'
import { Trackdisplay } from '@/components/trackdisplay'
import { Songsearch } from '@/components/songsearch'

export const Controlcomponent = () =>  {
    const [embedTitle, setEmbedTitle] = useState<string>('')
    const [embedSong, setEmbedSong] = useState<string>('')
    const [title, setTitle] = useState<string>('Track 1')
    const [currSong, setCurrSong] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/3/33/Ulaw_Lalapa_sakatusa.ogg')

    
    const handleSongSelect = (songUrl: string) => {
        // setEmbedSong(songUrl);
        setEmbedTitle("Reality Surf -- bladee")
    };
    
    const sendSong = () => {
        // setCurrSong(embedSong);
        setTitle(embedTitle)
    }


    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='m-10 bg-gray-50 rounded-lg rounded-lg '>
                <Songsearch setSong={handleSongSelect}/>
            </div>
            <div className='rounded-lg shadow-lg p-4 bg-gray-50 border-opacity-80'>
                <button onClick={sendSong}> Send </button>
            </div>
            <div className='m-10 bg-gray-50 rounded-lg'>
                <Trackdisplay title={title} song={currSong} /> 
            </div>
        </div>
    );
}
