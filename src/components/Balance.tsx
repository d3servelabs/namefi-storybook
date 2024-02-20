import clsx from 'clsx'
import React, { useMemo } from 'react'

export type BalanceProps = {
    balance?: number
    fontSizeP?: string
    fontSizeSpan?: string
    color?: string
    approxBalance?: boolean
}

export const Balance = ({balance, approxBalance=false, fontSizeP, fontSizeSpan, color}: BalanceProps) => {

    const [truncatedBalance, balanceFractions] = useMemo(() => {
        if (balance !== undefined && balance !== null) {
            return balance.toFixed(2).split('.')
        }
        return [undefined, undefined]
    }, [balance])

  return (
   <> 
        {
            truncatedBalance &&<> <p className="text-lg text-white tracking-wide font-normal font-primary "
                style={{
                    fontSize:fontSizeP,
                    color
                }}>
                {truncatedBalance}.<span className="text-sm"
                style={{
                    fontSize:fontSizeSpan
                }}>{balanceFractions}</span>
                </p>
                {
                    approxBalance && <p className='font-primary mt-2 font-normal text-[#d6d6d6] text-sm tracking-wider '>
                    ≈${truncatedBalance}.{balanceFractions}
                </p>
                }
            </>
        }
    </>
  )
}
 