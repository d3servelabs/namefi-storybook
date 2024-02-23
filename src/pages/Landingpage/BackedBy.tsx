import React from 'react'

export const BackedBy = () => {
  return (
    <div className='w-[1200px] h-[166px] flex flex-col bg-[#24242480] '>
        <p className='font-primary text-lg font-normal text-brand-300 tracking-wide self-start '>Proudly supporting</p>
        <div className='h-[142px] flex gap-20 items-center justify-center'>
            <img src="/assets/alchemy.svg" alt="" />
            <img src="/assets/mask.svg" alt="" />
            <img src="/assets/foothill.svg" alt="" />
            <img src="/assets/orangedao.svg" alt="" />
        </div>
    </div>
  )
}
