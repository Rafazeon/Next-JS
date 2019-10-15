import React from 'react';
import { Player } from 'video-react';
import Header from './header'

const Video = "http://www.webbrothers.com.br/videosYT/video.mp4"

export function Menu(hidden) {
  return(
    <Player className="video" autoPlay>
      <source src={Video} />
      <Header hidden />
    </Player> 
  )
}
