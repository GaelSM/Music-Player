import { useEffect, useRef, useState } from "react"
import playlist from "../../data.json"

/*const setMinutesFormat = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  let restSeconds = Math.floor(seconds % 60)

  minutes = minutes < 10 ? "0" + minutes : minutes
  restSeconds = restSeconds < 10 ? "0" + restSeconds : restSeconds

  return `${minutes}:${restSeconds}`
}*/

export default function usePlayer() {
  const [index, setIndex] = useState(0)
  const [track, setTrack] = useState(playlist[index])
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef()

  useEffect(() => {
    const loadData = () => setDuration(audioRef.current.duration)
    audioRef.current.addEventListener("loadedmetadata", loadData)
  }, [track])

  const { title, artist, cover } = track

  const setNewTrack = (newIndex) => {
    setIndex(newIndex)
    setTrack(playlist[newIndex])
    audioRef.current.src = playlist[newIndex].path
    audioRef.current.play()
  }

  const playPause = () => {
    if (audioRef.current.paused) audioRef.current.play()
    else audioRef.current.pause()
  }

  const previousTrack = () => {
    let newIndex = index === 0 ? playlist.length - 1 : index - 1
    setNewTrack(newIndex)
  }

  const nextTrack = () => {
    let newIndex = index === playlist.length - 1 ? 0 : index + 1
    setNewTrack(newIndex)
  }

  const handleOnChnage = (value) => {
    audioRef.current.currentTime = value
    setCurrentTime(value)
  }

  const updateProgressBar = (value) => setCurrentTime(value)

  return {
    title,
    artist,
    cover,
    audioRef,
    currentTime,
    duration,
    playPause,
    previousTrack,
    nextTrack,
    handleOnChnage,
    updateProgressBar
  }
}