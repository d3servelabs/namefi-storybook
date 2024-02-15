import type { Meta, StoryObj } from "@storybook/react";
import { FlowNumbering } from "@components/FlowNumbering";

const meta = {
    title: 'Components/FlowNumbering',
    component: FlowNumbering,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof FlowNumbering>

export default meta;
type Story = StoryObj<typeof meta>

export const FlowNumberingStory: Story = {
    args: {
        text: '2',
        isFocused: true
    }
}