import React from 'react'

interface LoggedOutButtonProps {
    userAddress,
    shortUserAddress,
    onSignOut?: () => any,
    onLogin?: () => any
}

export const LoggedOutButton = ({shortUserAddress, userAddress, onSignOut, onLogin}:LoggedOutButtonProps) => {
  return (
    <button
        className="relative flex items-center justify-between gap-3 rounded-[32px] p-[8px] bg-[#111] h-[60px]"
        style={{
          backgroundColor: userAddress ? '#111' : '#111111b3'
        }}>
        <div className="block w-[48px] min-w-[48px] h-[48px] bg-[#7d7d7d] rounded-full ">
            <img src="/assets/ETH-Network.svg" alt="eth logo" role="img"/>
        </div>
        <p className="text-white text-base font-medium font-['Roboto_Mono']">{userAddress? shortUserAddress: 'Connect Wallet'}</p>
        <img onClick={userAddress ? onSignOut : onLogin}
                src={userAddress ? "/assets/download.svg" : "/assets/arrow-right1.svg"}
                className={userAddress ? 'max-w-[44px]': 'max-w-[22px]'} alt="download image" role='svg'/>
    </button>
  )
}
