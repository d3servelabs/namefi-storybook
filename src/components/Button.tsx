import React from 'react'

export type ButtonProps = {
    label?: string;
    onClick: () => any;
    children?: any
}
export const Button = ({children, label, onClick}: ButtonProps) => {
  return (
    <div className='m-0 p-0 relative'>
        <button 
          onClick={onClick}
          className='block border flex items-center gap-[12px] rounded-[80px] text-white py-[12px] px-[24px] '
          type='button' >
            {label}
            <span className='font-["Roboto_Mono"] text-lg font-normal '>{children}</span> <img className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' />
        </button>
    </div>
  )
}
