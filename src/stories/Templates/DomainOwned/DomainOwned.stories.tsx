import { useState, useMemo, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import {
	DomainOwned,
	type DomainOwnedView,
	type TransferStatus,
} from '../../../components/DomainOwned/DomainOwned';

const meta = {
	title: 'Templates/DomainOwned/SideCard',
	component: DomainOwned,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DomainOwned>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		view: {
			control: 'select',
			options: ['INFORMATION', 'TRANSFER', 'LIST_FOR_SALE', 'BORROW'],
		},
		status: {
			control: 'select',
			options: ['START', 'UNLOCKED', 'TRANSFERRING', 'TRANSFERRED', 'DONE'],
		},
		domain: { control: 'text' },
		receiverAddress: { control: 'text' },
		transactionLink: { control: 'text' },
		viewLinks: { control: 'object' },
		listForSaleLinks: { control: 'object' },
		borrowLinks: { control: 'object' },
		onClickUnlock: { action: 'onClickUnlock' },
		onClickTransfer: { action: 'onClickTransfer' },
		onClickDone: { action: 'onClickDone' },
		className: { control: 'text' },
	},
	args: {
		view: 'INFORMATION',
		status: 'START',
		domain: 'Example.com',
		receiverAddress: '0x872742426c502131B5C13015DEaE0B1BEC895315',
		transactionLink: 'https://etherscan.io/',
		viewLinks: [
			{
				children: 'Etherscan',
				href: 'https://etherscan.io/',
			},
			{
				children: 'Blockscout',
				href: 'https://blockscout.com/',
			},
			{
				children: 'OpenSea',
				href: 'https://opensea.io/',
			},
			{
				children: 'Blur',
				href: 'https://blur.cash/',
			},
			{
				children: 'LooksRare',
				href: 'https://looksrare.org/',
			},
		],
		listForSaleLinks: [
			{
				children: 'OpenSea',
				href: 'https://opensea.io/',
			},
			{
				children: 'Blur',
				href: 'https://blur.cash/',
			},
			{
				children: 'X2Y2',
				href: 'https://x2y2.io/',
			},
			{
				children: 'LooksRare',
				href: 'https://looksrare.org/',
			},
			{
				children: 'Rarible',
				href: 'https://rarible.com/',
			},
		],
		borrowLinks: [
			{
				children: 'Teller',
				href: 'https://teller.org/',
			},
			{
				children: 'NFTFI',
				href: 'https://nftfi.com/',
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
		const [view, setview] = useState<DomainOwnedView>('INFORMATION');
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
			<DomainOwned
				view={view}
				onChangeView={setview}
				status={status}
				domain="Example.com"
				receiverAddress={receiverAddress}
				transactionLink={transactionLink}
				viewLinks={[
					{
						children: 'Etherscan',
						href: 'https://etherscan.io/',
					},
					{
						children: 'Blockscout',
						href: 'https://blockscout.com/',
					},
					{
						children: 'OpenSea',
						href: 'https://opensea.io/',
					},
					{
						children: 'Blur',
						href: 'https://blur.cash/',
					},
					{
						children: 'LooksRare',
						href: 'https://looksrare.org/',
					},
				]}
				listForSaleLinks={[
					{
						children: 'OpenSea',
						href: 'https://opensea.io/',
					},
					{
						children: 'Blur',
						href: 'https://blur.cash/',
					},
					{
						children: 'X2Y2',
						href: 'https://x2y2.io/',
					},
					{
						children: 'LooksRare',
						href: 'https://looksrare.org/',
					},
					{
						children: 'Rarible',
						href: 'https://rarible.com/',
					},
				]}
				borrowLinks={[
					{
						children: 'Teller',
						href: 'https://teller.org/',
					},
					{
						children: 'NFTFI',
						href: 'https://nftfi.com/',
					},
				]}
				onClickUnlock={handleClickUnlock}
				onClickTransfer={handleClickTransfer}
				onClickDone={handleClickDone}
			/>
		);
	},
};
