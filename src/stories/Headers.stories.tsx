import type { Meta, StoryObj } from '@storybook/react';

import { Headers } from '../components/Headers';
import '../index.css'
import '../App.css'
const meta = {
  title: 'Components/Headers',
  component: Headers,
  tags: ['autodocs'],
  argTypes:{
    onLogin: { action: 'login' },
    onSignOut: { action: 'signout' },
    onNetworkClicked: { action: 'network-clicked' },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Headers>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const LoggedIn: Story = {
 args:{
   balance: 20.134,
   userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
 }
};


export const Loading: Story = {
 args:{
    userLoading:true,
    balanceLoading:true,
 }
};

export const LoggedOut: Story = {
    args: {

    }
};
