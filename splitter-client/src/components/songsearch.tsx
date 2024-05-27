"use client"
import React from 'react';
import { useState, FormEvent, ChangeEvent } from 'react';

export const Songsearch = () => {
    const [input, setInput] = useState<string>('')
    const [tubeLink, setTubeLink] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInput(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        const lastEight = input.slice(-11);
        setTubeLink(lastEight)
    }

    return ( 
        <div className='flex flex-col items-center rounded-lg shadow-lg p-5'>
            <div className='flex flex-row p-4'>
                <form onSubmit={handleSubmit} >
                    <input placeholder='Insert YouTube link' className='border border-green-300 p-4 rounded-lg shadow-lg' onChange={handleChange}></input>
                    <button type='submit'className='border border-green-300 p-4 rounded-lg shadow-lg m-1'>Go</button>
                </form>
            </div>
            <div className='p-4'>
                <iframe
                    className='rounded-lg'
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${tubeLink}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    ); 
}
  