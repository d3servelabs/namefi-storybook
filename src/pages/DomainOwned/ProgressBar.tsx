import React from 'react'

export type ProgressBarProps = {
    progressWidth: number;
    domainName?: string;
}
export const ProgressBar = ({progressWidth = 0, domainName = 'namefi.com'}: ProgressBarProps) => {
  return (
    <div className='relative w-[434px] h-[49px] flex flex-col justify-between '>
        <div className='w-full h-[3px] rounded-[3px] bg-[#48e59b33] overflow-hidden '>
            <div className='w-full h-full rounded-[3px] bg-[#71E0AC] duration-300'
                style={{width: `${progressWidth}%`}}>
            </div>
        </div>
        <div className='relative h-[24px] flex items-center gap-2 '>
            {progressWidth == 100 ? <p className='font-normal text-sm tracking-[0.05em] text-[#d6d6d6] '>Transfer completed.</p>: <p className='font-normal text-sm tracking-[0.05em] text-[#d6d6d6] '>We’re working on transferring {domainName}. <span className='text-[#48e59b]'>{`${progressWidth}%`}</span></p> }
            <button><img className='w-[17px]' src="/assets/external-link.svg" alt="external-link image" role='img' /></button>
        </div>
    </div>
  )
}
