import { useEffect, useRef, useState } from "react"
import playlist from "../../data.json"

export default function usePlayer() {
  const [index, setIndex] = useState(0)
  const [track, setTrack] = useState(playlist[index])
  const [currentTime, setCurrentTime] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
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
    setIsPaused(() => {
      if (audioRef.current.paused) {
        audioRef.current.play()
        return false
      }
      else {
        audioRef.current.pause()
        return true
      }
    })
  }

  const previousTrack = () => {
    let newIndex = index === 0 ? playlist.length - 1 : index - 1
    setNewTrack(newIndex)
  }

  const nextTrack = () => {
    let newIndex = index === playlist.length - 1 ? 0 : index + 1
    setNewTrack(newIndex)
  }

  const updateCurrentTime = (value) => {
    audioRef.current.currentTime = value
    setCurrentTime(value)
  }

  const updateProgressBar = () => setCurrentTime(audioRef.current.currentTime)


  return {
    title,
    artist,
    cover,
    audioRef,
    currentTime,
    duration,
    isPaused,
    playPause,
    previousTrack,
    nextTrack,
    updateCurrentTime,
    updateProgressBar
  }
}