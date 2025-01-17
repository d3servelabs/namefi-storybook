import clsx from 'clsx';
import React from 'react'

export type FlowStepProps = {
    text?: React.ReactNode;
    isFocused: boolean;
}
export const FlowStep = ({text = '1',isFocused}: FlowStepProps) => {
  return (
    <div className={clsx('relative w-[28px] flex justify-center items-center h-[28px] border-2 border-[#0A4429] rounded-full overflow-hidden',
                          isFocused ? 'bg-[#48E59B] text-[#131313] ' : 'bg-[#111] text-[#0A4429] ')} >
        <p className='font-semibold text-base'>{text}</p>
    </div>
  )
}
