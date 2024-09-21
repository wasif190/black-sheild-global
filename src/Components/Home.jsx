import React from 'react';
import Navbar from './Navbar';
import Bg2 from '../assets/homeBg2.png';
import homeImg from '../assets/male-worker.png';

function Home() {
  return (
    <div id='home' className='overflow-x-hidden'>
        <div>
            <Navbar/>
        </div>
        <div className='h-screen flex items-center px-[4%] lg:px-[10%] relative'>
            <div className='xl:w-[50%] md:w-[60%] md:-mt-[2rem] -mt-[8rem]'>
                <h1 className='sm:text-4xl text-3xl font-bold'>Your Trusted Partner in Recruitment and HR Solutions</h1>
                <p className='mt-2 z-10'>
                    We provide customized recruitment and HR services to help businesses 
                    find the right talent and thrive globally.
                </p>
            </div>
            <div>
                <div className='xl:w-[600px] lg:w-[520px] md:w-[440px] w-[400px] aspect-square rounded-[5rem] bg-gradient-to-b rotate-45
                 from-white via-blue-300 to-purple-500 absolute lg:-top-[3rem] md:-top-[2rem] top-[4rem] xl:-right-[5rem] lg:-right-[12rem] md:-right-[14rem] -right-[23rem] -z-10'
                ></div>
                <img src={homeImg} className='absolute md:opacity-100 opacity-0 rounded-[5rem] aspect-square xl:w-[340px] lg:w-[290px] md:w-[250px] w-[220px] z-40 border-[5px] md:top-[14rem] lg:right-[9rem] md:right-[3rem]'/>
                <img src={Bg2} className='absolute xl:w-[300px] w-[240px] -left-[12rem] rotate-45 bottom-[5rem] -z-10'/>
            </div>
        </div>
    </div>
  )
}

export default Home