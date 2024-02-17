import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "@pages/DomainOwned/ProgressBar";

const meta = {
    title: 'Components/DomainOwned/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof ProgressBar>

export default meta;

type Story = StoryObj<typeof meta>

export const Progress: Story = {
    args: {
        progressWidth: 30,
        isLoading: false
    }
}