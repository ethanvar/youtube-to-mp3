"use client";

import React, {useState, useEffect} from 'react'

function Trackdisplay(props: String){
  return (
    <div>
      {/* <audio controls src={props.trackName}/> */}
    </div>
  ); 
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

  const res = await fetch('https://api.example.com/...')
  const urlData = await res.json()


  return (
    <div>
      {
      isLoading ? ( 
        <p>Loading...</p>
        ) : (
          // <Trackdisplay trackName={urlData.url}/>
      )
      }
      <Searchbar/>
    </div>
  )
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    </main>
  );
}
