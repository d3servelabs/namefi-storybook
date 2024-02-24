import React from 'react'

export const Supporting = () => {
  return (
    <div className='w-full xl:w-[1200px] h-[166px] flex flex-col'>
        <p className='font-primary text-lg font-normal text-brand-300 tracking-wide self-start '>Proudly supporting</p>
        <div className='h-[142px] flex gap-4 xl:gap-10 items-center justify-center'>
            <img className='max-xl:w-30' src="/assets/opensea.svg" alt="" />
            <img className='max-xl:w-40' src="/assets/looksrare.svg" alt="" />
            <img className='max-xl:w-40' src="/assets/ens.svg" alt="" />
            <img className='max-xl:w-30' src="/assets/nftfi.svg" alt="" />
            <img className='max-xl:w-40' src="/assets/teller.svg" alt="" />
        </div>
    </div>
  )
}
