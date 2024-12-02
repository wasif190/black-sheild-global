import React from 'react';
import fiveStar from '../assets/5star.png';

function Sec2() {
  return (
    <div className='flex lg:flex-row flex-col bg-sky-50 md:px-[12%] px-[8%] items-center py-[30px] justify-between lg:gap-[5rem] gap-[2rem]'>
        <div className='md:w-[500px] w-[300px]'>
            <img src={fiveStar}/>
        </div>
        <div className='lg:w-[60%]'>
            <h1 className='uppercase text-3xl font-bold text-center pb-3'>welcome to <br/> black sheild global</h1>
            <p className='text-lg lg:text-start text-justify'>
                We leverage our extensive network and industry expertise 
                to deliver tailored services that meet the unique needs of businesses across various sectors. 
                Our professional team is passionate about connecting organizations with top talent and fostering 
                an environment of continuous learning and development.
            </p>
        </div>
    </div>
  )
}

export default Sec2