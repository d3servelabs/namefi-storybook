import React from 'react'
import { UnlockButton } from './UnlockButton'
import { TransferButton } from './TransferButton'
import { FlowNumbering } from '@components/FlowNumbering'
import { CodeInputComponent } from '@components/CodeInputComponent'
import { WalletInput } from './WalletInput'
import { ProgressBar } from './ProgressBar'

export type TransferProps = {
    unlocked?: boolean;
    isTransferring?: boolean;
    progressWidth: number;
    domainName: string
}

export const Transfer = ({unlocked, isTransferring, progressWidth, domainName }: TransferProps) => {
    function handleClick () {
         alert('Hello world')
    }
  return (
    <div className='relative w-[434px] h-[350px] px-0 flex flex-col justify-evenly '
    style={{justifyContent: unlocked ?'space-between': 'space-evenly'}}>
        <div className='w-full h-[59px] flex flex-col justify-between '>
            <h4 className='font-semibold text-[21px] tracking-[0.05em] text-white '>
                {isTransferring ? `'Transferring your${domainName} NFT.` : 'Transfer domain to another wallet. '}
            </h4>
            <p className='font-normal text-sm tracking-[0.04em] text-[#C6EEDB] '>
                {unlocked ?(isTransferring? 'Take a ☕, your domain will arrive in the destinated wallet soon.':'NFT unlocked, ready for Transfer!'):  'Unlock your NFT Lock for Transfer.'} 
            </p>
        </div>
        {
            unlocked && (isTransferring ? <ProgressBar progressWidth={progressWidth} domainName={domainName} /> : <WalletInput />)
        }
        <div className='w-[434px] h-[96.5px] flex flex-col items-center justify-between '>
            <div className='relative h-[28px] w-[234px] flex justify-between items-center
            before:absolute
            before:w-[211px]
            before:h-[1.5px]
            before:bg-[#c6eedb]
            before:top-[14px]
            before:opacity-10
            before:-z-1'>
                <FlowNumbering text='1' isFocused={!unlocked? true : false} />
                <FlowNumbering text='2' isFocused={unlocked? true : false} />
            </div>
            <div className='relative w-full h-[48px] flex justify-center gap-12 '>
                <div style={{opacity: unlocked ? 0.3 : 1}}>
                    <UnlockButton isUnlocked={unlocked ? true : false} onClick={handleClick} />
                </div>
                <div style={{opacity: unlocked ? 1 : 0.3}}>
                    <TransferButton onClick={handleClick} transferText='Transfer' status={'TRANSFERRING'} done={progressWidth == 100 ? true : false} />
                </div>
            </div>
        </div>
    </div>
  )
}
