import type { Meta, StoryObj } from '@storybook/react';
import { UserAuthState } from '@namefi/ui';
import { ShortAddress } from '@namefi/ui';

const UserAuthStateTile = UserAuthState.Tile;

const meta = {
	title: 'Components/UserAuthState/Tile',
	component: UserAuthStateTile.Root,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		userAddress: { type: 'string' },
		userLoading: { type: 'boolean' },
	},
} satisfies Meta<typeof UserAuthStateTile.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
	render: () => {
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
						className={'mr-3 max-w-[22px]'}
						alt="disconnect image"
						role="svg"
					/>
				</UserAuthStateTile.Action>
			</UserAuthStateTile.Root>
		);
	},
};

export const LoggedIn: Story = {
	argTypes: {
		userAddress: { type: 'string' },
	},
	args: {
		userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
	},
	render: ({ userAddress }) => {
		return (
			<UserAuthStateTile.Root backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={1} />
				<UserAuthStateTile.Label>
					<ShortAddress address={userAddress} />
				</UserAuthStateTile.Label>
				<UserAuthStateTile.Action>
					<img
						src={userAddress ? '/assets/disconnect.svg' : '/assets/arrow-right1.svg'}
						className={userAddress ? 'max-w-[44px]' : 'mr-3 max-w-[22px]'}
						alt="disconnect image"
						role="svg"
					/>
				</UserAuthStateTile.Action>
			</UserAuthStateTile.Root>
		);
	},
};
export const Loading: Story = {
	argTypes: {
		userLoading: { type: 'boolean' },
	},
	args: {
		userLoading: true,
	},
	render: () => {
		return (
			<UserAuthStateTile.Root backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={1} />
				<UserAuthStateTile.Label className={'pr-8'}>Loading...</UserAuthStateTile.Label>
			</UserAuthStateTile.Root>
		);
	},
};
export const NetworkError: Story = {
	render: () => {
		return (
			<UserAuthStateTile.Root backgroundColor={'#111'}>
				<UserAuthStateTile.Network network={0} />
				<UserAuthStateTile.Label className={'pr-8'}>Wrong Network</UserAuthStateTile.Label>
			</UserAuthStateTile.Root>
		);
	},
};
