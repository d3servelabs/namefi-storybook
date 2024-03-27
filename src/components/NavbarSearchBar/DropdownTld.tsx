import React, { ComponentProps } from 'react'
import { cn } from '../../utils/cn'
import { Button, SolidButton } from '../Core'
import { ButtonText } from '../Core/Buttons/ButtonText'

export const DropdownTld = ({children}:{children: string[]}) => {
    console.log(children)
  return (
    <div className={cn('w-full flex flex-wrap gap-1.5 ')}>
        {children.map(data => <div>
            <SolidButton className=' bg-[#1c1c1c] border-[0.85px] border-[#4b4b4b] hover:border-primary-60 hover:bg-primary-900 text-[#ffffffcc] font-normal text-sm px-4 py-1.75'>
                .{data}
            </SolidButton>
        </div> )
        }
    </div>
  )
}
