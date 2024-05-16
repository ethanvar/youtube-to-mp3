import React, {useState, useEffect} from 'react'

function TrackDisplay(props){
  return (
    <div>
      {props.trackName}
    </div>
  ); 
}

function App() {
  const [audioUrl, setAudioUrl] = useState(null)
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/tracks").then(
      res => res.json()
    ).then(
        data => {
          setData(data)
          console.log(data)
        }
    )
  }, [])

  useEffect(() => {
    fetch("/audio/Reality-Surf.mp3").then(
      res => res.json()
    ).then(
        data => {
          setAudioUrl(data)
          console.log(data)
        }
    )
  })

  return (
    <div>
      <TrackDisplay trackName='Egobaby -- bladee'/>
      <ul>
        {(typeof data.Tracks === 'undefined') ? (
          <p>Loading...</p>
        ) : (
        data.Tracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))
        )
        }
      </ul>
    </div>
  )
}

export default App