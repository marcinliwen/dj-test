import React from "react"
import './social.css'
import Spotify from '../../assets/spotify.svg';
import Fb from '../../assets/Fb.svg';
import Insta from '../../assets/Insta.svg';

export default function Social() {
  return (
      <div className="social">
          <a> <Spotify /></a>
          <a> <Fb /> </a>
          <a> <Insta /> </a>
      </div>
  )
}