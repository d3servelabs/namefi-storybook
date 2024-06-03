import type { Meta, StoryObj } from "@storybook/react";
import { GetNfscCard } from "../../../components/Templates/GetNfscCard/GetNfscCard";

const meta = {
    title: 'Components/GetNfscCard',
    component: GetNfscCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof GetNfscCard>

export default meta;
type Story = StoryObj<typeof GetNfscCard>

export const BlankGetNfscCard: Story = {
    args: {
        onClickChip: null
    }
}
