import React, {useState} from 'react';
import WhoisInfo from './index';
import { StepDiagram } from '../../Core/StepDiagram';
import { StatusChip } from '../../Core';
import {OtpInputField} from "../../Core/OtpInputField";

const Details = WhoisInfo.Details;
export const WhoisInfoDemo = () => {
	const [state, setState] = useState('');

	return (
		<Details.Root>
			<Details.Card.Root>
				<Details.Card.Header>
					<h1>Avatar</h1>
					<Details.Card.EditButton />
				</Details.Card.Header>
				<Details.Card.Body.Root>
					<Details.Card.Body.Typography.Name>
						Your Name
					</Details.Card.Body.Typography.Name>
					<Details.Card.Body.Typography.Email>
						name@gmail.com
						<StatusChip color={'error'}>Not Verified</StatusChip>
					</Details.Card.Body.Typography.Email>
					<Details.Card.Body.Typography.BodyText>
						Mobile phone number
					</Details.Card.Body.Typography.BodyText>
					<Details.Card.Body.Typography.BodyText>
						Address line, City, postcode
					</Details.Card.Body.Typography.BodyText>
				</Details.Card.Body.Root>
			</Details.Card.Root>

			<Details.RightFrame.Root>
				<Details.RightFrame.VerifyStepsRoot>
					<StepDiagram stepCount={2} currentStep={1} className="w-full" />
					<p>Send code</p>
					<p className="opacity-30">Verify code</p>
				</Details.RightFrame.VerifyStepsRoot>
				<Details.RightFrame.Body>
					<Details.RightFrame.VerifyText.Root>
						<Details.RightFrame.VerifyText.Typography.Heading>
							WHOIS info required.
						</Details.RightFrame.VerifyText.Typography.Heading>
						<Details.RightFrame.VerifyText.Typography.Paragraph>
							To be able to verify email.
						</Details.RightFrame.VerifyText.Typography.Paragraph>
					</Details.RightFrame.VerifyText.Root>
					<OtpInputField fieldLength={6} onValueChange={(value)=>setState(value)} otpValue={state}/>
					<Details.RightFrame.VerifyButton>
						Send Code
					</Details.RightFrame.VerifyButton>
				</Details.RightFrame.Body>
			</Details.RightFrame.Root>
		</Details.Root>
	);
};
