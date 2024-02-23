import React from 'react'
import clsx from "clsx";
import {cn} from "@utils/cn";

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
    <div className={cn('m-0 p-0 relative text-lg ', disabled && 'opacity-30',className)}>
        <button
            {...(buttonProps || {})}
            disabled={disabled}
          onClick={onClick}
            aria-disabled={disabled}
          className={cn('block border-[1.5px] w-full items-center gap-[12px] rounded-[80px] py-[10px] px-[25px]  ', disabled && 'cursor-not-allowed')}
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