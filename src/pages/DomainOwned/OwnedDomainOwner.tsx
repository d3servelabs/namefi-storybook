import React from 'react'

export const OwnedDomainOwner = () => {
    return (
        <div className='relative flex flex-col items-start w-[434px] h-[347.5px]'>
            <div className='h-[306px] w-full flex flex-col justify-between '>
                <div className='h-[187px] flex flex-col justify-between'>
                    <div className='w-full h-[107px] pt-[48px] '>
                        <p className='font-semibold text-white text-[21px] tracking-[0.05em]'>You own this domain. </p>
                        <p className='font-normal text-[#C6EEDB] text-sm tracking-[0.05em]'>You can manage, transfer, list for sale, or borrow against it.</p>
                    </div>
                    <div className='w-[156px] h-[44px] flex justify-between '>
                        <button className='border-0 outline-0 '><img src="/assets/transfericon.svg" alt="transfer icon" role='img' /></button>
                        <button className='border-0 outline-0 '><img src="/assets/borrowicon.svg" alt="borrow icon" role='img' /></button>
                        <button className='border-0 outline-0 '><img src="/assets/listicon.svg" alt="list icon" role='img' /></button>
                    </div>
                </div>
                <div className='w-full h-[71px] flex flex-col items-start justify-between '>
                    <p className='font-normal text-sm tracking-[0.05em] text-[#d9d9d9] '>View on</p>
                    <div className='w-full h-[43px] flex items-center gap-[12px]'>
                        <button className='px-[25px] h-[43px] rounded-[25px] border-[#797979] border-[1.5px] outline-none flex items-center font-["Roboto_Mono"] font-normal text-lg text-[#ffffffcc]'>Blur.io</button>
                        <button className='px-[25px] h-[43px] rounded-[25px] border-[#797979] border-[1.5px] outline-none flex items-center font-["Roboto_Mono"] font-normal text-lg text-[#ffffffcc]'>Blur.io</button>
                        <button className='px-[25px] h-[43px] rounded-[25px] border-[#797979] border-[1.5px] outline-none flex items-center font-["Roboto_Mono"] font-normal text-lg text-[#ffffffcc]'>X2Y2</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
