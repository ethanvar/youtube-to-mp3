"use client"

import React, { useState } from 'react'
import { Trackdisplay } from '@/components/trackdisplay'
import { Songsearch } from '@/components/songsearch'
import axios from 'axios'

export const Dashboard = () =>  {
    const [embedTitle, setEmbedTitle] = useState<string>('')
    const [embedSongUrl, setEmbedSongUrl] = useState<string>('')

    const [waveTitle, setWaveTitle] = useState<string>('Track 1')
    const [waveSong, setWaveSong] = useState<string>('https://upload.wikimedia.org/wikipedia/commons/3/33/Ulaw_Lalapa_sakatusa.ogg')

    const [numberOfTracks, setNumberOfTracks] = useState<number>(1)

    
    const handleSongSelect = (songUrl: string) => {
        setEmbedSongUrl(songUrl);
    };
    

    const handleSubmit = async() : Promise<void> => {
        try {
            const resData = {
                song: embedSongUrl,
                title: embedTitle
            };
            const res = await axios.post("http://127.0.0.1:8800/api/audio", resData).then((response) => {
                console.log(response.status, response.data);
                setWaveSong(response.data.url);
                setWaveTitle(response.data.name)
            });
        } catch (error) {
            console.error('Error sending data', error);
            console.log('Error sending data');
        }
    };

    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='m-10 bg-gray-50 rounded-lg rounded-lg '>
                <Songsearch setSong={handleSongSelect}/>
            </div>
            <div className='rounded-lg shadow-lg p-4 bg-gray-50 border-opacity-80'>
                <button type='submit' onClick={handleSubmit}> Send </button>
            </div>
            <div className='m-10 bg-gray-50 rounded-lg'>
                <Trackdisplay title={waveTitle} song={waveSong} /> 
            </div>
        </div>
    );
}
