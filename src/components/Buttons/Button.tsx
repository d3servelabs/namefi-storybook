import React from 'react'
import clsx from "clsx";

export type ButtonProps = Partial<{
  onClick: () => any;
  children?: any;
  borderColor: string;
  backgroundColor: string;
  borderWidth: string;
  color: string
  disabled: boolean
  buttonProps?: React.ComponentPropsWithRef<'button'>
    className?:string,
}>
export const Button = ({children, color, borderWidth, onClick, backgroundColor, borderColor,buttonProps,disabled,className, }: ButtonProps) => {
  
  return (
    <div className={clsx('m-0 p-0 relative', disabled && 'opacity-30',className)}>
        <button
            {...(buttonProps || {})}
            disabled={disabled}
          onClick={onClick}
            aria-disabled={disabled}
          className={clsx('block border-[1.5px] flex text-lg items-center gap-[12px] rounded-[80px] py-[10px] px-[25px]  ', disabled && 'cursor-not-allowed')}
          type='button'
          style={{
            backgroundColor,
            borderColor,
            borderWidth,
            color
          }} >
            {children}
        </button>
    </div>
  )
}

export const ButtonText = ({className, children}:{className?:string, children: React.ReactNode})=>{
    return <span className={clsx('font-primary text-lg font-normal text-white ', className)}>{children}</span>
}
Button.Text = ButtonText