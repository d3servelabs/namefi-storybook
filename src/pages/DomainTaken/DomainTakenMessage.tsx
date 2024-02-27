import { Button, ButtonProps } from '../../components/Buttons/Button'
import React from 'react'
import {ButtonText} from "../../components/Buttons/ButtonText";

export type DomainTakenMessageProps = {
    isLoading: boolean
    ownerAddress,
    buttonProps: ButtonProps
}

export const DomainTakenMessage = ({isLoading, ownerAddress, buttonProps}: DomainTakenMessageProps) => {
  return (
    <div className='relative flex flex-col justify-between w-[415px] h-[230px]'>
        <div className='h-[118px] w-full flex flex-col justify-between'>
            <div className='h-[65px]'>
            <p className='text-[21px] font-semibold tracking-wider text-[#fff]'>This domain is taken by 0x3923...d9s3. </p>
            <p className='text-sm font-normal tracking-wider text-[#C6EEDB]'>Connect Wallet to manage if you owns it on Namefi.</p>
            </div>
            <a className='gap-2 flex items-center'> <span className='text-base font-normal tracking-wider underline text-[#C6EEDB]'>I own this domain elsewhere</span> <img className='w-5' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' /></a>
        </div>
        <Button {...buttonProps}>
            <ButtonText>Connect Wallet</ButtonText>
            <img className='w-[25px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' />
        </Button>
    </div>
  )
}
