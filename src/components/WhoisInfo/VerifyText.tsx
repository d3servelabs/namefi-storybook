import React, { ComponentProps } from 'react'

export const VerifyText: React.FC<ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div className=' w-full' {...props}>
        {/* {children} */}
        <h3 className=' font-semibold text-base leading-7 tracking-wider text-white '>Verify your email.</h3>
        <p className=' font-normal text-xs tracking-wider leading-5 text-white '>To enable DNS setting</p>
    </div>
  )
}
