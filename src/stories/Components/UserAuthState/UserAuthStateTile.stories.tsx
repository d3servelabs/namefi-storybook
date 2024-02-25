import type { Meta, StoryObj } from '@storybook/react';
import { UserAuthStateTile } from '@components/UserAuthState/Tile/UserAuthStateTile';
import { UserAuthStateTileLabel } from '@components/UserAuthState/Tile/UserAuthStateTileLabel';
import  ShortAddress  from '@components/ShortAddress';
import { UserAuthStateTileAction } from '@components/UserAuthState/Tile/UserAuthStateTileAction';
import React from 'react';



const meta = {
	title: 'Components/UserAuthState/Tile',
	component: UserAuthStateTile,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
	},
} satisfies Meta<typeof UserAuthStateTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
	render: (props) => {
		return (
			<UserAuthStateTile backgroundColor={'#111111b3'}>
				<UserAuthStateTile.Network network={1} />
				<UserAuthStateTileLabel>Connect Wallet</UserAuthStateTileLabel>
				<UserAuthStateTileAction>
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
				</UserAuthStateTileAction>
			</UserAuthStateTile>
		);
	},
};

export const LoggedIn: Story = {
	args: {
		userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
	},
	render: ({ userAddress }) => {
		return (
			<UserAuthStateTile backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={1} />
				<UserAuthStateTileLabel>
					<ShortAddress address={userAddress} />
				</UserAuthStateTileLabel>
				<UserAuthStateTileAction>
					<img
						src={userAddress ? '/assets/disconnect.svg' : '/assets/arrow-right1.svg'}
						className={userAddress ? 'max-w-[44px]' : 'max-w-[22px] mr-3'}
						alt="disconnect image"
						role="svg"
					/>
				</UserAuthStateTileAction>
			</UserAuthStateTile>
		);
	},
};
export const Loading: Story = {
	args: {
		userLoading: true,
	},
	render: (props) => {
		return (
			<UserAuthStateTile backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={1} />
				<UserAuthStateTileLabel className={'pr-8'}>Loading...</UserAuthStateTileLabel>
			</UserAuthStateTile>
		);
	},
};
export const NetworkError: Story = {
	render: (props) => {
		return (
			<UserAuthStateTile backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={0} />
				<UserAuthStateTileLabel className={'pr-8'}>Wrong Network</UserAuthStateTileLabel>
			</UserAuthStateTile>
		);
	},
};
