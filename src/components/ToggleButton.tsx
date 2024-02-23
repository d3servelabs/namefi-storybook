import React, { useCallback, useRef } from 'react'

export type ToggleButtonProps = {
  isChecked?: boolean
  onChange?: () => boolean
}

export const ToggleButton = ({isChecked, onChange}: ToggleButtonProps) => {

  const inputRef = useRef<HTMLInputElement>(null!)
  const handleCheck = useCallback(() => {if (inputRef.current.checked) {
     console.log(isChecked)
  }},[])
  return (
    <div className='w-[44px] h-[24px] rounded-full '>
        <label className='relative block w-full h-full rounded-full'>
            <input 
            onChange={onChange}
              ref={inputRef}
              className='w-0 h-0 opacity-0 peer' 
              type="checkbox" />
              <span className='absolute top-0 left-0 w-full h-full rounded-full bg-[#313131] cursor-pointer
              peer-checked:bg-[#c6eedb33] 
              peer-checked:before:bg-[#E8FFD2]
              before:absolute
              before:w-5
              before:h-5
              before:bg-[#d6d6d6]
              before:inset-0.5
              before:rounded-full
              before:duration-300
              peer-checked:before:translate-x-5'></span>
        </label>
    </div>
  )
}
