import React from 'react'
import clsx from "clsx";
import {Button, ButtonProps} from "@components/Buttons/Button";

 

export const SolidButton = ({disabled,children,...props}: ButtonProps) => {
  return (
      <Button backgroundColor={!disabled? "#48E59B": "#797979"} borderColor={!disabled? "#48E59B": "#797979"}  color={"#0A4429"} disabled={disabled} {...props}>
        {children}
      </Button>
  )
}
