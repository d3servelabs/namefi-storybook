import React, { ComponentProps, ReactElement, ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { DoneIcon } from '../Core/icons/Done';
import { ExclamationTri } from '../Core/icons/ExclamationTri';

export interface DropdownMessage extends ComponentProps<'div'> {
    status: 'TAKEN' | 'AVAILABLE' | 'YOUOWNIT' | 'NOTSUPPORTED';
    price?: number;
}

export const DropdownMessage = ({price=24, status, ...props}: DropdownMessage) => {

  return (
    <div className={cn(' relative w-full min-h-18 border-b-[1.5px] border-border-500 flex flex-col justify-center items-center')} {...props}>
        <div className={cn(' w-full h-full pb-3 text-white px-2.5')}>
            {}
            {status === 'AVAILABLE' && <Available price={price} />}
            {status === 'TAKEN' && <Taken />}
            {status === 'NOTSUPPORTED' && <NotSupported />}
            {status === 'YOUOWNIT' && <YouOwnIt />}
        </div>
    </div>
  )
}

const Available = ({price}) => {
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

const Taken = () => {
    return(
        <div className={cn('w-full font-primary font-normal text-base tracking-wide text-brand-blue flex justify-between')}>
            <div className=' w-full h-full flex justify-center items-center gap-3'>
                <ExclamationTri fill='#70A8F4' />
                <p>Taken, you may import it if you own it.</p>
            </div>
        </div>
    )
}

const NotSupported = () => {
    return(
        <div className={cn('w-full font-primary font-normal text-base tracking-wide text-pending flex justify-between')}>
            <div className='flex justify-center items-center gap-3'>
                <ExclamationTri/>
                <p>We’ll support this name service soon.</p>
            </div>
        </div>
    )
}

const YouOwnIt = () => {
    return(
        <div className={cn('w-full font-primary font-normal text-base tracking-wide text-primary-500 flex justify-between')}>
            <div className='flex justify-center items-center gap-3'>
                <DoneIcon />
                <p>It’s yours. Enter to manage.</p>
            </div>
        </div>
    )
}