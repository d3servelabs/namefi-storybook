import type { Meta, StoryObj } from "@storybook/react";
import { Balance } from "../../components/Core/Balance";

const meta = {
    title: 'Core/Balance',
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
