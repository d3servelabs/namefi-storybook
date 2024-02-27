import { ArrowLeftIcon } from '@radix-ui/react-icons'
import React from 'react'
import { WhoisINfoForm } from './WhoisINfoForm'

export const WhoisInfo = () => {
  return (
    <div className='w-[613px] h-auto py-7 rounded-5 bg-[#232C27] flex flex-col justify-center items-center '>
        <div className='w-[544px]  flex flex-col gap-2 items-center'>
            <div className='w-full h-[65px] flex flex-col justify-center gap-2 '>
                <ArrowLeftIcon stroke='#48E59B' width={27} height={27} />
                <h2 className='text-white font-semibold text-lg tracking-wider'>WHOIS Info</h2>
            </div>
            <WhoisINfoForm />
        </div>
    </div>
  )
}
