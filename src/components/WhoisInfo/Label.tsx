import clsx from 'clsx';
import React from 'react'

interface LabelProps {
    labelName?: string;
    className?: string;
    children?: React.ReactNode
}
export const Label = ({children, labelName, className}: LabelProps) => {
  return (
    <label className={clsx('block flex block items-center ', className)}>
        <p className='text-black-500 tracking-wider max-w-[150px] font-normal text-sm '>{labelName}</p>
        {children}
    </label>
  )
}
