import type { Meta, StoryObj } from "@storybook/react"
import { OTPInputField } from "../../components/OTPInputField"
import { useState } from "react";

const meta = {
    title: 'Components/OTPInputField',
    component: OTPInputField,
    parameters: {
        layout: 'centered',
    }
}satisfies Meta<typeof OTPInputField>

export default meta;

type Story = StoryObj<typeof meta>
export const OTPInput: Story = {
    argTypes: {
        fieldLength: {type: 'number'},
        otpValue: {type: 'string'},
        onValueChange: {action: 'click'}
    },
    args: {
        fieldLength: 6,
        otpValue: '',
        onValueChange: () => {}
    }as any,
    render: ({fieldLength, otpValue}: any) => {

        const [otp, setOtp] = useState(otpValue)
        const onValueChange = (value: string) => setOtp(value)
        return(
            <OTPInputField 
                otpValue={otp}
                fieldLength={fieldLength}
                onValueChange={onValueChange}
            />
        )
    }
}