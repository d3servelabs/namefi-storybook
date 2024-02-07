import React from 'react'
import { Buttons } from '../components/Buttons'
export const Flow1 = () => {
  return (
    <div className='relative w-[544px] h-[350px] bg-[#333] flex flex-col justify-between  '>
        <div className='w-full h-[119px] flex flex-col justify-between '>
            <a href='#' className='block h-[29px] flex gap-[6px] '>
                <img className='w-[21px]' src="/assets/arrow-left.svg" alt="arrow-left image" role='img' />
                <p className=' tracking-[0.05em] text-[16px] font-normal text-[#c6eedb]'>Back</p>
            </a>
            <div className='h-[72px] '>
                <img src="/assets/flow.svg" alt="flow demo image" role='img' />
            </div>
        </div>
        <div className='w-full h-[200px] flex flex-col justify-between '>
            <div className='w-full h-[59px] tracking-[0.05em] '>
                <p className='font-semibold text-[21px] text-white '>☕ You’re all set for now.</p> 
                <p className='font-normal text-sm text-[#c6eedb] '>You can now close off and check back later.</p>
            </div>
            <div>
                <Buttons label='Import another one' color='white' />
            </div>
        </div>
    </div>
  )
}
