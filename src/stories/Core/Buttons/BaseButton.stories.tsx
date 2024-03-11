import type { Meta, StoryObj } from "@storybook/react";
import {Button as Component} from '../../../components/Core/Buttons/Button'
import {ButtonText} from "../../../components/Core/Buttons/ButtonText";

const meta = {
    title: 'Core/Buttons/BaseButton',
    component: Component,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof Component>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = { 
    args: {
        onClick: () => {},
        backgroundColor: '#111',
        borderColor: '#fff',
        content: 'Button',
        
    } as any , 
    render: ({content, ...props}: any) => {
        return (
            <Component>
                <ButtonText>{content}</ButtonText>
            </Component>
        )
    }
}
