export async function Trackdisplay(){
    const res = await fetch('https://443b-70-30-58-172.ngrok-free.app/tracks', { next: { tags: ['collection'] } })
    const data = await res.json()

    const res2 = await fetch('https://443b-70-30-58-172.ngrok-free.app/audio/Reality-Surf.mp3')
    
    return (
      <div>
        <h1>{data.message}</h1>
        <audio controls>
            <source src={res2.url}>
            </source>
        </audio>
      </div>
    ); 
  }
  