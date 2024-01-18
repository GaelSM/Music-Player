import { PlayFill, StopPlayFill, StopPlayFillReverse } from "@components/Icons";

export default function Controls() {
  return (
    <section className="controls">
      <PlayFill />
      <StopPlayFillReverse />
      <StopPlayFill />
    </section>
  )
}