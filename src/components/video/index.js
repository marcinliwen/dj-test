import * as React from "react"
import Play from "../../assets/Play.svg"
import "./video.css"
import { StaticImage } from "gatsby-plugin-image";


const Video = ({ videoSrcURL, videoTitle, videoId, className, children}) =>{

    const [play, setPlay ] = React.useState(false)
    const handlePlayVideo = () =>{
        setPlay(true)
    }
return(
  <div className={`video ${play ? 'play': ''}`}>
      {children}
      
      
      <button className={`play-film ${className}`} onClick={handlePlayVideo}>
          <Play className="icon-gold"/><span >odtwórz film</span>
      </button>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      className="video-frame"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      type="text/html"
      width="640" 
      height="360"
    />
  </div>
)
}
export default Video