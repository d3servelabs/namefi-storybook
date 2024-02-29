import clsx from 'clsx'
import React, { ComponentProps } from 'react'

export const InfoCard: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={clsx('flex flex-col gap-5 items-center w-81 h-70 rounded-5 border border-brand-200 bg-black-900 p-6 ', className)} {...props}>
        {children}
    </div>
  )
}
