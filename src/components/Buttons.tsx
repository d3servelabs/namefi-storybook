import React from 'react'

interface ButtonProps {
    label?: string;
    borderColor?: string;
    backgroundColor?: string;
    color?: string
    size?: 'small' | 'medium' | 'large';
}
export const Buttons = ({label,color, borderColor, backgroundColor}: ButtonProps) => {
  return (
    <button 
    className='rounded-[80px] px-[24px] py-[12px] text-[18px] font-["Roboto_Mono"] border border-[1.5px] '
    type='button'
    style={{
        borderColor,
        backgroundColor,
        color
    }}>
        {label}
    </button>
  )
}
