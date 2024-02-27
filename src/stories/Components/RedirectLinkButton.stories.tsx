import type { Meta, StoryObj } from "@storybook/react";
import { RedirectLinkButton } from "../../components/RedirectLinkButton";
const meta = {
    title: 'Components/RedirectLinkButton',
    component: RedirectLinkButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof RedirectLinkButton>

export default meta;

type Story = StoryObj<typeof meta>

export const Progress: Story = {
    args: {
        linkName:'Opensea',
        linkUrl: 'Opensea.com',
        redirectType: 'View on'
    }
}