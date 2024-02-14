import { Button } from '@components/Button'
import React, { useMemo } from 'react'

export type TransferButtonProps = {
    transferText?: string 
} & (
    {
        done: boolean
        status: 'TRANSFERRING'
    } | {
        status: 'TRANSFER'
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
    const {status, transferText} = props
  return (
    <div className='relative'>
        <Button
            borderWidth='1px'
            img={<img className='w-[21px]' src={status === 'TRANSFERRING'? (done? '/assets/Done.svg': '/assets/Update.svg'): '/assets/transfer.svg'} role='img' />} >{transferText}</Button>
    </div>
  )
}
