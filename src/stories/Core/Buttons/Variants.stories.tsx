import type { Meta, StoryObj } from "@storybook/react";
import {SolidButton} from "../../../components/Core/Buttons/SolidButton";
import {ButtonText} from "../../../components/Core/Buttons/ButtonText";
import {GhostButton} from "../../../components/Core/Buttons/GhostButton";
import {ButtonLoadingContent} from "../../../components/Core/Buttons/ButtonLoadingContent";
import { Button } from '../../../components/Core/Buttons/Button';
import {ArrowRightIcon} from "@radix-ui/react-icons";

const meta = {
    title: 'Core/Buttons/BaseButton/Variants',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    argTypes:{
        onClick: {
            action:'click'
        }
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>

export const Solid: Story = {
    argTypes:{
        content:{type:'string'},
    } as any,
    args: {
        onClick: () => {},
        content: 'Button',
    } as any,
    render: ({ content, ...props }: any) => {

        return (
            <SolidButton {...props} >
                <ButtonText>{content}</ButtonText>
            </SolidButton>
        );
    },
}

export const Ghost: Story = {
    argTypes:{
        content:{type:'string'},
    } as any,
    args: {
        onClick: () => {},
        content: 'Button',
    } as any,
    render: ({ content, ...props }: any) => {

        return (
            <GhostButton {...props} >
                <ButtonText>{content}</ButtonText>
            </GhostButton>
        );
    },
}

export const LoadingButton: Story = {
    argTypes:{
        loadingLabel:{type:'string'},
        content:{type:'string'},
    } as any,
    args: {
        onClick: () => {},
        loadingLabel: 'Loading',
        content: 'Button',
    } as any,
    render: ({ loadingLabel, content, ...props }: any) => {

        return (
            <Button {...props} loadingContent={<ButtonLoadingContent>{loadingLabel}</ButtonLoadingContent>}>
                <ButtonText>{content}</ButtonText> <ArrowRightIcon className={'text-emerald-500 w-6 h-6 stroke-2'} />
            </Button>
        );
    },
};
