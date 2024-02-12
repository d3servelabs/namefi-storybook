import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../../components/Header';
import '../../index.css'
import '../../App.css'
const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes:{
    authStateProps: {
      onLogin: { action: 'login' },
      onSignOut: { action: 'signout' },
      onNetworkClicked: { action: 'network-clicked' },
    }
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const LoggedIn: Story = {
 args:{
   authStateProps: {
      userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
      balanceProps: {
        balance: 20.134,
      }
   },
   
   headerSearchProps: {
    placeholderText: 'Search another domain'
   },
   includeSearchBar: true
 }
};

 
export const Loading: Story = {
 args:{
    authStateProps: {
      userLoading: true,
      balanceLoading: true
    }
 }
};

export const LoggedOut: Story = {
    
};
