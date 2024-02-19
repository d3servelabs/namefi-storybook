import React from 'react'
import { UserAuthStateButton, UserAuthStateButtonProps  } from './UserAuthStateButton'

interface LoggedOutButtonProps {
    userAddress,
    shortUserAddress,
    onSignOut?: () => any,
    onLogin?: () => any;
    userAuthStateButtonProps?: UserAuthStateButtonProps
}
 
export const LoggedOutButton = ({shortUserAddress, userAddress, onSignOut, onLogin, userAuthStateButtonProps}:LoggedOutButtonProps) => {
  return (

    <UserAuthStateButton {...userAuthStateButtonProps}
        backgroundColor={userAddress ? '#111' : '#111111b3'} 
        authStateLogo={<img src="/assets/ETH-Network.svg" alt="eth logo" role="img"/>}
        rightArrowImg={<img onClick={userAddress ? onSignOut : onLogin}
                    src={userAddress ? "/assets/disconnect.svg" : "/assets/arrow-right1.svg"}
                    className={userAddress ? 'max-w-[44px]': 'max-w-[22px]'} alt="disconnect image" role='svg'/>} 
     >
        {userAddress? shortUserAddress: 'Connect Wallet'}
    </UserAuthStateButton>
  )
}
