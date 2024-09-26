import React from 'react'

function Sec() {
  return (
    <div className='md:px-[12%] px-[4%] py-[100px] bg-gray-200 flex justify-center'>
        <section className='grid lg:grid-cols-3 lg:gap-[5rem] gap-[2rem]'>
            <div className='w-[200px] h-[200px] border-[10px] border-blue-900 rounded-full flex justify-center items-center'>
                <h1 className='text-2xl font-bold text-red-700'>Expertise</h1>
            </div>
            <div className='w-[200px] h-[200px] border-[10px] border-blue-900 rounded-full flex justify-center items-center'>
                <h1 className='text-2xl font-bold text-red-700'>Trustworthy</h1>
            </div>
            <div className='w-[200px] h-[200px] border-[10px] border-blue-900 rounded-full flex justify-center items-center'>
                <h1 className='text-2xl font-bold text-red-700'>Global Reach</h1>
            </div>
        </section>
    </div>
  )
}

export default Sec