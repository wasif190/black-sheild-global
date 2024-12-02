import React from 'react';
import Video from '../assets/video/bsg.mp4';

function Home() {
  return (
    <div id="home" className="flex items-center justify-center w-screen sm:mt-0 mt-16">
      <video 
        src={Video} 
        autoPlay 
        loop 
        muted 
        className="w-full"
      ></video>
    </div>
  );
}

export default Home;
