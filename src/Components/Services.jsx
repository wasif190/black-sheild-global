import React from 'react';
import services from '../data/services.json';
import ServiceCard from './ServiceCard';
import BG from '../assets/gallery-bg.jpg';

function Services() {
  return (
    <div id='service' className='md:px-[12%] px-[9%] pt-[100px] pb-[200px] py-[50px] bg-gray-50 relative overflow-x-hidden -z-10'>
        <h1 className='text-3xl font-bold'>Our Service</h1>
        <section className='mt-10 grid lg:grid-cols-3 sm:grid-cols-2 gap-[3rem]'>
            {
              services.map(service => <ServiceCard key={service.id} service = {service}/>)
            }
        </section>
        <div className='w-screen absolute bottom-0 left-0 -z-20'>
          <img src={BG}/>
        </div>
    </div>
  )
}

export default Services