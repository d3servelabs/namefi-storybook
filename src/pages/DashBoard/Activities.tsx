import React from 'react'
import { LoadindAnimation } from './LoadindAnimation';

export type ActivitiesProps = {
    todo?: string;
    domainName: string;
    isLoading?: boolean
}

export const Activities = ({todo, domainName, isLoading}: ActivitiesProps) => {


  return (
    <div className='flex justify-between w-[574px] h-[24px] font-primary font-normal text-white '>
        <p className=' text-base tracking-wider min-w-[110px]'>[{todo}]</p>
        <p className='text-center text-base tracking-wider min-w-[153px]'>
            {domainName?.length > 14 ? domainName?.slice(0,5) + '...' + domainName?.slice(-6) : domainName }
        </p>
        {
            isLoading ?
                <div className='w-[200px] h-full flex items-center justify-between '>
                    <div className='w-[175px] flex items-center h-full '>
                        <LoadindAnimation />
                    </div>
                    <button>
                        <img 
                            className='w-4'
                            src="/assets/link.svg" 
                            alt="link image" />
                    </button>
                </div> :
                <div className='w-[200px] h-full flex items-center justify-between '>
                    <img className='w-[19px]' src="/assets/globe.svg" alt="globe image" role='img' />
                    <p className='text-[#c6eedb] text-sm'>Waiting on registrar</p>
                </div>
        }
    </div>
  )
}
