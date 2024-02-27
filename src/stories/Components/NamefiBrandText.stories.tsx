import type { Meta, StoryObj } from "@storybook/react";
import { NamefiBrandText } from "../../components/NamefiBrandText";
const meta = {
    title: 'Components/NamefiBrandText',
    component: NamefiBrandText,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof NamefiBrandText>

export default meta;
type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        text: 'Available',
        color: 'yellow',
        fontSize: '30px'
    }
}
