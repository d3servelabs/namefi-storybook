import type { Meta, StoryObj } from "@storybook/react";
import {Button} from '@components/Buttons/Button'

const meta = {
    title: 'Components/Buttons/BaseButton',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        onClick: () => {},
        backgroundColor: '#111',
        borderColor: '#fff',
        children: <Button.Text>Button</Button.Text>
    }
}
