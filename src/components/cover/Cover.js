import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';


const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1>Nayon Silva Gomes</h1>
        <p>Programador Js/React | Designer </p>
    </div>
  )
}

export default Cover