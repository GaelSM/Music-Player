import Controls from "@components/Controls";
import Information from "@components/Information";
import ProgressBar from "@components/ProggresBar";
import usePlayer from "@hooks/usePlayer"
import "@source/App.css"

export default function App() {

  const {
    track,
    duration,
    audioRef,
    playPause,
    previousTrack,
    nextTrack,
    isPaused
  } = usePlayer()

  return (
    <div className="app">
      <div className="left">
        <section className="cover" onClick={playPause}>
          <img src={track.cover} alt={`${track.title} cover`} />
        </section>
      </div>
      <div className="right">
        <Information 
          title={track.title} 
          artist={track.artist} 
          cover={track.cover}
        />
        <ProgressBar 
          duration={duration} 
          audio={audioRef}
        />
        <Controls
          previousTrack={previousTrack}
          playPause={playPause}
          nextTrack={nextTrack}
          isPaused={isPaused}
        />
      </div>
      <audio ref={audioRef} onEnded={nextTrack}>
        <source  src="https://raw.githubusercontent.com/GaelSM/Music-Player/main/src/assets/Hollowpoint.mp3"/>
      </audio>
    </div>
  )
}
