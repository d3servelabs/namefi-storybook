import type { Meta, StoryObj } from '@storybook/react';
import  UserAuthStateDropDown from '../../../components/Templates/UserAuthState/Dropdown';
import React from 'react';
import ShortAddress from "../../../components/Core/ShortAddress";
import * as Footer from "../../../components/Templates/UserAuthState/Dropdown/Footer";
import {cn} from "../../../utils/cn";
import Root from "../../../components/Templates/UserAuthState/Dropdown/Body/Root";
import NavList from "../../../components/Templates/UserAuthState/Dropdown/Nav/List";
import NavItem from "../../../components/Templates/UserAuthState/Dropdown/Nav/Item";
import {BorderSplitIcon, PersonIcon} from "@radix-ui/react-icons";
import BalanceTile from "../../../components/Templates/UserAuthState/Dropdown/Body/BalanceTile";

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
	render: ({ userAddress, userLoading, balance = 10.32 }: any) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header.Root userAddress={userAddress}>
					<UserAuthStateDropDown.Header.UserAvatarRoot>
						<img src={'/assets/maskuser.svg'}/>
					</UserAuthStateDropDown.Header.UserAvatarRoot>
					<UserAuthStateDropDown.Header.UserLabel>
						<ShortAddress address={userAddress} loading={userLoading}/>
					</UserAuthStateDropDown.Header.UserLabel>
					<UserAuthStateDropDown.Header.NetworkLogo chainId={1}/>
					<UserAuthStateDropDown.Header.ConnectionStatus loading={userLoading} connected={!!userAddress}>
						{userAddress? "connected":"disconnected"}
					</UserAuthStateDropDown.Header.ConnectionStatus>

				</UserAuthStateDropDown.Header.Root>
				{/*<UserAuthStateDropDown.Body />*/}

				<UserAuthStateDropDown.Footer.Root>
					{(userAddress || userLoading) && (
						<UserAuthStateDropDown.Footer.SwitchButton
							disabled={userLoading}
							className={cn(userLoading && 'grayscale-[50%] opacity-50')}>
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
	} as any,
	render: ({ userAddress, userLoading }: any) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header.Root userAddress={userAddress}>
					<UserAuthStateDropDown.Header.UserAvatarRoot>
						<img src={'/assets/maskuser.svg'}/>
					</UserAuthStateDropDown.Header.UserAvatarRoot>
					<UserAuthStateDropDown.Header.UserLabel>
						<ShortAddress address={userAddress} loading={userLoading}/>
					</UserAuthStateDropDown.Header.UserLabel>
					<UserAuthStateDropDown.Header.NetworkLogo chainId={1}/>
					<UserAuthStateDropDown.Header.ConnectionStatus loading={userLoading} connected={!!userAddress}>
						{userAddress? "connected":"disconnected"}
					</UserAuthStateDropDown.Header.ConnectionStatus>

				</UserAuthStateDropDown.Header.Root>
				{/*<UserAuthStateDropDown.Body />*/}

				<UserAuthStateDropDown.Footer.Root>
					{(userAddress || userLoading) && (
						<UserAuthStateDropDown.Footer.SwitchButton
							disabled={userLoading}
							className={cn(userLoading && 'grayscale-[50%] opacity-50')}>
							Switch Wallet
						</UserAuthStateDropDown.Footer.SwitchButton>
					)}
					{userAddress && <UserAuthStateDropDown.Footer.ExitButton>{'Disconnect'}</UserAuthStateDropDown.Footer.ExitButton>}
				</UserAuthStateDropDown.Footer.Root>
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
				<UserAuthStateDropDown.Header.Root userAddress={userAddress}>
					<UserAuthStateDropDown.Header.UserAvatarRoot>
						<img src={'/assets/maskuser.svg'}/>
					</UserAuthStateDropDown.Header.UserAvatarRoot>
					<UserAuthStateDropDown.Header.UserLabel>
						<ShortAddress address={userAddress} loading={userLoading}/>
					</UserAuthStateDropDown.Header.UserLabel>
					<UserAuthStateDropDown.Header.NetworkLogo chainId={1}/>
					<UserAuthStateDropDown.Header.ConnectionStatus loading={userLoading} connected={!!userAddress}>
						{userAddress? "connected":"disconnected"}
					</UserAuthStateDropDown.Header.ConnectionStatus>

				</UserAuthStateDropDown.Header.Root>
				{/*<UserAuthStateDropDown.Body></UserAuthStateDropDown.Body>*/}
				{/*<UserAuthStateDropDown.Footer userAddress={userAddress} loading={userLoading} />*/}
			</UserAuthStateDropDown.Root>
		);
	},
};



export const SignedIn: Story = {
	args: {
		userAddress: '0xC90a7048D663EbADccbCb50930778ddDaeb72385',
	} as any,
	render: ({ userAddress, userLoading, balance = 10.32 }: any) => {
		return (
			<UserAuthStateDropDown.Root>
				<UserAuthStateDropDown.Header.Root userAddress={userAddress}>
					<UserAuthStateDropDown.Header.UserAvatarRoot>
						<img src={'/assets/maskuser.svg'}/>
					</UserAuthStateDropDown.Header.UserAvatarRoot>
					<UserAuthStateDropDown.Header.UserLabel>
						<ShortAddress address={userAddress} loading={userLoading}/>
					</UserAuthStateDropDown.Header.UserLabel>
					<UserAuthStateDropDown.Header.NetworkLogo chainId={1}/>
					<UserAuthStateDropDown.Header.ConnectionStatus loading={userLoading} connected={!!userAddress}>
						Signed In
					</UserAuthStateDropDown.Header.ConnectionStatus>

				</UserAuthStateDropDown.Header.Root>
				<UserAuthStateDropDown.Body.Root>
					{!!userAddress && (
						<UserAuthStateDropDown.Nav.List>
							<UserAuthStateDropDown.Nav.Item
								icon={<BorderSplitIcon width={24} height={24} />}
								href={'#'}
								onClick={() => {}}>
								Dashboard
							</UserAuthStateDropDown.Nav.Item>
							<UserAuthStateDropDown.Nav.Item
								icon={<PersonIcon width={24} height={24} />}
								href={'#'}
								onClick={() => {}}>
								WHOIS Profile
							</UserAuthStateDropDown.Nav.Item>
						</UserAuthStateDropDown.Nav.List>
					)}
					{!!userAddress && !!balance && <UserAuthStateDropDown.Body.BalanceTile balance={balance} />}
				</UserAuthStateDropDown.Body.Root>

				<UserAuthStateDropDown.Footer.Root>
					{(userAddress || userLoading) && (
						<UserAuthStateDropDown.Footer.SwitchButton
							disabled={userLoading}
							className={cn(userLoading && 'grayscale-[50%] opacity-50')}>
							Switch Wallet
						</UserAuthStateDropDown.Footer.SwitchButton>
					)}
					{userAddress && <UserAuthStateDropDown.Footer.ExitButton>{'Disconnect'}</UserAuthStateDropDown.Footer.ExitButton>}
				</UserAuthStateDropDown.Footer.Root>
			</UserAuthStateDropDown.Root>
		);
	},
};