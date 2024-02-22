import React from 'react'

export const Subscription = () => {
  return (
    <form className='relative block w-[575px] h-[56px] rounded-full bg-red-400 peer '>
        <label className='relative w-full'>
            <input 
            className='w-full h-full border-[1.5px] text-black-500 text-lg font-medium tracking-wider border-primary-500 rounded-full outline-0 bg-black-900 ' type="text" placeholder='' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '>
                <span className='font-normal tracking-widest text-lg text-white '>Join Waitlist</span>
            </div>
        </label>
    </form>
  )
}
