import type { Meta, StoryObj } from '@storybook/react';
import UserAuthStateTile from '../../../components/UserAuthState/Tile';
import ShortAddress from '../../../components/ShortAddress';
import React from 'react';

const meta = {
	title: 'Components/UserAuthState/Tile',

	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
} satisfies Meta<{userAddress?:string,userLoading?:boolean}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
	render: (props) => {
		return (
			<UserAuthStateTile.Root backgroundColor={'#111111b3'}>
				<UserAuthStateTile.Network network={1} />
				<UserAuthStateTile.Label>Connect Wallet</UserAuthStateTile.Label>
				<UserAuthStateTile.Action>
					<img
						onClick={(event) => {
							event.stopPropagation();
							// onSignOut?.()
						}}
						src={'/assets/arrow-right1.svg'}
						className={'max-w-[22px] mr-3'}
						alt="disconnect image"
						role="svg"
					/>
				</UserAuthStateTile.Action>
			</UserAuthStateTile.Root>
		);
	},
};

export const LoggedIn: Story = {
	args: {
		userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
	} as any,
	render: ({ userAddress }:any) => {
		return (
			<UserAuthStateTile.Root backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={1} />
				<UserAuthStateTile.Label>
					<ShortAddress address={userAddress} />
				</UserAuthStateTile.Label>
				<UserAuthStateTile.Action>
					<img
						src={userAddress ? '/assets/disconnect.svg' : '/assets/arrow-right1.svg'}
						className={userAddress ? 'max-w-[44px]' : 'max-w-[22px] mr-3'}
						alt="disconnect image"
						role="svg"
					/>
				</UserAuthStateTile.Action>
			</UserAuthStateTile.Root>
		);
	},
};
export const Loading: Story = {
	args: {
		userLoading: true,
	} as any,
	render: (props) => {
		return (
			<UserAuthStateTile.Root backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={1} />
				<UserAuthStateTile.Label className={'pr-8'}>Loading...</UserAuthStateTile.Label>
			</UserAuthStateTile.Root>
		);
	},
};
export const NetworkError: Story = {
	render: (props) => {
		return (
			<UserAuthStateTile.Root backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={0} />
				<UserAuthStateTile.Label className={'pr-8'}>Wrong Network</UserAuthStateTile.Label>
			</UserAuthStateTile.Root>
		);
	},
};
