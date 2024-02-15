import type { Meta, StoryObj } from "@storybook/react";
import { CodeInputComponent } from "@components/CodeInputComponent";
const meta = {
    title: 'Components/CodeInputComponent',
    component: CodeInputComponent,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof CodeInputComponent>

export default meta;
type Story = StoryObj<typeof meta>

export const CodeInput: Story = {
    args: {
        inputType: 'password',
        backgroundColor: 'red',
        errorMesg: 'error-code'
    }
}