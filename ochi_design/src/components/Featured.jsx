import {  motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {

   const cards= [useAnimation(), useAnimation()]
   const handleHover=(index)=>{
    cards[index].start({y:"0"})
   }
   const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
   }

  return (
    <div className='w-full py-10 bg-zinc-800'>
        <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-12'>
            <h1 className='text-6xl font-["Neue_Montreal"] '>Featured projects </h1>
        </div>
        <div className='cards  w-full flex gap-10 mt-10 px-10'>
            <motion.div onHoverStart={()=> handleHover(0)}
            onHoverEnd={()=>handleHoverEnd(0) }
             className='cardcontainer relative w-1/2 h-[80vh] '>
            <h1 className='absolute flex overflow-hidden text-[#cdea68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-20 font-["Founders Grotesk"] 
            text-8xl leading-none'>{"FYDE".split("").map((item, index)=>(
                <motion.span 
                 initial={{y:"100%"}} 
                 animate={cards[0]} transition={{ease:[0.22,1,0.36,1], delay:index*0.05}}
                 className="inline-block">
                    {item}
                 </motion.span>
            ))}</h1>
                 <div className='w-full h-full rounded-2xl bg-cover bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")]'></div>
            </motion.div>
            <motion.div onHoverStart={()=> handleHover(1)}
            onHoverEnd={()=>handleHoverEnd(1) }
            className='cardcontainer relative w-1/2 h-[80vh]'>
            <h1 className='flex absolute overflow-hidden text-[#cdea68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-20 font-["Founders Grotesk"] 
            text-8xl leading-none'>{"VISE".split("").map((item, index)=>(
                <motion.span
                initial={{y:"100%"}} 
                animate={cards[1]} transition={{ease:[0.22,1,0.36,1], delay:index*0.05}}
                className="inline-block">
                   {item}
                </motion.span>
            ))}</h1>
                 <div className='w-full h-full rounded-2xl bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")]'></div>
            </motion.div>
        </div>
    </div>
  )
}

export default Featured