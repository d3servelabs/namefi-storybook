import type { Meta, StoryObj } from "@storybook/react";
import { WalletDropdown } from "../../components/WalletDropdown";

const meta = {
    title: 'Components/WalletDropdown',
    component: WalletDropdown,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof WalletDropdown>

export default meta;
type Story = StoryObj<typeof meta>

export const FlowStepStory: Story = {
    args: {
        
    }
}