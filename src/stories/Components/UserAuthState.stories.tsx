import type { Meta, StoryObj } from "@storybook/react";
import { UserAuthState } from "@components/UserAuthState";

const meta = {
    title: 'Components/UserAuthState',
    component: UserAuthState,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes:{
      onLogin: { action: 'login' },
      onSignOut: { action: 'signout' },
      onNetworkClicked: { action: 'network-clicked' },
    },
}satisfies Meta<typeof UserAuthState>

export default meta;

type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {}

export const LoggedIn: Story = {
    args:{
      balance: 20.134,
      userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
    }
};
export const Loading: Story = {
    args:{
      userLoading: true
    }
   };