import React, {ComponentProps} from 'react'
import {cn} from "../../../../utils/cn";
export default function ActivitiesRoot ({children,className,...props}: ComponentProps<'div'>) {

  return (
    <div {...props} className={cn('relative flex flex-col justify-start h-90 gap-[0.625rem]')}>
        {children}
    </div>
  )
}
