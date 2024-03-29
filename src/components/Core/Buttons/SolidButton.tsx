import React from 'react'
import {Button, ButtonProps} from "./Button";
import {cn} from "../../../utils/cn";

export const SolidButton = ({disabled,className,children,...props}: ButtonProps) => {
  return (
      <Button disabled={disabled} {...props} className={cn('disabled:bg-[#797979] disabled:hover:bg-[#797979] bg-primary-500 hover:bg-primary-80 ring-0 text-primary-dark', className)}>
        {children}
      </Button>
  )
}
