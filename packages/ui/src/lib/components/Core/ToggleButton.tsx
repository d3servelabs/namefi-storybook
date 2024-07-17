import React, {useId} from 'react'
import  {cn}  from "@namefi/utils"
import {ClassNameValue} from "tailwind-merge";

export type ToggleButtonProps = React.ComponentProps<'input'> & {
    classes?:{
        thumb?: ClassNameValue,
        track?: ClassNameValue,
        root?:ClassNameValue,
    }
}
export const ToggleButton = ({classes,...props}:ToggleButtonProps) => {
    const id = useId()
    return (
      <div className={cn('w-[44px] h-[24px] rounded-full',classes?.root)}>
          <label className='relative block w-full h-full rounded-full'>
              <input id={`${id}-input`} {...props} className={cn('w-0 h-0 opacity-0 peer hidden',props.className)} type="checkbox"  />
              <span id={`${id}-track`} className={cn('absolute top-0 left-0 w-full h-full rounded-full bg-[#313131] cursor-pointer peer-checked:bg-[#c6eedb33]',classes?.track)}></span>
              <span id={`${id}-thumb`} className={cn(`inset-0.5 rounded-full duration-300 peer-checked:translate-x-5 absolute w-5 h-5 bg-[#d6d6d6] peer-checked:bg-[#E8FFD2]`, classes?.thumb)}/>
          </label>
      </div>
    )
}
