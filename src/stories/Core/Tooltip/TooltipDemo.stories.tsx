import type { Meta, StoryObj } from "@storybook/react";
import { TooltipDemo } from "../../../components/Core/Tooltip/TooltipDemo";

const meta = {
    title: 'Core/TooltipDemo',
    component: TooltipDemo,
    tags: ['autodics'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof TooltipDemo>

export default meta;

type Story = StoryObj<typeof meta>
export const TooltipStory : Story = {}
