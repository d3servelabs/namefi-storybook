import React from 'react'

export const SetForNow = () => {
  return (
    <div className='relative w-[483px] h-[175px] flex jus '>
        <div className='relative w-[312px] '>
            <div className='w-full h-[83px] pt-[24px] tracking-[0.05em] '>
                <p className='font-semibold text-[21px] text-[#fff] '>☕ You’re all set for now. </p>
                <p className='font-normal text-sm text-[#C6EEDB] '>You can now close off and check back later.</p>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[150px]' src="/assets/cat.svg" alt="cat img" />
        </div>
    </div>
  )
}
