import type { Meta, StoryObj } from "@storybook/react";
import { LoggedOutButton } from "../components/LoggedOutButton";

const meta = {
    title: 'Components/LoggedOutButton',
    component: LoggedOutButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof LoggedOutButton>

export default meta;

type Story = StoryObj<typeof meta>

export const LoggedOutButtonStory: Story = {
    args: {
        
    }
}