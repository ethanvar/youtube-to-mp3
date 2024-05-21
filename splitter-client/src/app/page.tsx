"use client";

import React, {useState, useEffect} from 'react'

function Trackdisplay(props: String){
  
  return (
    <div>
      {/* <audio controls src={props.trackName}/> */}
    </div>
  ); 
}


async function getData() {
  const res = await fetch('/audio/Reality-Surf.mp3')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
function Searchbar(){
  return (
    <div>
      <input type='text'></input>
      <button ></button>
    </div>
  )
}


export default async function Home() {
  const [audioUrl, setAudioUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{}])


  // useEffect(() => {
  //   const fetchData("/audio/Reality-Surf.mp3").then(
  //       data => {
  //         setAudioUrl(data)
  //         console.log("Use Effect = " + data.url) 
  //         setIsLoading(false)
  //       } 
  //   )
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //     setIsLoading(true);
  //   });
  // }, []);


  const urlData = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Searchbar/>
    </main>
  );
}
