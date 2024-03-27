import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMessage } from "../../../components/NavbarSearchBar/DropdownMessage";

const meta = {
    title: 'Components/NavSearchbarDropdown/DropdownMessage',
    component: DropdownMessage,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof DropdownMessage>

export default meta;
type Story = StoryObj<typeof meta>

export const Message: Story = {
    args: {
        status: 'AVAILABLE',
        children: 'Available'
    }
} 