import React, { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js'
import 'videojs-youtube'
import 'video.js/dist/video-js.css'

interface VideoPlayeriProps {
    url: string
  }

const VideoPlayer = ({url}: VideoPlayeriProps) => {
  const videoJsOptions: VideoJsPlayerOptions = useMemo(() => {
    return {
      autoplay: true,
      controls: true,
      aspectRatio: '16:9',
      fluid: true,
      preload: 'auto',
      html5: {
        vhs: {
          smoothQualityChange: true,
          overrideNative: true,
        },
      },
      techOrder: ["youtube"],
      sources: [{
          type: "video/youtube",
          src: url
      }]
    }
  }, [])
  const [player, setPlayer] = useState<VideoJsPlayer>()
  const videoJSRef = useRef(null)

  useEffect(() => {
    setPlayer(videojs(videoJSRef.current, videoJsOptions))

    return () => {
      if (player) {
        player.dispose()
      }
    }
  }, [])

  return (
    <div data-vjs-player style={{ height: '100%' }}>
      <video
        ref={videoJSRef}
        id="videojs"
        className="video-js vjs-big-play-centered vjs-default-skin"
      />
    </div>
  )
}

export default VideoPlayer
