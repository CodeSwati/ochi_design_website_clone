import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-800 flex items-center gap-5 px-10'>
        <div className='cardcontainer w-1/2 h-[60vh] '>
            <div className='card relative w-full h-full rounded-2xl flex items-center justify-center bg-[#004d43]'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='logo'/>
            <button className='absolute text-[1vw] px-3 py-[1px] left-7 bottom-7 border-[1px] rounded-full tracking-tighter'>
              &copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[60vh]'>
            <div className='card relative w-1/2 h-full rounded-2xl bg-[#212121] flex items-center justify-center'>
              <h1 className='text-5xl font-semibold'>Clutch</h1>
              <button className='absolute text-[1vw] px-3 py-[1px] left-7 bottom-7 border-[1px] rounded-full tracking-tighter'>
                RATING 5.0 ON CLUTCH
              </button>
            </div>
            <div className='card relative w-1/2 h-full rounded-2xl bg-[#212121] flex items-center justify-center'>
              <img className='w-24' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
              <button className='absolute text-[1vw] px-3 py-[1px] left-7 bottom-7 border-[1px] rounded-full tracking-tighter'>
                BUSINESS BOOTCAMP ALUMINI</button>
            </div>
        </div>
        
    </div>
  )
}

export default Cards