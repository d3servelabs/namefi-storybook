import {GhostButton} from '../../../Core';
import {TrashIcon} from '@radix-ui/react-icons';
import React from 'react';

export default function CartItem({domainName, years, price}) {
    return (
        <>
            <div className="relative w-full flex justify-between">
                <div
                    className="w-[120px] h-[120px] bg-brand-black rounded-lg drop-shadow-[0_2px_4px_rgba(202,202,202,0.25)] flex justify-center items-center">
                    <p className="font-bold text-xs tracking-widest text-white">{domainName}</p>
                </div>
                <div className="w-[332px] flex justify-between items-start text-white font-primary font-normal ">
                    <div className="min-w-[109px] flex flex-col gap-2  ">
                        <p>{domainName}</p>
                        <p>{years} Year</p>
                    </div>
                    <div className="relative flex gap-6 items-center ">
                        <p className="flex gap-3 text-sm tracking-[0.02em]  ">
                            <span>{price}</span>
                            <span>$NFSC</span>
                        </p>
                        <GhostButton className={'rounded-full aspect-square w-7 h-7 p-1'}>
                            <TrashIcon className={'text-primary w-5 h-5'}/>
                        </GhostButton>
                    </div>
                </div>
            </div>
        </>
    );
}