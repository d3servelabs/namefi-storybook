import React from 'react'

interface LoggedOutButtonProps {
    userAddress,
    shortUserAddress,
    onSignOut: () => any,
    onLogin: () => any
}

export const LoggedOutButton = ({shortUserAddress, userAddress, onSignOut, onLogin}) => {
  return (
    <button
        className="relative flex items-center justify-between gap-3 rounded-[32px] p-[8px] bg-[#111] h-[60px]">
        <div className="block w-[48px] min-w-[48px] h-[48px] bg-[#7d7d7d] rounded-full ">
            <img src="/assets/ETH-Network.svg" alt="eth logo" role="img"/>
        </div>
        <p className="text-white text-base font-medium font-['Roboto_Mono']">{shortUserAddress}</p>
        <img onClick={userAddress ? onSignOut : onLogin}
                src={userAddress ? "/assets/download.svg" : "/assets/arrow-right1.svg"}
                className='w-[44px] min-w-[44px]' alt="download image" role='svg'/>
    </button>
  )
}
