import {Button, ButtonProps} from '../../components/Core/Buttons/Button'
import React from 'react'
import {ButtonText} from "../../components/Core/Buttons/ButtonText";
import {cn} from "../../utils/cn";
import arrowRight1Svg from '../../../public/assets/arrow-right1.svg'



export const BaseButton = ({children,className,...props}: ButtonProps) => {
    return (
        <Button className={cn('inline-flex',className)} >
            <ButtonText className='text-black-500 text-base'>{children}</ButtonText>
            <img className='w-5' src={arrowRight1Svg} alt="" />
        </Button>
    )
}
export const SolidButton = ({children,className,...props}: ButtonProps) => {
    return (
        <Button className={cn('inline-flex ring-0 bg-primary-700 hover:bg-primary-500 rounded-full',className)} >
            <ButtonText className=' text-[#232C27] text-base'>{children}</ButtonText>
        </Button>
    )
}