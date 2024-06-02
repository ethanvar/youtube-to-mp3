"use client"

import React, { useState } from 'react'
import { Trackdisplay } from '@/components/trackdisplay'
import { Songsearch } from '@/components/songsearch'
import axios from 'axios'

export const Controlcomponent = () =>  {
    const [embedTitle, setEmbedTitle] = useState<string>('')
    const [embedSongUrl, setEmbedSongUrl] = useState<string>('')
    const [title, setTitle] = useState<string>('Track 1')
    const [currSong, setCurrSong] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/3/33/Ulaw_Lalapa_sakatusa.ogg')

    
    const handleSongSelect = (songUrl: string) => {
        setEmbedSongUrl(songUrl);
        setEmbedTitle("Reality Surf -- bladee")
    };
    

    const handleSubmit = async (): Promise<void> => {
        try {
            const resData = {
                song: embedSongUrl,
                title: embedTitle
            };
            const res = await axios.post("http://127.0.0.1:8800/api/data", resData).then((response) => {
                console.log(response.status, response.data);
                setCurrSong(response.data);
                setTitle("Reality Surf -- bladee")
            });
        } catch (error) {
            console.error('Error sending data', error);
            console.log('Error sending data');
        }
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
                <button type='submit' onClick={handleSubmit}> Send </button>
            </div>
            <div className='m-10 bg-gray-50 rounded-lg'>
                <Trackdisplay title={title} song={currSong} /> 
            </div>
        </div>
    );
}
