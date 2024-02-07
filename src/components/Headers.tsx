import {useMemo} from "react"
import { HeaderSearchBar } from "./HeaderSearchBar"
import { LoggedOutButton } from "./LoggedOutButton"
import { LoadingButton } from "./LoadingButton"

type HeaderProps = Partial<{
    balance?: number,
    userAddress,
    balanceLoading,
    userLoading,
    includeSearchBar?:boolean,
    onSignOut: () => any,
    onLogin: () => any,
    onNetworkClicked: () => any

}>
export const Headers = ({includeSearchBar, balance, userAddress, userLoading, balanceLoading, onLogin, onSignOut, onNetworkClicked}: HeaderProps) => {
    const [truncatedBalance, balanceFractions] = useMemo(() => {
        if (balance !== undefined && balance !== null) {
            return balance.toFixed(2).split('.')
        }
        return [undefined, undefined]
    }, [balance])

    const shortUserAddress = useMemo(() => {
        if (!userAddress) return <>Connect Wallet</>
        return <>{userAddress.slice(0, 7)}
            &bull;&bull;&bull;&bull;
            {userAddress?.slice(37, 42)}</>
    }, [userAddress]);


    return (
        <header className="namefi-cont namefi-header relative h-[80px] pl-6 pr-[10px] lg:rounded-[50px] ">
            <div className="relative w-full h-full m-0 flex justify-between items-center">
                <div className="relative flex items-center gap-[6rem]">
                    <img src="/assets/namefi.svg" width={90} alt="logo" role="svg"/>
                </div>
                {includeSearchBar && <HeaderSearchBar />}
                <nav className="relative flex items-center h-[60px] max-w-[440px] gap-5 ">
                    {userAddress && truncatedBalance &&
                        <div className="h-full w-[150px] flex justify-between items-center ">
                            <button>
                                <img className="w-[20px]" src="/assets/bells.svg" alt="bells image" role="img"/>
                            </button>
                            <p className="text-lg text-white tracking-[0.02em] font-medium ">
                                {truncatedBalance}.<span className="text-sm">{balanceFractions}</span> $NFSC</p>
                        </div>
                    }
                    {
                        userLoading || balanceLoading ? (<>
                            <LoadingButton />

                        </>) : (<>
                            <LoggedOutButton shortUserAddress={shortUserAddress} userAddress={userAddress} onSignOut={onSignOut} onLogin={onLogin} />
                        </>)
                    }

                </nav>
            </div>
        </header>
    )
}
