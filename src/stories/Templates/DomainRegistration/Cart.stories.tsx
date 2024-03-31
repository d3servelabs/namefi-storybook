import type { Meta, StoryObj } from "@storybook/react";
import { Demo } from "../../../components/Templates/RegistrationFlow/Cart/Demo";

const meta = {
    title: 'Templates/DomainRegistration/Cart',
    component: Demo,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof Demo>

export default meta;
type Story = StoryObj<typeof meta>

export const CartStory: Story = {
    args: {
        checkedOut: false,
        isConnectWallet: false,
        isConnectWalletError: false,
        years: 3,
        domainName: "example.com",
    }
}