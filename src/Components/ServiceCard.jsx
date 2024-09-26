import React from 'react'

function ServiceCard(prop) {
    const service = prop.service;
    return (
        <div className='w-full rounded-3xl bg-white border'>
            <img src={service.image} className='rounded-br-[6rem] rounded-t-3xl'/>
            <div className='text-center pt-5 pb-8'>
                <h2 className='text-xl font-bold'>{service.title}</h2>
                {/* <p>{service.description}</p> */}
            </div>
        </div>
    )
}

export default ServiceCard