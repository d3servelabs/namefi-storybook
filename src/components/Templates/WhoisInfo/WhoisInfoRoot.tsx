import React, { ComponentProps } from 'react'
import { WhoisInfoCard } from '../../../components/Core/WhoisInfo/WhoisInfoCard'
import { InfoCard } from '../../../components/Core/WhoisInfo/InfoCard'
import { RightFrame } from '../../../components/Core/WhoisInfo/RightFrame'
import { Verify } from '../../../components/Core/WhoisInfo/Verify'
import { Details } from '../../../components/Core/WhoisInfo/Details'
import { CardHeader } from '../../../components/Core/WhoisInfo/CardHeader'
import { VerifyText } from '../../../components/Core/WhoisInfo/VerifyText'
import { cn } from '../../../utils/cn'
import { VerifySteps } from '../../../components/Core/WhoisInfo/VerifySteps'

export const WhoisInfoRoot: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={cn('flex pr-4 gap-12 justify-center ', className)} {...props} >
        {children}
    </div>
  )
}

export const WhoisCard: React.FC<ComponentProps<typeof WhoisInfoCard>> = (props) => {

    return <WhoisInfoCard {...props} />
}

export const InnerCard: React.FC<ComponentProps<typeof InfoCard>> = (props) => {
  return <InfoCard {...props} />
}

export const WhoisInfoFrame: React.FC<ComponentProps<typeof RightFrame>> = (props) => {
  return <RightFrame {...props} />
}

export const WhoisInfoVerify: React.FC<ComponentProps<typeof Verify>> = (props) => {
  return <Verify {...props} />
}

export const WhoisInfoDetails: React.FC<ComponentProps<typeof Details>> = (props) => {
  return <Details {...props} />
}

export const Header: React.FC<ComponentProps<typeof CardHeader>> = (props) => {
  return <CardHeader {...props} />
}

export const Text: React.FC<ComponentProps<typeof VerifyText>> = (props) => {
  return <VerifyText {...props} />
}

export const Step: React.FC<ComponentProps<typeof VerifySteps>> = (props) => {
  return <VerifySteps {...props} />
}
export const Info = {
  Root: WhoisInfoRoot,
  Card: WhoisCard,
  InnerCard,
  RightFrame: WhoisInfoFrame,
  Verify: WhoisInfoVerify,
  Details: WhoisInfoDetails,
  Header,
  Text,
  Step
}