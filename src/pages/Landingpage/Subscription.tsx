import React from 'react'

export type SubscriptionProps = {

}

export const Subscription = ({}) => {
  return (
    <form className='relative block w-[575px] h-[56px] rounded-full font-third peer '>
        <label className='relative w-full group'>
            <input 
            className='w-full h-full border-[1.5px] text-black-500 text-lg font-medium tracking-wider border-primary-500 rounded-full outline-0 bg-black-900 peer px-8' type="text" placeholder='' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-focus:hidden '>
                <span className='relative font-normal tracking-widest text-lg text-white 
                before:absolute
                before:duration-200
                before:content-[url("/assets/arrowright.svg")]
                before:w-4
                before:h-4
                before:-right-6
                before:-top-[0.6px]F
                group-hover:before:-right-8
                
                 '>Join Waitlist</span>
            </div>
        </label>
    </form>
  )
}

export const SubscriptionFooter = () => {
  return (
    <form className='relative block w-[575px] h-[56px] rounded-full peer font-third '>
        <label className='relative w-full group'>
            <input 
              className='w-full h-full border text-black-400 text-lg font-medium tracking-wider border-black-1000 focus:border-primary-500 rounded-full outline-0 bg-white peer px-8 placeholder:italic focus:text-black-500 focus:bg-black-400' 
              type="text"  placeholder='Enter your email' />
            <div className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 peer-focus:hidden '>
                <span className='relative font-normal tracking-widest text-lg text-black-1000 
                before:absolute
                before:duration-200
                before:content-[url("/assets/reset.svg")]
                before:w-4
                before:h-4
                before:-right-6
                before:-top-[0.6px]
                group-hover:before:-right-8
                
                 '>Join Waitlist</span>
            </div>
        </label>
    </form>
  )
}
