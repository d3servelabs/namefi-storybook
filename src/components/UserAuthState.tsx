import React, { useMemo } from 'react';
import { ShortAddress } from './ShortAddress';
import { UserAuthStateTile, UserAuthStateAction, UserAuthStateNetwork, UserAuthStateLabel } from './UserAuthStateTile';
import { Popover } from '@radix-ui/themes';
import { UserAuthStateDropDown } from './UserAuthStateDropDown';

export type UserAuthStateProps = Partial<{
	userAddress;
	userLoading;
	balanceLoading;
	networkError: boolean;
	onSignOut: () => any;
	onLogin: () => any;
	onNetworkClicked: () => any;
}>;

export const UserAuthState = ({
	userAddress,
	userLoading,
	balanceLoading,
	networkError,
	onLogin,
	onSignOut,
	onNetworkClicked,
}: UserAuthStateProps) => {
	return (
		<>
			<Popover.Root>
				<Popover.Trigger>
					<UserAuthStateTile backgroundColor={userAddress ? '#111' : '#111111b3'}>
						<UserAuthStateTile.Network network={1} onClick={onNetworkClicked} />
						<UserAuthStateLabel>
							{userLoading || balanceLoading ? (
								'Loading...'
							) : networkError ? (
								'Wrong Network'
							) : userAddress ? (
								<ShortAddress address={userAddress} />
							) : (
								'Connect Wallet'
							)}
						</UserAuthStateLabel>
						<UserAuthStateAction>
							{userLoading || balanceLoading || networkError ? (
								<img
									className="w-[22px]"
									src="/assets/arrow-right1.svg"
									alt="arrow-right1 logo"
									role="img"
								/>
							) : (
								<img
									onClick={(event)=>{
										event.stopPropagation()
										if(userAddress)
											onSignOut?.()
										else onLogin?.()
									}}
									src={userAddress ? '/assets/disconnect.svg' : '/assets/arrow-right1.svg'}
									className={userAddress ? 'max-w-[44px]' : 'max-w-[22px]'}
									alt="disconnect image"
									role="svg"
								/>
							)}
						</UserAuthStateAction>
					</UserAuthStateTile>
				</Popover.Trigger>
				<Popover.Content>
					<UserAuthStateDropDown />
				</Popover.Content>
			</Popover.Root>
		</>
	);
};
