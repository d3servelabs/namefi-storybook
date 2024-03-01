import React from 'react'
import { Info } from './WhoisInfoRoot'
import { VerifyButton } from '../../WhoisInfo/VerifyButton'
import { LinkButton } from '../../LinkButton'

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
            <Info.Step />
            <Info.Verify>
              <Info.Text />
              <VerifyButton>
                  Send Code
              </VerifyButton>
            </Info.Verify>
        </Info.RightFrame>
    </Info.Root>
  )
}
