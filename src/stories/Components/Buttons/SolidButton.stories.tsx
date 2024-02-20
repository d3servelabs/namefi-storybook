import type { Meta, StoryObj } from "@storybook/react";
import {SolidButton as Component} from "@components/Buttons/SolidButton";
import {Button, ButtonText} from "@components/Buttons/Button";
import {ButtonLoadingContent} from "@components/Buttons/LoadingButton";

const meta = {
    title: 'Components/Buttons/BaseButton/Variants',
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
