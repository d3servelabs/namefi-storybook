import React from 'react'

export const LaunchDapp = () => {
  return (
    <a href="#">
        <div className='min-w-[240px] h-[60px] bg-black-700 relative flex justify-center items-center duration:300 gap-3 rounded-full hover:right-0'>
            <p className='font-primary font-medium tracking-wider text-lg text-white '>Launch Dapp</p>
            <img className=' absolute w-5 right-8 top-5.5 ' src="/assets/arrow-right1.svg" alt="arrow right" />
        </div>
    </a>
  )
}
