import type { Meta, StoryObj } from "@storybook/react";
import { CodeInputField } from "@components/CodeInputField";
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

export const CodeInput: Story = {
    args: {
        inputType: 'password',
        backgroundColor: 'red',
        errorMesg: 'error-code'
    }
}