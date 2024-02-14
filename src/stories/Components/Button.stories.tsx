import type { Meta, StoryObj } from "@storybook/react";
import {Button} from '../../components/Button'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Button1: Story = {
    args: {
        label: 'Register another one',
        onClick: () => {},
        backgroundColor: '#111',
        borderColor: '#fff'
    }
}