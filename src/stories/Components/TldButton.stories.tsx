import type { Meta, StoryObj } from "@storybook/react";
import { TldButtons } from "@components/TldButtons";
const meta = {
    title: 'Components/TldButtons',
    component: TldButtons,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof TldButtons>

export default meta;

type Story = StoryObj<typeof meta>

export const TLDselected: Story = {
    args: {
        tld: '.com',
        isSelected: true
    }
}
export const TLDNotselected: Story = {
    args: {
        tld: '.com',
        isSelected: false
    }
}

