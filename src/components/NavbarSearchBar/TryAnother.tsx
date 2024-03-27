import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { SwitchIcon } from '../Core/icons/SwitchIcon'

export const TryAnother = ({children}:{children: ReactNode}) => {
  return (
    <div className={cn(' w-full px-2.5 flex items-start gap-8 pt-4')}>
        <div className='flex items-center gap-2'>
            <SwitchIcon />
            <p className='font-primary font-normal text-sm tracking-wide text-brand-300'>Try another</p>
        </div>
        <div className=' max-w-68'>
            {children}
        </div>
    </div>
  )
}
