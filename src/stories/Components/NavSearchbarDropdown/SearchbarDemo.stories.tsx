import type { Meta, StoryObj } from "@storybook/react";
import { SearchBarDemo } from "../../../components/NavbarSearchBar/SearchBarDemo";

const meta = {
    title: 'Components/NavSearchbarDropdown/SearchBarDemo',
    component: SearchBarDemo,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof SearchBarDemo>

export default meta;
type Story = StoryObj<typeof meta>

export const Dropdown: Story = {
    args: {
        isTdSelected: false,
        status: 'AVAILABLE',
        price: 24
    }
} 