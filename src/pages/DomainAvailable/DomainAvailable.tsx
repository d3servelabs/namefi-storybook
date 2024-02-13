import React from 'react'
import { Button, ButtonProps } from '@components/Button'
import { DomainAvailableRegisterForm, DomainAvailableRegisterFormProps } from './DomainAvailableRegisterForm'
import { SetForNow } from './SetForNow'
export type DomainAvailableProps = {
    userAddress,
    isDomainTaken?: boolean
    isDomainAvailable?: boolean,
    buttonProps?: ButtonProps,
    domainAvailableRegisterFormProps: DomainAvailableRegisterFormProps,
    registerAotherOne?: boolean

}
export const DomainAvailable = ({registerAotherOne, domainAvailableRegisterFormProps, buttonProps, userAddress}: DomainAvailableProps) => {
  return (
    <div className='relative flex flex-col justify-between min-w-[450px] h-[270px]'>
        {
          !registerAotherOne ? <DomainAvailableRegisterForm {...domainAvailableRegisterFormProps} /> :
          <SetForNow />
        }
        <div>
            <Button {...buttonProps} img={!registerAotherOne && <img className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' />} >
                {registerAotherOne ? 'Register another one': (userAddress ? 'Connect Wallet to ': 'Register')}
            </Button>
        </div>
    </div>
  )
}
