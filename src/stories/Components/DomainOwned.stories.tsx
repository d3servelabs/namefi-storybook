import type { Meta, StoryObj } from "@storybook/react";
import { DomainOwned } from "../../pages/DomainOwned/DomainOwned";

const meta = {
    title: 'Components/DomainOwned',
    component: DomainOwned,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof DomainOwned>

export default meta;
type Story = StoryObj<typeof meta>

export const View: Story = {
    args: {
        status: 'VIEW'
    }
}