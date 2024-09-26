import React from 'react';
import Video from '../assets/bsg.mp4';

function Home() {
  return (
    <div id='home' className='mt-[6rem] bg-blue-950'>
      <video src={Video} autoPlay loop muted></video>
    </div>
  )
}

export default Home;