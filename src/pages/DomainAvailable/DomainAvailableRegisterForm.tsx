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
                                                onRegisterClicked, price, isPriceLoading, years
                                            }: DomainAvailableRegisterFormProps) {

    return <>

        <div className='relative flex flex-col justify-between w-[359px] h-[359px]'>
            <div className='h-[246px] w-full flex flex-col justify-between'>
                <div className='h-[107px] w-full '>
                    <p className='text-[21px] font-light text-[#999] '>Register for:</p>
                    <div className='h-[74px] flex items-center justify-between '>
                        <button onClick={()=>onYearsChanged(Math.max(years-1,0))} ><img className='w-[33px]' src="/assets/minus.svg" alt="decrease image"/></button>
                        <div
                            className='w-[135px] h-[74px] font-normal font-["Roboto_Mono"] text-white flex items-center justify-between'>
                            <p className='text-[56px] leading-none m-0 p-0 self-end'>{years}</p>
                            <p className=' text-2xl m-0 p-0  leading-none self-end'>year{years>1? 's':''}</p>
                        </div>
                        <button onClick={()=>onYearsChanged(years+1)}><img className='w-[40px]' src="/assets/Plus.svg" alt="increase image"/></button>
                    </div>
                </div>
                <div className='h-[107px] w-[238px]'>
                    <p className='text-[21px] font-light text-[#999] '>Current Price:</p>
                    <div className='h-[74px] w-full'>
                        <div
                            className='block w-[202px] h-[74px] font-normal font-["Roboto_Mono"] text-white flex justify-between'>
                            <p className='text-[56px] m-0 p-0 self-end leading-none'>{price}</p>
                            <p className=' text-2xl m-0 p-0 text-end self-end leading-none '>$NFSC</p>
                            <img className='w-[24px] self-end' src="/assets/notification.svg" alt="notification image"
                                 role='img'/>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className='w-[307px] h-[48px] border flex items-center justify-between rounded-[80px] text-white px-[24px] '>
                <span className='font-["Roboto_Mono"] text-lg font-normal '>Connect Wallet to Buy</span> <img
                className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img'/></button>
        </div>
    </>

}