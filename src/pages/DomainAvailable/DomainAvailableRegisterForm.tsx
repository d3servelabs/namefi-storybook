import React from "react";

export type DomainAvailableRegisterFormProps = {
    isPriceLoading?: boolean,
    price?: number,
    years: number,
    onYearsChanged: (value: number) => any,
    onRegisterClicked: () => any,
}

export function DomainAvailableRegisterForm({
                                                onYearsChanged,
                                                onRegisterClicked, price=72, isPriceLoading, years=2
                                            }: DomainAvailableRegisterFormProps) {

    return <>

        <div className='relative flex flex-col justify-between w-[450px] h-[270px]'>
            <div className='h-[175px] w-full flex flex-col justify-between'>
                <div className="w-full h-[59px] ">
                    <p className="text-[21px] text-white font-semibold tracking-[0.05em]"> Register a new domain.</p>
                    <p className="text-sm text-[#c6eedb] font-normal tracking-[0.05em]">We will mint a Namefi NFT to your connected wallet.</p>
                </div>
                <div className="h-[80px] w-full flex items-center justify-between ">
                    <div className='h-full w-[169px] flex flex-col justify-between'>
                        <p className='text-sm font-light text-[#999] '>Current Price:</p>
                        <div
                            className='block w-full h-[55px] font-normal font-["Roboto_Mono"] text-white flex justify-between'>
                            <div className="w-[140px] flex justify-between">
                                <p className='text-[42px] self-end m-0 p-0 leading-none'>{price}</p>
                                <p className=' text-[1.8em] m-0 p-0 text-end self-end leading-none '>$NFSC</p>
                            </div>
                            <img className='w-[18px] self-end' src="/assets/notification.svg" alt="notification image"
                                role='img'/>
                        </div>
                    </div>
                    <div className='h-full w-[245px] flex flex-col justify-between '>
                        <p className='text-sm font-light text-[#999] '>Register for:</p>
                        <div className='h-[55px] flex items-center justify-between '>
                            <button onClick={()=>onYearsChanged(Math.max(years-1,0))} ><img className='w-[33px]' src="/assets/minus.svg" alt="decrease image"/></button>
                            <div
                                className='w-[98px] h-[55px] font-normal font-["Roboto_Mono"] text-white flex items-center justify-between'>
                                <p className='text-[42px] leading-none m-0 p-0 self-end'>{years}</p>
                                <p className=' text-[21px] m-0 p-0  leading-none self-end'>year{years>1? 's':''}</p>
                            </div>
                            <button onClick={()=>onYearsChanged(years+1)}><img className='w-[40px]' src="/assets/Plus.svg" alt="increase image"/></button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <button
                    className='block border flex items-center gap-[12px] rounded-[80px] text-white py-[12px] px-[24px] '>
                    <span className='font-["Roboto_Mono"] text-lg font-normal '>Connect Wallet to Register</span> <img
                    className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img'/>
                </button>
            </div>
        </div>
    </>

}