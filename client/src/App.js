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
          console.log(data)
        }
    )
  }, []);

  return (
    <div>
      {/* (typeof data.Tracks === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <TrackDisplay trackName={audioUrl}/>
      ) */}
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
      {console.log(audioUrl)}
      <audio controls src={audioUrl.url} />
    </div>
  )
}

export default App