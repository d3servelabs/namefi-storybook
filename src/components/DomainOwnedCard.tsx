import React from 'react'

export type DomainOwnedCardProps = {
    userAddress,
    domainName: string,
    loading?:boolean
}

export const DomainOwnedCard = ({userAddress, domainName, loading}: DomainOwnedCardProps) => {
  return (
    <div className='relative rounded-[20px] p-6 bg-black flex flex-col justify-between items-center w-[400px] h-[400px] rounded-[20px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]'>
        <div className='flex w-full h-[30px] items-center justify-between'>
            <img className='w-[163px]' src="/assets/namefiapp.svg" alt="namefiapp img" role='img' />
            <button className='relative block'>
                <img className='w-[30px]' src="/assets/Gear.svg" alt="Gear image" role='img' />
            </button>
        </div>
        <h3 className='text-white font-semibold text-[28px] tracking-[0.1em]'>namefi.com</h3>
        <div className='w-full h-[36px] flex justify-between '>
            <div className='w-[106px] h-full '>
                <p className='text-[#acacac] text-xs tracking-[0.1em] '>Owned by</p>
                <p className='text-[#ededed] text-sm tracking-[0.1em] '>0x3923...d9s3</p>
            </div>
            <div className='w-[150px] h-full flex items-center justify-between '>
            <img className='w-[36.75px]' src="/assets/lock.svg" alt="lock image" role='img' />
                <div className='w-[99px]'>
                <p className='text-[#acacac] text-[11px] font-bold tracking-[0.1em] '>Expires on</p>
                <p className='text-[#ededed] text-sm font-bold tracking-[0.1em] '>Mar 01 2025</p>
                </div>
            </div>
        </div>
    </div>
  )
}
