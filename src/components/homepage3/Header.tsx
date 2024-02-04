import React from "react"

export const Header = () => {
  return (
    <header className="cont header relative h-[80px] pl-6 pr-[10px] lg:rounded-[50px] ">
        <div className="relative w-full h-full m-0 flex justify-between items-center">
            <div className="flex items-center gap-12">
                <div className="relative flex items-center gap-[6rem]">
                    <img src="/assets/namefi.svg" width={90} alt="logo" role="svg" />
                </div>
                <form className='relative w-[480px] h-[58.29px] bg-[#797979] flex rounded-[85px] overflow-hidden'>
                    <label className='w-full h-full'>
                        <input className='w-full h-[58.29px] bg-inherit text-lg text-[#313131] placeholder:text-[#313131] font-normal font-["Roboto_Mono"] tracking-[0.02em] px-5 border-0 outline-0 ' type="text" placeholder='namefi.com' />
                    </label>
                    <button className="w-[58.29px] h-[58.29px] flex justify-center items-center"><img className="w-[20.57px]" src="/assets/Shape.svg" alt="search icon" role="img" /></button>
                </form>
            </div>
            <nav className="relative flex items-center h-full gap-5 ">
                <button><img className="w-[20px]" src="/assets/bells.svg" alt="bells image" role="img" /></button>
                <button className="relative flex items-center justify-between gap-3 w-[275px] rounded-[32px] p-[8px] bg-[#111] h-[60px]">
                    <div className="block w-[48px] h-[48px] bg-[#7d7d7d] rounded-full "><img src="/assets/ETH-Network.svg" alt="eth logo" role="img" /></div>
                    <p className="text-white text-base font-medium font-['Roboto_Mono']">Connect Wallet</p>
                    <img src="/assets/download.svg" className='w-[44px]' alt="download image" role='svg' />
                </button>
            </nav>
        </div>
    </header>
  )
}
