import clsx from 'clsx'
import React from 'react'
export type LoadindAnimationProps = {
    isLoading?: boolean
}
export const LoadingAnimation = ({isLoading}: LoadindAnimationProps) => {
  return (
    <div className='relative w-full h-[3px] rounded-[3px] bg-[#48e59b33] overflow-hidden '>
        <div className='w-1/2 animate-loading absolute h-full rounded-[3px] bg-[#71E0AC]'>
        </div>
    </div>

  )
}
