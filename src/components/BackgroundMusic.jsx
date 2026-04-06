import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './BackgroundMusic.css'

const BackgroundMusic = () => {
  const audioRef = useRef(null)
  const [isLocalPlaying, setIsLocalPlaying] = useState(false)
  const [hasLocalError, setHasLocalError] = useState(false)
  const [isYouTubeOpen, setIsYouTubeOpen] = useState(false)

  const youtubeEmbedSrc = 'https://www.youtube-nocookie.com/embed/aXb5gcZKGAI?autoplay=1&loop=1&playlist=aXb5gcZKGAI&rel=0'

  const toggleLocalMusic = async () => {
    if (!audioRef.current || hasLocalError) {
      return
    }

    if (isYouTubeOpen) {
      setIsYouTubeOpen(false)
    }

    if (isLocalPlaying) {
      audioRef.current.pause()
      setIsLocalPlaying(false)
      return
    }

    try {
      await audioRef.current.play()
      setIsLocalPlaying(true)
    } catch {
      setIsLocalPlaying(false)
    }
  }

  const toggleYouTubeMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsLocalPlaying(false)
    }

    setIsYouTubeOpen((prev) => !prev)
  }

  const handleEnded = () => {
    setIsLocalPlaying(false)
  }

  const handleError = () => {
    setHasLocalError(true)
    setIsLocalPlaying(false)
  }

  return (
    <>
      <motion.div
        className="music-control"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <audio
          ref={audioRef}
          src="/audio/nuvole-bianche.mp3"
          loop
          preload="none"
          onEnded={handleEnded}
          onError={handleError}
        />

        <button
          type="button"
          className={`music-button ${isYouTubeOpen ? 'playing' : ''}`}
          onClick={toggleYouTubeMusic}
          aria-label={isYouTubeOpen ? 'Stop YouTube music' : 'Play YouTube music'}
          title="Play Nuvole Bianche from YouTube"
        >
          {isYouTubeOpen ? 'Stop YouTube' : 'Play YouTube'}
        </button>

        {!hasLocalError && (
          <button
            type="button"
            className={`music-button ${isLocalPlaying ? 'playing' : ''}`}
            onClick={toggleLocalMusic}
            aria-label={isLocalPlaying ? 'Pause local background music' : 'Play local background music'}
            title="Toggle local MP3 playback"
          >
            {isLocalPlaying ? 'Pause MP3' : 'Play MP3'}
          </button>
        )}
      </motion.div>

      {isYouTubeOpen && (
        <motion.div
          className="youtube-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="youtube-frame-wrap">
            <iframe
              src={youtubeEmbedSrc}
              title="Nuvole Bianche YouTube player"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </>
  )
}

export default BackgroundMusic
