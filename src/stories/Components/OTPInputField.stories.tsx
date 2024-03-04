import type { Meta, StoryObj } from "@storybook/react"
import { OTPInputField } from "../../components/OTPInputField"

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
    args: {
        
    }
}