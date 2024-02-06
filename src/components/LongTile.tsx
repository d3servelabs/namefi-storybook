import React from "react";

interface LongTileProps {
  key: string;
  domainName: string;
}

export const LongTile = ({key, domainName}: LongTileProps) => {
  return (
    <div key={key} className='relative w-[350px] flex flex-col items-center justify-between p-[15px] h-[200px] bg-black rounded-[20px] drop-shadow-[0_0px_1px_rgba(202,202,202,0.25)]'>
    <div className='h-[33px] w-full flex items-center justify-between'>
        <div className='w-[117px] h-full flex justify-between '>
            <button className='border-0 outline-0 w-[33px] '><img src="/assets/transfericon.svg" alt="transfer icon" role='img' /></button>
            <button className='border-0 outline-0 w-[33px] '><img src="/assets/borrowicon.svg" alt="borrow icon" role='img' /></button>
            <button className='border-0 outline-0 w-[33px] '><img src="/assets/listicon.svg" alt="list icon" role='img' /></button>
        </div>
        <button className='relative block'>
            <img className='w-[24px]' src="/assets/Plus.svg" alt="Plus image" role='img' />
        </button>
    </div>
    <h3 className='text-[21px] text-[#fff] font-medium tracking-[0.1em] '>{domainName}</h3>
    <div className='w-[112px] h-[27.3px] flex items-center justify-between self-end '>
        <img className='w-[28px]' src="/assets/lock.svg" alt="lock image" role='img' />
        <div className='w-[75px] h-full'>
            <p className='text-[#acacac] text-[8px] font-bold tracking-[0.1em] '>Expires on</p>
            <p className='text-[#ededed] text-[11px] font-bold tracking-[0.1em] '>Mar 01 2025</p>
        </div>
    </div>
</div>
  );
};