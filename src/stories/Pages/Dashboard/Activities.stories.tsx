import type { Meta, StoryObj } from "@storybook/react";
import { Activities } from "@pages/DashBoard/Activities";

const meta = {
    title: 'Pages/Dashboard/Activities',
    component: Activities,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Activities>

export default meta;

type Story = StoryObj<typeof meta>

export const ActivitiesStory: Story = {
    args: {
        todo: 'Register',
        domainName: 'Namely.io',
        isLoading: true
    }
}