import clsx from 'clsx'
import React, { ComponentProps } from 'react'

export const InfoCardRoot: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
      <div className='flex flex-col justify-center items-center gap-2' {...props}>
        <h3 className='self-start font-semibold text-sm tracking-wider text-primary-500 '>WHOIS Info</h3>
        <div className={clsx('flex flex-col gap-5 items-center w-81 h-70 rounded-5 border border-brand-200 bg-black-900 p-6 ', className)} {...props}>
          {children}
        </div>
      </div>

  )
}
