import type { Meta, StoryObj } from "@storybook/react";
import { TryAnother } from "../../../components/NavbarSearchBar/TryAnother";

const meta = {
    title: 'Components/NavSearchbarDropdown/TryAnother',
    component: TryAnother,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof TryAnother>

export default meta;
type Story = StoryObj<typeof meta>

export const Tryanother: Story = {
    args: {
    }
} 