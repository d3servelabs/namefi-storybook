import React from 'react'
import { Info } from './WhoisInfoRoot'
import { VerifyButton } from '../../../components/Core/WhoisInfo/VerifyButton'

export const WhoisInfo = () => {
  return (
    <Info.Root>
        <Info.Card>
            <Info.InnerCard >
                <Info.Header>
                    <h1>hello</h1>
                </Info.Header>
                <Info.Details />
            </Info.InnerCard>
        </Info.Card>
        <Info.RightFrame>
            <Info.Step />
            <Info.Verify>
              <Info.Text />

              {/* </Info.Text> */}
              <VerifyButton>
                  Send Code
              </VerifyButton>
            </Info.Verify>
        </Info.RightFrame>
    </Info.Root>
  )
}
