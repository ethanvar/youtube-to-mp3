import React, {useState, useEffect} from 'react'

async function TrackDisplay(props){
  return (
    <div>
      {console.log(props)}
      {/* <audio src={props.trackName}/> */}
    </div>
  ); 
}

function App() {
  const [audioUrl, setAudioUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("/tracks").then(
  //     res => res.json()
  //   ).then(
  //       data => {
  //         setData(data)
  //         console.log(data)
  //       }
  //   )
  // }, [])

  useEffect(() => {
    fetch("/audio/Reality-Surf.mp3").then(
        data => {
          setAudioUrl(data)
          console.log("Use Effect = " + data)
          setIsLoading(false)
        }
    )
  }, []);

  return (
    <div>
      {/* {isLoading ?  (
        <p>Loading...</p>
      ) : (
        <TrackDisplay trackName={audioUrl.url}/>)
      } */}
      {/* <ul>
        {
        // (typeof data.Tracks === 'undefined') ? (
        //   <p>Loading...</p>
        // ) : (
        // data.Tracks.map((track, index) => (
        //   <li key={index}>{track}</li>
        // ))
        // // )
        // } */}
      {/* </ul> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (<audio controls src={audioUrl.url} />)}
      {/* <audio controls src={audioUrl.url} /> */}
    </div>
  )
}

export default App