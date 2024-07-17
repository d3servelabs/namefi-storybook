import React, { ComponentProps } from 'react'
import  { cn }  from "@namefi/utils"

export interface DetailsProps extends React.ComponentProps<'div'> {
  name?: string;
  email?: string;
  mobileNo?: number;
  address?: string;
}

const InfoCardDetailsRoot = ({name, children, className, email, mobileNo, address, ...props}: DetailsProps) => {
  return (
    <div className={cn('w-69 flex flex-col gap-2 font-["Roboto"]', className)} {...props}>
        {children?.[0]}
        <div>
          {children?.[1]}
        </div>
        {children?.[2]}
        {children?.[3]}
    </div>
  )
}
export default InfoCardDetailsRoot;