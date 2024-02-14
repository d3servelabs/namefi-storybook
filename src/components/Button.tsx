import React from 'react'

export type ButtonProps = Partial<{
  label?: string;
  onClick: () => any;
  children?: any;
  img?: any
  borderColor: string;
  backgroundColor: string;
  borderWidth: string
}>
export const Button = ({children, img, label, borderWidth, onClick, backgroundColor, borderColor}: ButtonProps) => {
  return (
    <div className='m-0 p-0 relative'>
        <button 
          onClick={onClick}
          className='block border-[1.5px] flex items-center gap-[12px] rounded-[80px] text-white py-[10px] px-[25px] '
          type='button'
          style={{
            backgroundColor,
            borderColor,
            borderWidth
          }} >
            {label}
            <span className='font-["Roboto_Mono"] text-lg font-normal '>{children}</span>
             {img}
        </button>
    </div>
  )
}
