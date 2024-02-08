import React from 'react'

export type DomainTakenOwnerProps = {
    isLoading: boolean
    ownerAddress,

}

export const DomainTakenOwner = ({isLoading, ownerAddress}: DomainTakenOwnerProps) => {
  return (
    <div className='relative flex flex-col justify-between w-[415px] h-[230px]'>
        <div className='h-[118px] w-full flex flex-col justify-between'>
            <div className='h-[65px]'>
            <p className='text-[21px] font-semibold tracking-[0.05em] text-[#fff]'>This domain is taken by 0x3923...d9s3. </p>
            <p className='text-base font-normal tracking-[0.05em] text-[#C6EEDB]'>Connect Wallet to manage if you owns it on Namefi.</p>
            </div>
            <button className='w-[248px] flex items-center justify-between'> <span className='text-[16px] font-normal tracking-[0.05em] underline text-[#C6EEDB]'>I own this domain elsewhere</span> <img className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' /></button>
        </div>
        <button className='w-[231px] h-[48px] border flex items-center justify-between rounded-[80px] text-white px-[24px] '><span className='font-["Roboto_Mono"] text-lg font-normal '>Connect Wallet</span> <img className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' /></button>
    </div>
  )
}
