import type { Meta, StoryObj } from "@storybook/react";
import { StepDiagram } from "../../components/StepDiagram";

const meta = {
    title: 'Components/StepDiagram',
    component: StepDiagram,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof StepDiagram>

export default meta;
type Story = StoryObj<typeof meta>

export const Bell : Story = {
    args: {
        stepCount: 4,
        currentStep: 2
    }
}