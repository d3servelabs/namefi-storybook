import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "@components/ToggleButton";
const meta = {
    title: 'Components/ToggleButton',
    component: ToggleButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof ToggleButton>

export default meta;

type Story = StoryObj<typeof meta>

export const Toggle: Story = {
    args: {
       
    }
}


