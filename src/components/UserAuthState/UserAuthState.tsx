import React, { useMemo } from 'react';
import  ShortAddress  from '../ShortAddress';
import { UserAuthStateTile } from './Tile/UserAuthStateTile';
import { Popover } from '@radix-ui/themes';
import { UserAuthStateDropDown } from './Dropdown/UserAuthStateDropDown';
import {UserAuthStateTileLabel} from "@components/UserAuthState/Tile/UserAuthStateTileLabel";
import {UserAuthStateTileNetwork} from "@components/UserAuthState/Tile/UserAuthStateTileNetwork";
import {UserAuthStateTileAction} from "@components/UserAuthState/Tile/UserAuthStateTileAction";

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
						<UserAuthStateTile.Label>
							{userLoading || balanceLoading ? (
								'Loading...'
							) : networkError ? (
								'Wrong Network'
							) : userAddress ? (
								<ShortAddress address={userAddress} />
							) : (
								'Connect Wallet'
							)}
						</UserAuthStateTile.Label>
						<UserAuthStateTile.Action>
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
									className={userAddress ? 'max-w-[44px]' : 'max-w-[22px] mr-3'}
									alt="disconnect image"
									role="svg"
								/>
							)}
						</UserAuthStateTile.Action>
					</UserAuthStateTile>
				</Popover.Trigger>
				<Popover.Content>
					<UserAuthStateDropDown>
						<UserAuthStateDropDown.Header userAddress={userAddress} loading={userLoading}/>
						<UserAuthStateDropDown.Body/>
						<UserAuthStateDropDown.Footer/>
					</UserAuthStateDropDown>
				</Popover.Content>
			</Popover.Root>
		</>
	);
};
