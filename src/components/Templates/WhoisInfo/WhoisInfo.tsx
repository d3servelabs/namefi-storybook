import React from 'react'
import { Info } from './index'
import { VerifyButton } from '../../WhoisInfo/VerifyButton'
import { LinkButton } from '../../LinkButton'
import { StepDiagram } from '../../../components/Core/StepDiagram'

export const WhoisInfo = () => {
  return (
    <Info.Root>
        <Info.Card>
            <Info.InfoCard >
                <Info.CardHeader>
                    <h1>Avatar</h1>
                    <LinkButton />
                </Info.CardHeader>
                <Info.Details>
                    <Info.DetailsName>
                        Your Name
                    </Info.DetailsName>
                    <Info.DetailsEmail>
                        name@gmail.com
                        <Info.Marker />
                        
                    </Info.DetailsEmail>
                    <Info.DetailsText>
                        Mobile phone number
                    </Info.DetailsText>
                    <Info.DetailsText>
                        Address line, City, postcode
                    </Info.DetailsText>
                </Info.Details>
            </Info.InfoCard>
        </Info.Card>
        <Info.RightFrame>
            <Info.VerifySteps>
                <StepDiagram stepCount={2} currentStep={1} className='w-full' />
                <p>Send code</p>
                <p className=' opacity-30'>Verify code</p>
            </Info.VerifySteps>
            <Info.Verify>
              <Info.VerifyText>
                    <Info.VerifyHeading>WHOIS info required.</Info.VerifyHeading>
                    <Info.VerifyParagraph>To be able to verify email.</Info.VerifyParagraph>
              </Info.VerifyText>
              <VerifyButton>
                  Send Code
              </VerifyButton>
            </Info.Verify>
        </Info.RightFrame>
    </Info.Root>
  )
}


