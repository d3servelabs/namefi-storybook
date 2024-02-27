import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../components/Checkbox";

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof Checkbox>

export default meta;
type Story = StoryObj<typeof meta>

export const CartStory: Story = {
}