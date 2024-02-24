import React from 'react'

export const BackedBy = () => {
  return (
    <div className='w-full xl:w-[1200px] h-[166px] flex flex-col bg-[#24242480] '>
        <p className='font-primary text-lg font-normal text-brand-300 tracking-wide self-start '>Backed by</p>
        <div className='h-[142px] flex gap-10 xl:gap-20 items-center justify-center'>
            <img className='max-xl:w-40' src="/assets/alchemy.svg" alt="" />
            <img className='max-xl:w-40' src="/assets/mask.svg" alt="" />
            <img className='max-xl:w-40' src="/assets/foothill.svg" alt="" />
            <img className='max-xl:w-40' src="/assets/orangedao.svg" alt="" />
        </div>
    </div>
  )
}
