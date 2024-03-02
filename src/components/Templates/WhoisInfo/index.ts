import React, { ComponentProps } from 'react'
import { WhoisInfoCard } from '../../WhoisInfo/WhoisInfoCard'
import { InfoCard } from '../../WhoisInfo/InfoCard'
import { RightFrame } from '../../WhoisInfo/RightFrame'
import { Verify } from '../../WhoisInfo/Verify'
import { Details } from '../../WhoisInfo/Details'
import { CardHeader } from '../../WhoisInfo/CardHeader'
import { VerifyText } from '../../WhoisInfo/VerifyText'
import { VerifySteps } from '../../WhoisInfo/VerifySteps'
import { Email, Name, Texts } from '../../../components/WhoisInfo/DetailsTypography'
import { Marker } from '../../../components/WhoisInfo/Marker'
import { WhoisInfoRoot } from './WhoisInfoRoot'
import { Heading, Paragraph } from '../../../components/WhoisInfo/VerifyTextTypography'


export const Info = {
    Root: WhoisInfoRoot,
    Card: WhoisInfoCard,
    InfoCard,
    RightFrame,
    Verify,
    Details,
    CardHeader,
    VerifyText,
    VerifySteps,
    DetailsName: Name,
    DetailsEmail: Email,
    DetailsText: Texts,
    Marker,
    VerifyHeading: Heading,
    VerifyParagraph: Paragraph
  }