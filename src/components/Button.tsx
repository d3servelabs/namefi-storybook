import React from 'react'

export type ButtonProps = {
    label?: string;
    onClick: () => any;
    children?: any
}
export const Button = ({children, label, onClick}: ButtonProps) => {
  return (
    <button 
     onClick={onClick}
      className='block border flex items-center gap-[12px] rounded-[80px] text-white py-[12px] px-[24px] '
      type='button' >
        {label}
        {children}
    </button>
  )
}
