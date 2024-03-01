import React, { ComponentProps } from 'react'

export const WhoisInfoCard: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2' {...props}>
        <h3 className='self-start font-semibold text-sm tracking-wider text-primary-500 '>WHOIS Info</h3>
        {children}
    </div>
  )
}
