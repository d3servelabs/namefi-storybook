import React, { useMemo } from 'react';
import  ShortAddress  from '../../Core/ShortAddress';
import  UserAuthStateTile from './Tile';
import { Popover } from '@radix-ui/themes';
<<<<<<< HEAD:src/components/Templates/UserAuthState/UserAuthStateDemo.tsx
import UserAuthStateDropDown from './Dropdown'; 
=======
import UserAuthStateDropDown from './Dropdown/Demo';
>>>>>>> fff5836bf0abb3eb3459d8c082a9916fa2f86a3f:src/components/Templates/UserAuthState/Demo.tsx


export type UserAuthStateProps = Partial<{
	userAddress;
	userLoading;
	balanceLoading;
	networkError: boolean;
	onSignOut: () => any;
	onLogin: () => any;
	onNetworkClicked: () => any;
}>;

const UserAuthStateDemo = ({
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
					<UserAuthStateTile.Root backgroundColor={userAddress ? '#111' : '#111111b3'}>
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
					</UserAuthStateTile.Root>
				</Popover.Trigger>
				<Popover.Content>
					<UserAuthStateDropDown/>
				</Popover.Content>
			</Popover.Root>
		</>
	);
};

export default UserAuthStateDemo