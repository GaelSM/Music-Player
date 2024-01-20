import Controls from "@components/Controls";
import usePlayer from "@hooks/usePlayer"

const setMinutesFormat = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  let restSeconds = Math.floor(seconds % 60)

  minutes = minutes < 10 ? "0" + minutes : minutes
  restSeconds = restSeconds < 10 ? "0" + restSeconds : restSeconds

  return `${minutes}:${restSeconds}`
}

export default function App() {

  const { 
    title, 
    artist, 
    cover,
    currentTime,
    duration,
    audioRef, 
    playPause, 
    previousTrack, 
    nextTrack,
    handleOnChnage,
    updateProgressBar
  } = usePlayer()

  return (
    <div className="app">
      <img src={cover} alt="" />
      <h1> {title} </h1>
      <p> {artist} </p>
      <p> {setMinutesFormat(currentTime)} </p>
      <input 
        type="range" 
        min="0" 
        max={duration}
        value={currentTime}
        onChange={(e) => handleOnChnage(e.target.value)}/>
      <p> {setMinutesFormat(duration)} </p>
      <audio 
        src="./src/assets/Hollowpoint.mp3" 
        ref={audioRef} 
        onEnded={nextTrack}
        onTimeUpdate={(e) => updateProgressBar(e.target.currentTime)}
        preload="auto"
      />
      <Controls 
        previousTrack={previousTrack} 
        playPause={playPause} 
        nextTrack={nextTrack}
      />
    </div>
  )
}