import { Button } from '@components/Button'
import React from 'react'

export type UnlockButtonProps = {
    isUnlocked: boolean;
    onClick: () => any
}
export const UnlockButton = ({isUnlocked, onClick}: UnlockButtonProps) => {
  return (
    <div className='relative'>
        <Button  
            onClick={onClick}
            borderWidth='1px' 
            img={ <img className='w-[21px]' src={isUnlocked? '/assets/Done.svg': '/assets/Unlock.svg'} role='img' /> }
             >Unlock</Button>
    </div>
  )
}
