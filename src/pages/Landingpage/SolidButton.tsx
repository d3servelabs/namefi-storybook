import { Button, ButtonText } from '@components/Buttons/Button'
import React from 'react' 



export const BaseButton = ({children}: {children?: React.ReactNode}) => {
  return (
    <Button className='inline-block' >
      <ButtonText className='text-black-500 text-base'>{children}</ButtonText>
      <img className='w-5' src="/assets/arrow-right1.svg" alt="" />
    </Button>
  )
}
export const SolidButton = ({children}: {children?: React.ReactNode}) => {
  return (
    <Button borderWidth='0' className='inline-block bg-primary-700 hover:bg-primary-500 rounded-full' >
      <ButtonText className=' text-[#232C27] text-base'>{children}</ButtonText>
    </Button>
  )
}