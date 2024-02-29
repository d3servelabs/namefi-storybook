import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBell } from "../../components/Core/NotificationBell";

const meta = {
    title: 'CoreNotificationBell',
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