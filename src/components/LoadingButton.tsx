import React from 'react'

export const LoadingButton = () => {
  return (
    <button
        className="relative flex items-center gap-3 min-w-[275px] rounded-[32px] p-[8px] bg-[#111] h-[60px] animate-pulse">
        <div className="block w-[48px] min-w-[48px] h-[48px] bg-[#7d7d7d] rounded-full ">
            <img src="/assets/ETH-Network.svg" alt="eth logo" role="img"/>
        </div>
        <p className="text-white text-base font-medium font-['Roboto_Mono']">Loading...</p>
    </button>
  )
}
