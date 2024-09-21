import React from 'react'

function ServiceCard(prop) {
  const service = prop.service;
  return (
    <div className='border rounded-md p-4 bg-gray-50 w-full'>
      <img src={service.icon} className='w-[45px]'/>
      <h2 className='text-xl font-semibold py-3'>{service.title}</h2>
      <p>{service.description}</p>
    </div>
  )
}

export default ServiceCard