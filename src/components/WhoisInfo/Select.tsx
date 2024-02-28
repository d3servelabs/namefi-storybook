import clsx from 'clsx'
import React from 'react'

interface SelectProps {
    values?: number[]
    className?: string
}

export const Select = ({values = [1, 234, 137, 19], className}: SelectProps) => {
  return (
    <select 
        name="select" 
        className={clsx('outline-none bg-[#232C27] min-w-[90px] py-2 px-3 placeholder:text-[#797979] rounded-md ', className)}>
        {
            values?.map((value, x) => <option value={value}>+{value}</option> )
        }
    </select>
  )
}
