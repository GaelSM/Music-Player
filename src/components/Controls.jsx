import { Previous, Play, Pause, Next } from "@components/Icons";
import Button from "@components/Button";

export default function Controls({ isPaused, previousTrack, playPause, nextTrack }) {
  return (
    <section className="controls">
      <Button handleClick={previousTrack}>
        <Previous />
      </Button>
      <Button handleClick={playPause}>
        { isPaused ? <Play/> : <Pause /> }
      </Button>
      <Button handleClick={nextTrack}>
        <Next />
      </Button>
    </section>
  )
}