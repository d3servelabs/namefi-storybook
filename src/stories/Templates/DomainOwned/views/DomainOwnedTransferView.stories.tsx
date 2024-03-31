import { useState, useMemo, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { Transfer, type TransferStatus } from '../../../../components/DomainOwned/views/Transfer';

const meta = {
	title: 'Templates/DomainOwned/Views/Transfer',
	component: Transfer,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Transfer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		status: {
			control: 'select',
			options: ['START', 'UNLOCKED', 'TRANSFERRING', 'TRANSFERRED', 'DONE'],
		},
		domain: { control: 'text' },
		receiverAddress: { control: 'text' },
		transactionLink: { control: 'text' },
		viewLinks: { control: 'object' },
		onClickUnlock: { action: 'onClickUnlock' },
		onClickTransfer: { action: 'onClickTransfer' },
		onClickDone: { action: 'onClickDone' },
		className: { control: 'text' },
	},
	args: {
		status: 'START',
		domain: 'Example.com',
		receiverAddress: '0x872742426c502131B5C13015DEaE0B1BEC895315',
		transactionLink: 'https://etherscan.io/',
		viewLinks: [
			{
				children: 'OpenSea',
				href: 'https://opensea.io/',
			},
			{
				children: 'LooksRare',
				href: 'https://looksrare.org/',
			},
			{
				children: 'X2Y2',
				href: 'https://x2y2.io/',
			},
		],
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};

export const Controlled: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [receiverAddress, setReceiverAddress] = useState<string>('');
		const [status, setStatus] = useState<TransferStatus>('START');
		const transactionLink = useMemo(
			() => `https://etherscan.io/address/${receiverAddress}`,
			[receiverAddress],
		);
		const handleClickUnlock = useCallback(() => setStatus('UNLOCKED'), []);
		const handleClickTransfer = useCallback(({ recipient }: { recipient: string }) => {
			setStatus('TRANSFERRING');
			// Simulate transfer ...
			setTimeout(() => {
				setReceiverAddress(recipient);
				setStatus('TRANSFERRED');
			}, 4000);
		}, []);
		const handleClickDone = useCallback(() => setStatus('DONE'), []);
		return (
			<Transfer
				status={status}
				domain="Example.com"
				receiverAddress={receiverAddress}
				transactionLink={transactionLink}
				viewLinks={[
					{
						children: 'OpenSea',
						href: 'https://opensea.io/',
					},
					{
						children: 'LooksRare',
						href: 'https://looksrare.org/',
					},
					{
						children: 'X2Y2',
						href: 'https://x2y2.io/',
					},
				]}
				onClickUnlock={handleClickUnlock}
				onClickTransfer={handleClickTransfer}
				onClickDone={handleClickDone}
			/>
		);
	},
};
