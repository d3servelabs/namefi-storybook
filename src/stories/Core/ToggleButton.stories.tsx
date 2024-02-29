import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "../../components/Core/ToggleButton";
const meta = {
    title: 'Core/ToggleButton',
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


