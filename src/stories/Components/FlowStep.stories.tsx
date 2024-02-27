import type { Meta, StoryObj } from "@storybook/react";
import { FlowStep } from "../../components/FlowStep";

const meta = {
    title: 'Components/FlowStep',
    component: FlowStep,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof FlowStep>

export default meta;
type Story = StoryObj<typeof meta>

export const FlowStepStory: Story = {
    args: {
        text: '2',
        isFocused: true
    }
}