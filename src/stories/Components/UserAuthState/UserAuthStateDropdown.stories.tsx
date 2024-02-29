import type { Meta, StoryObj } from '@storybook/react';
import UserAuthStateDropDown from '../../../components/Templates/UserAuthState/Dropdown';
import React from 'react';

const meta = {
	title: 'Components/UserAuthState/Dropdown',
	component: UserAuthStateDropDown.Root,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		userAddress: { type: 'string' },
		userLoading: { type: 'boolean' },
	},
} as Meta<typeof UserAuthStateDropDown.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
	args: {
		userAddress: undefined,
		userLoading: true,
	} as any,
	render: ({ userAddress, userLoading }: any) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header userAddress={userAddress} loading={userLoading} />
				<UserAuthStateDropDown.Body />
				<UserAuthStateDropDown.Footer userAddress={userAddress} loading={userLoading} />
			</UserAuthStateDropDown.Root>
		);
	},
};

export const Connected: Story = {
	args: {
		userAddress: '0xC90a7048D663EbADccbCb50930778ddDaeb72385',
	} as any,
	render: ({ userAddress, userLoading }: any) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header userAddress={userAddress} loading={userLoading} />
				<UserAuthStateDropDown.Body />
				<UserAuthStateDropDown.Footer userAddress={userAddress} loading={userLoading} />
			</UserAuthStateDropDown.Root>
		);
	},
};

export const Disconnected: Story = {
	args: {
		userAddress: undefined,
	} as any,
	render: ({ userAddress, userLoading }: any) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header userAddress={userAddress} loading={userLoading} />
				<UserAuthStateDropDown.Body />
				<UserAuthStateDropDown.Footer userAddress={userAddress} loading={userLoading} />
			</UserAuthStateDropDown.Root>
		);
	},
};
