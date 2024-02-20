import React from 'react'
import { UserAuthStateButton, UserAuthStateButtonProps } from './UserAuthStateButton'

type WrongNetworkButtonProps = Partial<{
  userAuthStateButtonProps?: UserAuthStateButtonProps

}>
export const WrongNetworkButton = ({userAuthStateButtonProps}: WrongNetworkButtonProps) => {
  return (
        <UserAuthStateButton {...userAuthStateButtonProps}
            backgroundColor={'#111111b3'}
            authStateLogo={<img src="/assets/network-error.svg" alt="error logo" role="img"/>}
            rightArrowImg={<img className='w-[22px]' src="/assets/arrow-right1.svg" alt="arrow-right1 logo" role="img"/>} 
        >
            Wrong Network
        </UserAuthStateButton>
    )
}
