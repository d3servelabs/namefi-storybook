import type { Meta, StoryObj } from "@storybook/react";
import {SolidButton as Component} from "../../../components/Core/Buttons/SolidButton";
import {ButtonText} from "../../../components/Core/Buttons/ButtonText";

const meta = {
    title: 'CoreButtons/BaseButton/Variants',
    component: Component, 
    parameters: {
        layout: 'centered'
    },
    argTypes:{
        onClick: {
            action:'click'
        }
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof Component>

export default meta;
type Story = StoryObj<typeof meta>

export const SolidButton: Story = {
    argTypes:{
        content:{type:'string'},
    } as any,
    args: {
        onClick: () => {},
        content: 'Button',
    } as any,
    render: ({ content, ...props }: any) => {

        return (
            <Component {...props} >
                <ButtonText>{content}</ButtonText>
            </Component>
        );
    },
}
