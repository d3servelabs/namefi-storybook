import React from "react"

export const LayoutHeader = () => {
    return (
        <header className="cont header relative h-[80px] pl-6 pr-[10px] lg:rounded-[50px] ">
            <div className="relative w-full h-full m-0 flex justify-between items-center">
                <div className="relative flex items-center gap-[6rem]">
                    <img src="/assets/namefi.svg" width={90} alt="logo" role="svg" />
                </div>
                <nav className="relative flex items-center h-[60px] w-[440px] gap-5 ">
                    <div className="h-full w-[150px] flex justify-between items-center ">
                        <button><img className="w-[20px]" src="/assets/bells.svg" alt="bells image" role="img" /></button>
                        <p className="text-lg text-white tracking-[0.02em] font-medium ">100.<span className="text-sm ">00</span> $NFSC</p>
                    </div>
                    <button className="relative flex items-center justify-between gap-3 w-[275px] rounded-[32px] p-[8px] bg-[#111] h-[60px]">
                        <div className="block w-[48px] h-[48px] bg-[#7d7d7d] rounded-full "><img src="/assets/ETH-Network.svg" alt="eth logo" role="img" /></div>
                        <p className="text-white text-base font-medium font-['Roboto_Mono']">0x3923....d9s3</p>
                        <img src="/assets/download.svg" className='w-[44px]' alt="download image" role='svg' />
                    </button>
                </nav>
            </div>
        </header>
    )
}
