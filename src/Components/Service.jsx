import React from 'react';
import data from '../data/service.json'
import ServiceCard from './ServiceCard';

function Service() {
  return (
    <div id='service' className='md:pt-[100px] -pt-5 px-[4%] lg:px-[10%] overflow-x-hidden'>
        <h1 className='px-[4%] lg:px-[10%] text-3xl text-center font-semibold'>Our Services</h1>
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2.5rem] mt-10'>
            {
              data.map((service) => <ServiceCard key={service.id} service={service}/>)
            }
        </section>
    </div>
  )
}

export default Service