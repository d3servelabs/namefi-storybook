import type { Meta, StoryObj } from "@storybook/react";
import { LoadingButton } from "../components/LoadingButton";

const meta = {
    title: 'Components/LoadingButton',
    component: LoadingButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof LoadingButton>

export default meta;

type Story = StoryObj<typeof meta>

export const LoadingButtonStory: Story = {}