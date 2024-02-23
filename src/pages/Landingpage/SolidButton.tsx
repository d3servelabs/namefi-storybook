import { Button, ButtonText, ButtonProps } from '@components/Buttons/Button'
import React from 'react' 



export const BaseButton = ({children, onClick, ...props}: ButtonProps) => {
  return (
    <Button onClick={onClick} className='inline-block' {...props}>
      <ButtonText className='text-black-500 text-base'>{children}</ButtonText>
      <img className='w-5' src="/assets/arrow-right1.svg" alt="" />
    </Button>
  )
}
export const SolidButton = ({children, onClick}: ButtonProps) => {
  return (
    <Button onClick={onClick} borderWidth='0' className='inline-block bg-primary-700 hover:bg-primary-500 rounded-full' >
      <ButtonText className=' text-[#232C27] text-base'>{children}</ButtonText>
    </Button>
  )
}