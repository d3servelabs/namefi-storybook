import React from 'react'

export const PoweredBy = () => {
  return (
    <div className='w-full xl:w-[1200px] h-[166px] flex flex-col '>
        <p className='font-primary text-lg font-normal text-brand-300 tracking-wide self-start '>Powered by</p>
        <div className='h-[142px] flex gap-10 xl:gap-20 items-center justify-center'>
            <img src="/assets/eth-image.svg" alt="" />
            <img src="/assets/eth-image1.svg" alt="" />
            <img src="/assets/google-cloud.svg" alt="" />
            <img src="/assets/aws.svg" alt="" />
        </div>
    </div>
  )
}
