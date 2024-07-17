import React from 'react'
import {Button, ButtonProps} from "./Button";
import  {cn}  from "@namefi/utils"

export const GhostButton = ({disabled,className,children,...props}: ButtonProps) => {
  return (
      <Button disabled={disabled} {...props} className={cn('disabled:bg-[#797979] bg-transparent hover:bg-[#48E59B]/20 active:bg-[#48E59B]/40 ring-0 text-[#0A4429]', className)}>
        {children}
      </Button>
  )
}
