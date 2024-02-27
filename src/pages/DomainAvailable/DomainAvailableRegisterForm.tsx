import { Button, ButtonProps } from "../../components/Buttons/Button";
import { NamefiBrandText } from "../../components/NamefiBrandText";
import React from "react";

export type DomainAvailableRegisterFormProps = {
    isPriceLoading?: boolean,
    price?: number,
    years?: number,
    onYearsChanged: (value: number) => any,
    onRegisterClicked: () => any,
    connectButtonProps?: ButtonProps;
    userAddress 
}

export function DomainAvailableRegisterForm({
                                                userAddress = ' ',
                                                connectButtonProps,
                                                onYearsChanged,
                                                onRegisterClicked, price=72, isPriceLoading, years=2
                                            }: DomainAvailableRegisterFormProps) {

    return (
            <div className='h-[175px] w-full flex flex-col justify-between'>
                <div className="w-full h-[59px] ">
                    <p className="text-[21px] text-white font-semibold tracking-wider"> Register a new domain.</p>
                    <p className="text-sm text-[#c6eedb] font-normal tracking-wider">We will mint a <NamefiBrandText className="text-sm text-black-500"> Namefi</NamefiBrandText> NFT to your connected wallet.</p>
                </div>
                <div className="h-[80px] w-full flex items-center justify-between ">
                    <div className='h-full w-[245px] flex flex-col justify-between '>
                        <p className='text-sm font-light text-[#999] '>Register for:</p>
                        <div className='w-full h-[55px] flex justify-between '>
                            <button className="block self-end pb-4" 
                                onClick={()=>onYearsChanged(Math.max(years-1,0))}>
                                <img className='w-[33px]' src="/assets/minus.svg" alt="decrease image"/>
                            </button>
                            <div className='w-[98px] h-[55px] font-normal font-["Roboto_Mono"] text-white flex items-center justify-between'>
                                <p className='text-[42px] leading-none m-0 p-0 self-end'>{years}</p>
                                <p className=' text-[21px] m-0 pb-1  leading-none self-end'>year{years>1? 's':''}</p>
                            </div>
                            <button className="block self-end" 
                                onClick={()=>onYearsChanged(years+1)}>
                                    <img className='w-10' src="/assets/Plus.svg" alt="increase image"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )

}