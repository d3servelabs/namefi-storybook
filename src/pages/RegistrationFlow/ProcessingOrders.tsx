import React from 'react'

export const ProcessingOrders = () => {
  return (
    <div className='relative flex flex-col justify-center items-center gap-9 '>
        <div className='relative flex gap-5 items-center'>
            <img src="/assets/cart1.svg" alt="cart image" />
            <div className='relative flex flex-col gap-3 tracking-wider bg-red-400 '>
                <p className='font-semibold text-white text-xl'>Processing your order </p>
                <p className='font-normal text-brand-300 text-sm'> Please wait a sec...</p>
            </div>
        </div>
        <div className='relative w-[120px] h-[120px]  '>
            <img className='animate-spin duration-500' src="/assets/loader.svg" alt="loader" />
        </div>
    </div>
  )
}
