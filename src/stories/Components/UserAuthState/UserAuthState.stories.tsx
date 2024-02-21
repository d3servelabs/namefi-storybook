import type { Meta, StoryObj } from "@storybook/react";
import { UserAuthState } from "@components/UserAuthState/UserAuthState";

const meta = {
    title: 'Components/UserAuthState',
    component: UserAuthState,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
        },
    },
    argTypes:{
        userAddress: {type: 'string'},
        userLoading: {type: 'boolean'},
        balanceLoading: {type: 'boolean'},
      onLogin: { action: 'login' },
      onSignOut: { action: 'signout' },
      onNetworkClicked: { action: 'network-clicked' },
    },
}satisfies Meta<typeof UserAuthState>

export default meta; 

type Story = StoryObj<typeof meta>

export const Default: Story = {}
