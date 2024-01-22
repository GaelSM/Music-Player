import { useEffect, useRef, useState } from "react"
import playlist from "@root/data.json"

export default function usePlayer() {
  const [index, setIndex] = useState(0)
  const [track, setTrack] = useState(playlist[0])
  const [isPaused, setIsPaused] = useState(true)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef()

  useEffect(() => {
    audioRef.current.addEventListener("loadedmetadata", () => setDuration(audioRef.current.duration))
  }, [])

  const playPause = () => {
    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()
    setIsPaused(!isPaused)
  }

  const previousTrack = () => {
    let newIndex = index === 0 ? playlist.length - 1 : index - 1
    setIndex(newIndex)
    setTrack(playlist[newIndex])
    audioRef.current.src = playlist[newIndex].path
    audioRef.current.play()
  }

  const nextTrack = () => {
    let newIndex = index === playlist.length - 1 ? 0 : index + 1
    setIndex(newIndex)
    setTrack(playlist[newIndex])
    audioRef.current.src = playlist[newIndex].path
    audioRef.current.play()
  }

  return {
    track,
    audioRef,
    duration,
    isPaused,
    playPause,
    previousTrack,
    nextTrack,
  }
}