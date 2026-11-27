import { useRef, useState } from 'react'
import fight2 from './fight2.mp4'

const MediaLab = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [paused, setPaused] = useState(true)
  const [muted, setMuted] = useState(true)

  const handleTogglePlay = () => {
    if (paused) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }

  const handleToggleMute = () => {
    if (!videoRef.current) {
      return
    }
    videoRef.current.muted = !videoRef.current.muted
  }

  return (
    <div>
      <video
        ref={videoRef}
        src={fight2}
        muted
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        onEnded={() => setPaused(true)}
        onVolumeChange={() => setMuted(videoRef.current?.muted ?? false)}
      />
      <button onClick={handleTogglePlay}>{paused ? 'play' : 'pause'}</button>
      <button onClick={handleToggleMute}>
        {muted ? 'not muted' : 'muted'}
      </button>
    </div>
  )
}

export default MediaLab
