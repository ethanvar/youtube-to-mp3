import React, {useState, useEffect} from 'react'

function Trackdisplay(props){
  return (
    <div>
      <audio controls src={props.trackName}/>
    </div>
  ); 
}

function App() {
  const [audioUrl, setAudioUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{}])


  useEffect(() => {
    fetch("/audio/Reality-Surf.mp3").then(
        data => {
          setAudioUrl(data)
          console.log("Use Effect = " + data.url) 
          setIsLoading(false)
        } 
    )
    .catch(error => {
      console.error('Error fetching data:', error);
      setIsLoading(true);
    });
  }, []);

  return (
    <div>
      {
      isLoading ? ( 
        <p>Loading...</p>
        ) : (
          <Trackdisplay trackName={audioUrl.url}/>
      )
      }
    </div>
  )
}

export default App