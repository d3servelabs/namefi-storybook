import React, { ComponentProps } from 'react'
import { SolidButton } from '../Buttons/SolidButton'
import { cn } from '../../../utils/cn'
import { ArrowRight } from '../icons/ArrowRight'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export const VerifyButton: React.FC<ComponentProps<typeof SolidButton>> = ({className, children, ...props}) => {
  return (
    <SolidButton {...props}
        className={cn('text-white text-xs py-4 font-primary bg-black-900 hover:bg-black-1000 cursor-pointer ')}
       >
        {children}
        <ArrowRightIcon width={34} height={20} stroke='#48E59B' />
    </SolidButton>
  )
}
