import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"]  p-20 pr-40 text-[4vw] leading-[4.5vw] tracking-tight'>
            Ochi is a strategic partner for fast-growing tech businesses that 
            need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] p-20 mt-20 pt-7 border-[#acbb75]'>
            <div className='w-1/2 font-["Neue_Montreal"] '>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='mt-10 px-8 py-4 bg-zinc-900 text-white rounded-full flex gap-10 items-center'>
                    READ MORE
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-cover bg-center' >

            </div>
        </div>
    </div>
  )
}

export default About