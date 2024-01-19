import { Previous, Play, Next } from "@components/Icons";
import Button from "./Button";

export default function Controls() {
  return (
    <section className="controls">
      <Button>
        <Previous />
      </Button>
      <Button>
        <Play/>
      </Button>
      <Button>
        <Next />
      </Button>
    </section>
  )
}