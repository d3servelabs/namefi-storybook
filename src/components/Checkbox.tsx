import React from 'react'

export type CheckboxProps = {
    isChecked?: boolean
}
export const Checkbox = ({isChecked}: CheckboxProps) => {
  return (
    <label className='relative block border-box rounded-sm w-5 h-5 border border-primary-500 cursor-pointer  '>
        <input type="checkbox" className='opacity-0 w-0 h-0 peer ' />
        <span className='absolute bg-brand-200 left-0.5 top-0.5 w-3.5 h-3.5 rounded-sm duration-200
        peer-checked:bg-brand-100
        before:absolute
        before:opacity-0
        before:duration-200
        peer-checked:before:opacity-100
        before:w-3.5 
        before:h-2
        before:-rotate-45
        before:border-primary-500
        before:border-b-2
        before:border-l-2'
        ></span>
    </label>
  )
}
