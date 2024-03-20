import React from 'react'
import {motion} from 'framer-motion'

function Marque() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.01" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43] '>
       <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 
             initial={{x: "0"}} 
             animate={{x: "-100%"}} 
             transition={{ease:"linear",repeat:Infinity, duration: 5}}

         className='text-[15vw] tracking-tighter leading-none uppercase pr-2 pb-6 
        font-semibold'>we are ochi</motion.h1>

        {/* <motion.h1 
           initial={{ x: "0" }} 
           animate={{ x: "-100%" }} 
           transition={{ease:"linear",repeat:Infinity, duratuion: 5}}
        className='text-[15vw] tracking-tighter leading-none uppercase pr-2 pb-6 
        font-semibold'>we are ochi</motion.h1> */}
       </div>
    </div>
  )
}

export default Marque;