import React, { ComponentProps } from 'react'

interface DetailsPorps extends React.ComponentProps<'div'> {
  name?: string;
  email?: string;
  mobileNo?: number;
  address?: string;
}

export const Details = ({name, email, mobileNo, address, ...props}: DetailsPorps) => {
  return (
    <div className=' w-69 flex flex-col gap-2 ' {...props}>
        <h2 className='font-medium text-xl tracking-wider text-white '>Your Name</h2>
        <div>
            <p className=' font-normal text-base tracking-wider text-white '>name@gmail.com</p>
        </div>
        <p className='font-normal text-black-500 tracking-wider'>Mobile phone number</p>
        <p className='font-normal text-black-500 tracking-wider'>Address line, City, postcode</p>
    </div>
  )
}
