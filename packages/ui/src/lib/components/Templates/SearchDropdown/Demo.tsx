import React, { useState } from 'react';
import SearchDropdown from './index';
import * as Message from './Message';

export interface SearchBarDemoProps {
	isTldSelected: boolean;
	status: 'TAKEN' | 'AVAILABLE' | 'YOUOWNIT' | 'NOTSUPPORTED';
	price: number;
}

export const MessageDemo = ({ price = 24, status, ...props }) => {
	return (
		<Message.Root>
			{}
			{status === 'AVAILABLE' && <Message.Available price={price} />}
			{status === 'TAKEN' && <Message.Taken />}
			{status === 'NOTSUPPORTED' && <Message.NotSupported />}
			{status === 'YOUOWNIT' && <Message.YouOwnIt />}
		</Message.Root>
	);
};
export const Demo = ({ price, isTldSelected, status }: SearchBarDemoProps) => {
	const [inputValue, setInputValue] = useState('');

	return (
		<SearchDropdown.Root>
			{isTldSelected ? (
				<SearchDropdown.Body>
					<MessageDemo status={status} price={price} />
					<SearchDropdown.TryAnother>
						<SearchDropdown.OtherTldSelector
							tlds={['eth', 'com', 'base', 'org', 'net', 'co.uk', 'btc', 'cosmos']}
						/>
					</SearchDropdown.TryAnother>
				</SearchDropdown.Body>
			) : (
				<SearchDropdown.OtherTldSelector
					tlds={['eth', 'com', 'base', 'org', 'net', 'co.uk', 'btc', 'cosmos']}
				/>
			)}
		</SearchDropdown.Root>
	);
};
