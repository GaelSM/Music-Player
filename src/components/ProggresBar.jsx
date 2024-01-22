import { useEffect, useState } from "react"

const formatTime = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  let restSeconds = Math.floor(seconds % 60)

  return `${minutes.toString().padStart(2, "0")}:${restSeconds.toString().padStart(2, "0")}`
}

export default function ProgressBar({ audio, duration }) {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleUpdate)
    return () => {
      audio.current.removeEventListener("timeupdate", handleUpdate)
    }
  }, [])

  const handleUpdate = () => setCurrentTime(audio.current.currentTime)

  return (
    <section className="progressbar">
      <div className="times">
        <div className="current-time">
          <p>  {formatTime(currentTime)} </p>
        </div>
        <div className="duration">
          <p>  {formatTime(duration)} </p>
        </div>
      </div>
      <div className="bar">
        <input
          type="range"
          min="0"
          max={ duration }
          value={currentTime}
          onChange={(e) => {
            audio.current.currentTime = e.target.value
            setCurrentTime(e.target.value)
          }}
        />
      </div>
    </section>
  )
}