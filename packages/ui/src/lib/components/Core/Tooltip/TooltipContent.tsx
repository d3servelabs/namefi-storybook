import React, { ReactNode } from 'react'
import  { cn }  from "@namefi/utils"
 
export interface ContentProps extends React.ComponentProps<'div'> {
    children: ReactNode;
    icon: ReactNode
}

const Long = ({children, icon, ...props}: ContentProps) => {


  return (
    <div className={cn('duration-200 max-w-100 border rounded-2.5 bg-[#313131] border-primary-500 pt-6 pr-12 pb-8 pl-8 flex gap-4 drop-shadow-[0_0px_1px_rgba(198, 238, 219, 0.1)]')} {...props}>
        {icon}
        <div className={cn(' w-full flex flex-col gap-2.5 pt-0.5')}>
            {children}
        </div>
    </div>
  )
}

const Short = ({children, ...props}: ContentProps) => {


  return (
    <div className={cn('duration-200 max-w-100 border rounded-2.5 bg-[#313131] border-primary-500 px-4 py-2 drop-shadow-[0_0px_1px_rgba(198, 238, 219, 0.1)]')} {...props}>
        {children}
    </div>
  )
}

const Content = {
  Long,
  Short
}
export default Content