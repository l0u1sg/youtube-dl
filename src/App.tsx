import { useState } from 'react'
import './App.css'

function App() {
  var youtubeToDownload
  console.log(youtubeToDownload)
  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Downloader</h1>
        <p>Paste your YouTube video URL here 👇</p>
        <form>
          <input type='url' pattern='https?://youtube.com/.+' id='url'required placeholder='https://youtube.com/AZERTY'/>
          <br></br>
          <br></br>
          <button onClick={() => {
          youtubeToDownload = document.getElementById('url') as HTMLInputElement
          console.log(youtubeToDownload.value)
          ytdl(youtubeToDownload.value).pipe(fs.createWriteStream('video.mp4'))
        } } type="submit">Download</button>
        </form>
        
          
      </header>
    </div>
  )
}

export default App
