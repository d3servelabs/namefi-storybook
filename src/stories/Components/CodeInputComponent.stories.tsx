import type { Meta, StoryObj } from "@storybook/react";
import { CodeInputField } from "../../components/CodeInputField";
const meta = {
    title: 'Components/CodeInputField',
    component: CodeInputField,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof CodeInputField>

export default meta;
type Story = StoryObj<typeof meta>

export const NotSubmitted: Story = {
    args: {
        value: '',
        status: 'NOTSUBMITTED'
    }
}
export const SubmittedWithError: Story = {
    args: {
        value: '',
        status: 'SUBMITTED',
        incorrectAuthCode: true,
    }
}
export const SubmittedWithoutError: Story = {
    args: {
        value: '',
        status: 'SUBMITTED',
        incorrectAuthCode: false
    }
}