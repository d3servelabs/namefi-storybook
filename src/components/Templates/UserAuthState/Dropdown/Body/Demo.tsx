import React, { useState } from 'react';
import NavItem from '../Nav/Item';
import NavList from '../Nav/List';
import { BorderSplitIcon, PersonIcon } from '@radix-ui/react-icons';
import BalanceTile from './BalanceTile';
import Root from './Root';

export function UserAuthStateDropdownBodyDemo({ balance, userAddress }) {
	return (
		<Root>
			{!!userAddress && (
				<NavList>
					<NavItem
						icon={<BorderSplitIcon width={24} height={24} />}
						href={'#'}
						onClick={() => {}}>
						Dashboard
					</NavItem>
					<NavItem
						icon={<PersonIcon width={24} height={24} />}
						href={'#'}
						onClick={() => {}}>
						WHOIS Profile
					</NavItem>
				</NavList>
			)}
			{!!userAddress && !!balance && <BalanceTile balance={balance} />}
		</Root>
	);
}

export default UserAuthStateDropdownBodyDemo;
