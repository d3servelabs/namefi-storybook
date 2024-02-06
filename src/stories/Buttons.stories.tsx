import type { Meta, StoryObj } from "@storybook/react";
import {Buttons} from '../components/Buttons'

const meta = {
    title: 'Components/Buttons',
    component: Buttons,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
        color: {
            control: 'color'
        },
        borderColor: {
            control: 'color'
        }
    }
}satisfies Meta<typeof Buttons>

export default meta;
type Story = StoryObj<typeof meta>

export const Button1: Story = {
    args: {
        label: 'Next'
    }
}