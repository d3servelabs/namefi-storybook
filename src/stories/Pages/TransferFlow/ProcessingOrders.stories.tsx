import type { Meta, StoryObj } from "@storybook/react";
import { ProcessingOrders } from "../../../pages/RegistrationFlow/ProcessingOrders";

const meta = {
    title: 'Components/RegistrationFlow/ProcessingOrders',
    component: ProcessingOrders,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof ProcessingOrders>

export default meta;
type Story = StoryObj<typeof meta>

export const CartStory: Story = {
    args: {
        checkedOut: true
    }
}