import { Button } from '@components/Button'
import React, { useMemo } from 'react'

export type TransferButtonProps = {
    transferText?: string 
    onClick?: () => any;
} & (
    {
        done: boolean;
        status?: 'TRANSFERRING'
    } | {
        status?: 'TRANSFER'
    }
)

export const TransferButton = (props: TransferButtonProps) => {

    const {done} = useMemo(() => {
        if (props.status === 'TRANSFERRING') {
            return { 
                done: props.done
            }
        }
        return {}
    }, [props])
    const {status, transferText, onClick} = props
  return (
    <div className='relative'>
        <Button
            onClick={onClick}
            borderWidth='1px'
            img={<img className='w-[21px]' src={status === 'TRANSFERRING'? (done? '/assets/Done.svg': '/assets/Update.svg'): '/assets/transfer.svg'} role='img' />} >{status === 'TRANSFERRING'? (done ? 'Done': 'Transferring'): 'Transfer'}</Button>
    </div>
  )
}
