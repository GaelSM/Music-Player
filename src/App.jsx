import Controls from "@components/Controls";
import usePlayer from "@hooks/usePlayer"

const setMinutesFormat = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  let restSeconds = Math.floor(seconds % 60)

  minutes = minutes < 10 ? "0" + minutes : minutes
  restSeconds = restSeconds < 10 ? "0" + restSeconds : restSeconds

  return `${minutes}:${restSeconds}`
}

function Information({ title, artist }) {
  return (
    <section className="information">
      <div className="title">
        <h1> {title} </h1>
      </div>
      <div className="artist">
        <p> {artist} </p>
      </div>
    </section>
  )
}

function ProgressBar({ currentTime, duration, handleOnChnage }) {
  return (
    <section className="progressbar">
      <div className="times">
        <div className="current-time">
          <p> {setMinutesFormat(currentTime)} </p>
        </div>
        <div className="duration">
          <p> {setMinutesFormat(duration)} </p>
        </div>
      </div>
      <div className="bar">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => handleOnChnage(e.target.value)}
        />
      </div>
    </section>
  )
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
      <section className="cover" onClick={playPause}>
        <img src={cover} alt={`${title} cover`} />
      </section>
      <Information title={title} artist={artist} cover={cover} />
      <ProgressBar handleOnChnage={handleOnChnage} duration={duration} currentTime={currentTime} />
      <Controls
        previousTrack={previousTrack}
        playPause={playPause}
        nextTrack={nextTrack}
      />
      <audio
        src="./src/assets/Hollowpoint.mp3"
        ref={audioRef}
        onEnded={nextTrack}
        onTimeUpdate={(e) => updateProgressBar(e.target.currentTime)}
        preload="auto"
      />
    </div>
  )
}