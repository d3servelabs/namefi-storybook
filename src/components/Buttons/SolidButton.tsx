import React from 'react'
import {Button, ButtonProps} from "./Button";
import {cn} from "../../utils/cn";




export const SolidButton = ({disabled,className,children,...props}: ButtonProps) => {
  return (
      <Button disabled={disabled} {...props} className={cn('disabled:bg-[#797979] bg-[#48E59B] hover:bg-[#48E59B]/60 ring-0 text-[#0A4429]', className)}>
        {children}
      </Button>
  )
}
