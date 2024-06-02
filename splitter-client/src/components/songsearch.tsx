"use client"
import React from 'react';
import { Trackdisplay } from '@/components/trackdisplay'
import { useState, FormEvent, ChangeEvent } from 'react';

export const Songsearch = ( { setSong } : any) => {
    const [input, setInput] = useState<string>('')
    // const [tubeLink, setTubeLink] = useState<string>('')
    const [embedString, setEmbedString] = useState<string>('KMU0tzLwhbE')

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInput(event.target.value)
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) : void => {
        event.preventDefault()
        // setTubeLink(input)
        const lastEight = input.slice(-11)
        setEmbedString(lastEight)
        setSong(input)
    }

    return (
        <div className='flex flex-col items-center rounded-lg shadow-lg border-opacity-80 p-5'>
            <div className='flex flex-row p-4'>
                <form onSubmit={handleSubmit} >
                    <input placeholder='Paste YouTube link' className='border border-green-300 p-4 rounded-lg shadow-lg' onChange={handleChange}></input>
                    <button type='submit'className='border border-green-300 p-4 rounded-lg shadow-lg m-1'>Go</button>
                </form>
            </div>
            <div className='p-4'>
                <iframe
                    className='rounded-lg'
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${embedString}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    ); 
}
  