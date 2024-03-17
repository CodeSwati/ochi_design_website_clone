import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return(
      <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
          {["We Create","EYE-OPENING","PRESENTATIONS"].map((item,index)=>
             <div className='masker'>
                <div className='w-fit flex items-end overflow-hidden'>
                  {index===1 && (
                  <div className='mr-[1.2vw] w-[9vw] h-[5vw] rounded-md bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center'></div>
                  )}
                  <h1 className='font-["Founders Grotesk"] uppercase text-[7vw] h-full font-bold  
                  leading-[6vw] tracking-tighter'>{item}</h1>
                </div>
            </div>
          )}
            
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-24 flex justify-between item-center py-5 px-20'>
            {["For public and private companies","Fom the first pitch to IPO"].map((item,index)=>
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            )}

            <div className='start flex items-center gap-3'>
                  <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-sm uppercase
                   rounded-full'>start the project</div>
                   <div className='w-9 h-9 flex items-center justify-center rotate-45 rounded-full border-[1px] border-zinc-500'>
                    <FaArrowUpLong />
                    </div>
            </div>
        </div>
      </div>
    );
}

export default LandingPage;