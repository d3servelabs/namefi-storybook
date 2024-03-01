import React, { ComponentProps } from 'react'
import { WhoisInfoCard } from '../../WhoisInfo/WhoisInfoCard'
import { InfoCard } from '../../WhoisInfo/InfoCard'
import { RightFrame } from '../../WhoisInfo/RightFrame'
import { Verify } from '../../WhoisInfo/Verify'
import { Details } from '../../WhoisInfo/Details'
import { CardHeader } from '../../WhoisInfo/CardHeader'
import { VerifyText } from '../../WhoisInfo/VerifyText'
import { cn } from '../../../utils/cn'
import { VerifySteps } from '../../WhoisInfo/VerifySteps'
import { Email, Name, Texts } from '../../../components/WhoisInfo/DetailsTypography'
import { Marker } from '../../../components/WhoisInfo/Marker'

export const WhoisInfoRoot: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={cn('flex pr-4 gap-12 justify-center ', className)} {...props} >
        {children}
    </div>
  )
}


export const Info = {
  Root: WhoisInfoRoot,
  Card: WhoisInfoCard,
  InfoCard,
  RightFrame,
  Verify,
  Details,
  CardHeader,
  Text: VerifyText,
  Step: VerifySteps,
  DetailsName: Name,
  DetailsEmail: Email,
  DetailsText: Texts,
  Marker
}