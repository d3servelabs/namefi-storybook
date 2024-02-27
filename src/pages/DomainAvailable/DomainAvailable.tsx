import React from 'react'
import { Button, ButtonProps } from '../../components/Buttons/Button'
import { DomainAvailableRegisterForm, DomainAvailableRegisterFormProps } from './DomainAvailableRegisterForm'
import { SetForNow } from './SetForNow'
import {ButtonText} from "../../components/Buttons/ButtonText";
export type DomainAvailableProps = {
    userAddress,
    isDomainTaken?: boolean
    isDomainAvailable?: boolean,
    connectButtonProps?: ButtonProps,
    domainAvailableRegisterFormProps: DomainAvailableRegisterFormProps,
    registerAotherOne?: boolean

}
export const DomainAvailable = ({registerAotherOne, domainAvailableRegisterFormProps, connectButtonProps, userAddress}: DomainAvailableProps) => {
  return (
    <div className='relative flex flex-col justify-between min-w-[450px] h-[270px]'>
        {
          !registerAotherOne ? <DomainAvailableRegisterForm {...domainAvailableRegisterFormProps} /> :
          <SetForNow />
        }
        <div>
            <Button {...connectButtonProps}>
                <ButtonText>Add to cart</ButtonText>
                <img className='w-[25px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' />
            </Button>
        </div>
    </div>
  )
}
