import type { Meta, StoryObj } from "@storybook/react";
import { UnlockButton } from "@pages/DomainOwned/UnlockButton";

const meta = {
    title: 'Components/UnlockButton',
    component: UnlockButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof UnlockButton>

export default meta;

type Story = StoryObj<typeof meta>

export const Unlock: Story = {
    args: {
        isUnlocked: true
    }
}
export const Locked: Story = {
    args: {
        isUnlocked: false
    }
}
