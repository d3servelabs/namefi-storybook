import React from 'react'

export const User = () => {
  return (
    <div className='w-full pl-[24px] mb-20 h-[64px] flex items-center gap-[12px]  '>
          <h2 className='font-bold tracking-[0.05em] text-[24px] text-[#d9d9d9] '>GM,</h2>
          <img src="/assets/maskuser.svg" alt="mask image" role='img' />
          <h2 className='font-[900] tracking-[0.05em] text-[32px] text-[#d9d9d9] '>{userName}</h2>
      </div>
  )
}
