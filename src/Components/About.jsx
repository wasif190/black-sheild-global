import React from 'react';
import BG from '../assets/breadcrumb.jpg';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className='relative pb-[100px] -z-10'>
        <div className='relative top-[5.1rem] left-0 right-0 -z-10'>
            <img src={BG} className='h-[200px] w-full'/>
            <h1 className='py-2 sm:px-20 absolute z-20 top-[5rem] lg:left-[35%] left-[20%] lg:right-[35%] right-[20%] flex justify-center bg-red-600 text-white text-2xl uppercase font-bold'>
                About Us
            </h1>
        </div>
        <div className='mt-[100px] pt-5 md:px-[12%] px-[4%]'>
          <p className='text-lg leading-[30px] text-justify'>
            Black Shield Global LLP is a premier HR consultancy firm that focuses on providing 
            exceptional human resource recruitment and training solutions to clients worldwide. 
            With a strong presence in India, the firm leverages its extensive network and 
            expertise to offer customized services for businesses across various sectors. 
            Black Shield Global is dedicated to connecting organizations with top talent and enhancing 
            employee development through tailored training programs. The firm also provides strategic HR 
            consulting, helping companies implement best practices in talent management and performance evaluation. 
            Their client-centric approach and commitment to innovation set them apart as a trusted partner in the HR industry.
            <br/> <br/>
            Our journey of over a decade has allowed us to build an extensive network of top-tier 
            professionals and experts across industries. We pride ourselves on our innovative approach, 
            integrating the strengths of our Processes, People, and Practices (3P) to deliver consistently 
            excellent results. This synergy, backed by meticulous control measures, has enabled us to gain 
            the trust and loyalty of our clients in various regions worldwide.
            <br/><br/>
            At Black Shield Global, we believe in fostering collaboration and teamwork, creating an environment 
            where individual talent thrives within cohesive teams. We regularly conduct in-depth training 
            sessions and workshops, aimed at assessing and enhancing the skills of our workforce. 
            This commitment to continuous improvement empowers our professionals to deliver top-quality 
            services and solutions. By investing in our people, we ensure productivity, quality, 
            and satisfaction not only within our organization but also for the clients we serve.
          </p>
        </div>
    </div>
  )
}

export default About