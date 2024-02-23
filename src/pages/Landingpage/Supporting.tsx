import React from 'react'

export const Supporting = () => {
  return (
    <div className='w-[1200px] h-[166px] flex flex-col '>
        <p className='font-primary text-lg font-normal text-brand-300 tracking-wide self-start '>Proudly supporting</p>
        <div className='h-[142px] flex gap-10 items-center justify-center'>
            <img src="/assets/opensea.svg" alt="" />
            <img src="/assets/looksrare.svg" alt="" />
            <img src="/assets/ens.svg" alt="" />
            <img src="/assets/nftfi.svg" alt="" />
            <img src="/assets/teller.svg" alt="" />
        </div>
    </div>
  )
}
