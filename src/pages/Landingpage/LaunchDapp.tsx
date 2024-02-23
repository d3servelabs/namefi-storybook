import React from 'react'

export const LaunchDapp = () => {
  return (
    <a href="#">
        <div className='min-w-[240px] h-[60px] bg-black-700 relative flex justify-center items-center duration:300 gap-3 rounded-full group'>
            <p className='font-primary font-medium tracking-wider text-lg text-white 
            before:absolute
            before:content-[url("/assets/small-arrow.svg")]
            before:w-2
            before:h-2
            before:duration-200
            before:right-8
            group-hover:before:right-7
            before:top:5'>Launch Dapp</p>
            {/* <img className=' absolute w-5 right-8 top-5.5 ' src="/assets/arrow-right1.svg" alt="arrow right" /> */}
        </div>
    </a>
  )
}
