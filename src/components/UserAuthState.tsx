import React, { useMemo } from 'react'
import { LoadingButton } from './LoadingButton'
import { LoggedOutButton } from './LoggedOutButton'
import {ShortAddress} from "@components/ShortAddress";
import { Balance, BalanceProps } from './Balance';

export type UserAuthStateProps = Partial<
    {
        balanceProps: BalanceProps,
        userAddress,
        userLoading,
        balanceLoading,
        onSignOut: () => any,
        onLogin: () => any
        onNetworkClicked: () => any
    }>


export const UserAuthState = ({balanceProps, userAddress, userLoading, balanceLoading, onLogin, onSignOut, onNetworkClicked}: UserAuthStateProps) => {

  return (
    <div className="relative flex items-center h-[60px] max-w-[440px] gap-3 ">
            <div className="h-full max-w-[150px] flex justify-between gap-3 items-center ">
                {userAddress &&
                    <Balance {...balanceProps} />
                }
                <button>
                    <img className="w-[20px]" src="/assets/bells.svg" alt="bells image" role="img"/>
                </button>
            
            </div>
        {
            userLoading || balanceLoading ? (<>
                <LoadingButton />

            </>) : (<>
                <LoggedOutButton shortUserAddress={userAddress? <ShortAddress address={userAddress}/> : <>Connect Wallet</>} userAddress={userAddress} onSignOut={onSignOut} onLogin={onLogin} />
            </>)
        }

    </div>
  )
}
