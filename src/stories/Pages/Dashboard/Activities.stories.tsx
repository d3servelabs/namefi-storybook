import type { Meta, StoryObj } from "@storybook/react";
import ActivitiesListItem from "../../../components/Templates/DashBoard/Activities/List/ActivitiesListItem";


const meta = {
    title: 'Pages/Dashboard/Activities',
    component: ActivitiesListItem,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof ActivitiesListItem>

export default meta;

type Story = StoryObj<typeof meta>

export const ActivitiesStory: Story = {
    args: {
        todo: 'Register',
        domainName: 'Namely.io',
        isLoading: true
    }
}