import React, { useMemo } from 'react'

export type BalanceProps = {
    balance?: number
}

export const Balance = ({balance}: BalanceProps) => {

    const [truncatedBalance, balanceFractions] = useMemo(() => {
        if (balance !== undefined && balance !== null) {
            return balance.toFixed(2).split('.')
        }
        return [undefined, undefined]
    }, [balance])

  return (
   <> 
        {
            truncatedBalance && <p className="text-lg text-white tracking-[0.02em] font-medium ">
            {truncatedBalance}.<span className="text-sm">{balanceFractions}</span> $NFSC
            </p>
        }
    </>
  )
}
