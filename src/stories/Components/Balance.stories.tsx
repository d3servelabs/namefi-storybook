import type { Meta, StoryObj } from "@storybook/react";
import { Balance } from "@components/Balance";

const meta = {
    title: 'Components/Balance',
    component: Balance,
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof Balance>

export default meta;

type Story = StoryObj<typeof meta>
export const BalanceStory : Story = {
    args: {
      balance: 20.134,
    }
}
