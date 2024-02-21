import React from 'react'
import clsx from "clsx";

export type ButtonProps = Partial<{
  label?: string;
  onClick: () => any;
  children?: any;
  img?: any
  borderColor: string;
  backgroundColor: string;
  borderWidth: string;
  color: string
  disabled: boolean
  buttonProps?: React.ComponentPropsWithRef<'button'> 
}>
export const Button = ({children, img, label, color, borderWidth, onClick, backgroundColor, borderColor,buttonProps,disabled}: ButtonProps) => {
  return (
    <div className={clsx('m-0 p-0 relative', disabled && 'opacity-30')}>
        <button
            {...(buttonProps || {})}
            disabled={disabled}
          onClick={onClick}
            aria-disabled={disabled}
          className={clsx('block border-[1.5px] flex items-center gap-[12px] rounded-[80px] text-white py-[10px] px-[25px] ', disabled && 'cursor-not-allowed')}
          type='button'
          style={{
            backgroundColor,
            borderColor,
            borderWidth,
            color
          }} >
            {label}
            <span className='font-["Roboto_Mono"] text-lg font-normal '>{children}</span>
             {img}
        </button>
    </div>
  )
}
