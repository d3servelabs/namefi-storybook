import type { Meta, StoryObj } from "@storybook/react";
import { TransferButton } from "@pages/DomainOwned/TransferButton";

const meta = {
    title: 'Components/TransferButton',
    component: TransferButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof TransferButton>

export default meta;

type Story = StoryObj<typeof meta>

export const Transfer: Story = {
    args: {
        transferText: 'Transfer',
        status: 'TRANSFER'
    }
}
export const Transferring: Story = {
    args: {
        transferText: 'Transferring',
        done: false,
        status: 'TRANSFERRING'
    }
}
export const Done: Story = {
    args: {
        transferText: 'Done',
        done: true,
        status: 'TRANSFERRING'
    }
}
