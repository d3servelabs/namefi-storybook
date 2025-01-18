import type { Meta, StoryObj } from '@storybook/react';
import { ShortAddress, CopyIconButton, UserAuthState } from '@namefi/ui';
import { BorderSplitIcon, PersonIcon } from '@radix-ui/react-icons';

const UserAuthStateDropDown = UserAuthState.Dropdown;

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
	},
	render: ({ userAddress, userLoading }) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header.Root>
					<>
						<UserAuthStateDropDown.Header.UserAvatarRoot>
							<img src={'/assets/maskuser.svg'} />
						</UserAuthStateDropDown.Header.UserAvatarRoot>
						<UserAuthStateDropDown.Header.UserLabel>
							<ShortAddress address={userAddress} loading={userLoading} />
						</UserAuthStateDropDown.Header.UserLabel>
						<CopyIconButton value={userAddress} />
					</>

					<>
						<UserAuthStateDropDown.Header.NetworkLogo chainId={1} />
						<UserAuthStateDropDown.Header.ConnectionStatus
							loading={userLoading}
							connected={!!userAddress}>
							{userAddress ? 'connected' : 'disconnected'}
						</UserAuthStateDropDown.Header.ConnectionStatus>
					</>
				</UserAuthStateDropDown.Header.Root>
				{/*<UserAuthStateDropDown.Body />*/}

				<UserAuthStateDropDown.Footer.Root>
					{(userAddress || userLoading) && (
						<UserAuthStateDropDown.Footer.SwitchButton
							disabled={userLoading}
							className={userLoading && 'opacity-50 grayscale-[50%]'}>
							Switch Wallet
						</UserAuthStateDropDown.Footer.SwitchButton>
					)}
					{/*{userAddress && <Footer.ExistButton>{signedIn ? 'SignOut' : 'Disconnect'}</Footer.ExistButton>}*/}
				</UserAuthStateDropDown.Footer.Root>
			</UserAuthStateDropDown.Root>
		);
	},
};

export const Connected: Story = {
	args: {
		userAddress: '0xC90a7048D663EbADccbCb50930778ddDaeb72385',
	},
	render: ({ userAddress, userLoading }) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header.Root>
					<>
						<UserAuthStateDropDown.Header.UserAvatarRoot>
							<img src={'/assets/maskuser.svg'} />
						</UserAuthStateDropDown.Header.UserAvatarRoot>
						<UserAuthStateDropDown.Header.UserLabel>
							<ShortAddress address={userAddress} loading={userLoading} />
						</UserAuthStateDropDown.Header.UserLabel>
					</>
					<div className={'max-sm:hidden sm:contents'}>
						<UserAuthStateDropDown.Header.NetworkLogo chainId={1} />
						<UserAuthStateDropDown.Header.ConnectionStatus
							loading={userLoading}
							connected={!!userAddress}>
							{userAddress ? 'connected' : 'disconnected'}
						</UserAuthStateDropDown.Header.ConnectionStatus>
					</div>
				</UserAuthStateDropDown.Header.Root>
				{/*<UserAuthStateDropDown.Body />*/}

				<UserAuthStateDropDown.Footer.Root>
					{(userAddress || userLoading) && (
						<UserAuthStateDropDown.Footer.SwitchButton
							disabled={userLoading}
							className={userLoading && 'opacity-50 grayscale-[50%]'}>
							Switch Wallet
						</UserAuthStateDropDown.Footer.SwitchButton>
					)}
					{userAddress && (
						<UserAuthStateDropDown.Footer.ExitButton>
							{'Disconnect'}
						</UserAuthStateDropDown.Footer.ExitButton>
					)}
				</UserAuthStateDropDown.Footer.Root>
			</UserAuthStateDropDown.Root>
		);
	},
};

export const Disconnected: Story = {
	args: {
		userAddress: undefined,
	},
	render: ({ userAddress, userLoading }) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header.Root>
					<>
						<UserAuthStateDropDown.Header.UserAvatarRoot>
							<img src={'/assets/maskuser.svg'} />
						</UserAuthStateDropDown.Header.UserAvatarRoot>
						<UserAuthStateDropDown.Header.UserLabel>
							<ShortAddress address={userAddress} loading={userLoading} />
						</UserAuthStateDropDown.Header.UserLabel>
					</>
					<div className={'max-sm:hidden sm:contents'}>
						<UserAuthStateDropDown.Header.NetworkLogo chainId={1} />
						<UserAuthStateDropDown.Header.ConnectionStatus
							loading={userLoading}
							connected={!!userAddress}>
							{userAddress ? 'connected' : 'disconnected'}
						</UserAuthStateDropDown.Header.ConnectionStatus>
					</div>
				</UserAuthStateDropDown.Header.Root>
				{/*<UserAuthStateDropDown.Body></UserAuthStateDropDown.Body>*/}
				{/*<UserAuthStateDropDown.Footer loading={userLoading} />*/}
			</UserAuthStateDropDown.Root>
		);
	},
};

export const SignedIn: Story = {
	args: {
		userAddress: '0xC90a7048D663EbADccbCb50930778ddDaeb72385',
	},
	render: ({ userAddress, userLoading, balance = 10.32 }) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header.Root userAddress={userAddress}>
					<>
						<UserAuthStateDropDown.Header.UserAvatarRoot>
							<img src={'/assets/maskuser.svg'} />
						</UserAuthStateDropDown.Header.UserAvatarRoot>
						<UserAuthStateDropDown.Header.UserLabel>
							<ShortAddress address={userAddress} loading={userLoading} />
						</UserAuthStateDropDown.Header.UserLabel>
					</>
					<div className={'max-sm:hidden sm:contents'}>
						<UserAuthStateDropDown.Header.NetworkLogo chainId={1} />
						<UserAuthStateDropDown.Header.ConnectionStatus
							loading={userLoading}
							connected={!!userAddress}>
							Signed In
						</UserAuthStateDropDown.Header.ConnectionStatus>
					</div>
				</UserAuthStateDropDown.Header.Root>
				<UserAuthStateDropDown.Body.Root>
					{!!userAddress && (
						<UserAuthStateDropDown.Nav.List>
							<UserAuthStateDropDown.Nav.Item
								icon={<BorderSplitIcon width={24} height={24} />}
								href={'#'}
								onClick={() => {
									alert('Dashboard clicked');
								}}>
								Dashboard
							</UserAuthStateDropDown.Nav.Item>
							<UserAuthStateDropDown.Nav.Item
								icon={<PersonIcon width={24} height={24} />}
								href={'#'}
								onClick={() => {
									alert('Whois clicked');
								}}>
								WHOIS Profile
							</UserAuthStateDropDown.Nav.Item>
						</UserAuthStateDropDown.Nav.List>
					)}
					{!!userAddress && !!balance && (
						<UserAuthStateDropDown.Body.BalanceTile balance={balance} />
					)}
				</UserAuthStateDropDown.Body.Root>

				<UserAuthStateDropDown.Footer.Root>
					{(userAddress || userLoading) && (
						<UserAuthStateDropDown.Footer.SwitchButton
							disabled={userLoading}
							className={userLoading && 'opacity-50 grayscale-[50%]'}>
							Switch Wallet
						</UserAuthStateDropDown.Footer.SwitchButton>
					)}
					{userAddress && (
						<UserAuthStateDropDown.Footer.ExitButton>
							{'Disconnect'}
						</UserAuthStateDropDown.Footer.ExitButton>
					)}
				</UserAuthStateDropDown.Footer.Root>
			</UserAuthStateDropDown.Root>
		);
	},
};
