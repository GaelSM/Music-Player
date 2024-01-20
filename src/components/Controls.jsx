import { Previous, Play, Next } from "@components/Icons";
import Button from "./Button";

export default function Controls({ previousTrack, playPause, nextTrack }) {
  return (
    <section className="controls">
      <Button handleClick={previousTrack}>
        <Previous />
      </Button>
      <Button handleClick={playPause}>
        <Play/>
      </Button>
      <Button handleClick={nextTrack}>
        <Next />
      </Button>
    </section>
  )
}