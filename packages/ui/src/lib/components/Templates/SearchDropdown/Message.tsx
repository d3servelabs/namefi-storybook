import React, { ComponentProps, ReactElement, ReactNode } from 'react'
import  { cn }  from "@namefi/utils"
import { DoneIcon } from '../../Core/icons/Done';
import { ExclamationTri } from '../../Core/icons/ExclamationTri';



export const Root = ({children,...props}: ComponentProps<'div'>) => {

  return (
    <div className={cn(' relative w-full min-h-18 border-b-[1.5px] border-border-500 flex flex-col justify-center items-center')} {...props}>
        <div className={cn(' w-full h-full pb-3 text-white px-2.5')}>
            {children}
        </div>
    </div>
  )
}

export const Available = ({price}) => {
    return(
        <div className={cn('w-full font-primary font-normal text-base tracking-wide text-primary-500 flex justify-between')}>
            <div className='flex justify-center items-center gap-3'>
                <DoneIcon />
                <p>Available</p>
            </div>
            <p className=''>
                ${price} NFSC / year
            </p>
        </div>
    )
}

export const Taken = () => {
    return(
        <div className={cn('w-full font-primary font-normal text-base tracking-wide text-brand-blue flex justify-between')}>
            <div className=' w-full h-full flex justify-center items-center gap-3'>
                <ExclamationTri fill='#70A8F4' />
                <p>Taken, you may import it if you own it.</p>
            </div>
        </div>
    )
}

export const NotSupported = () => {
    return(
        <div className={cn('w-full font-primary font-normal text-base tracking-wide text-pending flex justify-between')}>
            <div className='flex justify-center items-center gap-3'>
                <ExclamationTri/>
                <p>We’ll support this name service soon.</p>
            </div>
        </div>
    )
}

export const YouOwnIt = () => {
    return(
        <div className={cn('w-full font-primary font-normal text-base tracking-wide text-primary-500 flex justify-between')}>
            <div className='flex justify-center items-center gap-3'>
                <DoneIcon />
                <p>It’s yours. Enter to manage.</p>
            </div>
        </div>
    )
}