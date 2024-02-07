import type { Meta, StoryObj } from "@storybook/react";

import { Flow1 } from "../components/flow/flow1";

const meta = {
    title: 'Flows/Flow1',
    component: Flow1,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}satisfies Meta<typeof Flow1>

export default meta;

type Story = StoryObj<typeof meta>

export const Flow: Story = {}