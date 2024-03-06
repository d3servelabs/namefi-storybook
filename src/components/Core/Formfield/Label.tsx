import clsx from 'clsx';
import React, {ComponentProps} from 'react'

export interface LabelProps extends React.ComponentProps<'label'> {
    labelName?: string;
    className?: string;
    children?: React.ReactNode
}
export const Label = ({children, className, labelName, ...props}: LabelProps) => {
  return (
    <label className={clsx('block flex block items-center ', className)} {...props}>
        <p className='text-black-500 tracking-wider max-w-[150px] font-normal text-sm '>{labelName}</p>
        {children}
    </label>
  )
}
