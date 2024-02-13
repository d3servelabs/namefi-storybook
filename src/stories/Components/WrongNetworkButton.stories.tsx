import type { Meta, StoryObj } from "@storybook/react";
import { WrongNetworkButton } from "../../components/WrongNetworkButton";

const meta = {
    title: 'Components/WrongNetworkButton',
    component: WrongNetworkButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof WrongNetworkButton>

export default meta;

type Story = StoryObj<typeof meta>

export const WrongNetworkButtonStory: Story = {
    args: {
        
    }
}