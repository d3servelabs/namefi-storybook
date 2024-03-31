import React from 'react'

interface CartProps {
    cartItems: number
}
export const Cart = ({cartItems = 0}: CartProps) => {
  return (
    <div className='relative w-16 h-14 flex justify-center items-center '>
        {cartItems > 0 && <span className='block absolute top-0 right-0 min-w-7 h-7 rounded-full bg-[#ffffff0d] text-[#48e59b] text-lg font-semibold text-center '>{cartItems}</span>}
        <img className='w-[40px]' src="/assets/Cart.svg" alt="Demo Icon " role='img' />
    </div>
  )
}
