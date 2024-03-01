import React, { ComponentProps } from 'react'
import { cn } from '../../utils/cn'
import { Cross2Icon } from '@radix-ui/react-icons'

export const Marker: React.FC<ComponentProps<'div'>> = ({className, ...props}) => {
  return (
    <div className={cn('flex items-center gap-1 ', className)} {...props}>
        <Cross2Icon stroke='#FF3C3C' />
        <p className={cn('text-[#FFC7C7] font-normal text-sm tracking-widest')}> Not Verified</p>
    </div>
  )
}
