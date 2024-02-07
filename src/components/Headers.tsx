import {useMemo} from "react"

type HeaderProps = Partial<{
    balance?: number,
    userAddress,
    balanceLoading,
    userLoading,
    onSignOut: () => any,
    onLogin: () => any,
    onNetworkClicked: () => any
}>
export const Headers = ({balance, userAddress, userLoading, balanceLoading, onLogin, onSignOut, onNetworkClicked}: HeaderProps) => {
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
        <header className="cont header relative h-[80px] pl-6 pr-[10px] lg:rounded-[50px] ">
            <div className="relative w-full h-full m-0 flex justify-between items-center">
                <div className="relative flex items-center gap-[6rem]">
                    <img src="/assets/namefi.svg" width={90} alt="logo" role="svg"/>
                </div>
                <nav className="relative flex items-center h-[60px] w-[440px] gap-5 ">
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
                            <button
                                className="relative flex items-center gap-3 min-w-[275px] rounded-[32px] p-[8px] bg-[#111] h-[60px] animate-pulse">
                                <div className="block w-[48px] min-w-[48px] h-[48px] bg-[#7d7d7d] rounded-full ">
                                    <img src="/assets/ETH-Network.svg" alt="eth logo" role="img"/>
                                </div>
                                <p className="text-white text-base font-medium font-['Roboto_Mono']">Loading...</p>
                            </button>

                        </>) : (<>
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
                        </>)
                    }

                </nav>
            </div>
        </header>
    )
}
