import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBell } from "../../components/NotificationBell";

const meta = {
    title: 'Components/NotificationBell',
    component: NotificationBell,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof NotificationBell>

export default meta;
type Story = StoryObj<typeof meta>

export const Bell : Story = {
    args: {
        isNotified: true
    }
}