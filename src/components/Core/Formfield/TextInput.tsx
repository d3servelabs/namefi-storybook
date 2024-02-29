import clsx from 'clsx';
import React from 'react'
interface TextInputProps extends React.ComponentProps<'input'> {
    searchValue?: string
    placeholder?: string
    className?: string
    isEmailVerified?: boolean;
    inputType?: 'text' | 'email' | 'number';
    onSearchChanged?: (value: string) => any
}
export const TextInput = ({searchValue, placeholder, inputType, className, isEmailVerified,  onSearchChanged, ...props}: TextInputProps) => {
  return (
    <>
        <input
            {...props}
            className={clsx('outline-none bg-[#232C27] py-2 px-3 placeholder:text-[#797979] rounded-md ', className)} 
            value={searchValue}
            type={inputType}
            onChange={(evt) => onSearchChanged?.(evt.target.value)} 
            placeholder={placeholder} />
            {
                (inputType === 'email' && !isEmailVerified) && <p className='text-[#FEF556CC] flex items-center gap-2'><img src="/assets/x-shape.svg" alt="x-shape" /> Not Verified</p> 
            }
    </>
  )
}
