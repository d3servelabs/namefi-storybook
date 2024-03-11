import type { Meta, StoryObj } from "@storybook/react";
import { Cart } from "../../../pages/RegistrationFlow/Registration";

const meta = {
    title: 'Components/RegistrationFlow/Cart',
    component: Cart,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof Cart>

export default meta;
type Story = StoryObj<typeof meta>

export const CartStory: Story = {
    args: {
        checkedOut: false,
        isConnectWallet: false,
        isConnectWalletError: false
    }
}