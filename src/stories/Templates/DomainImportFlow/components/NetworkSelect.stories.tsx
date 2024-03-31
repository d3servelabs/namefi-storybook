import { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EthereumLogo } from '../../../../components/Core/icons/EthereumLogo';
import BaseNetworkIcon from '../../../../components/Core/icons/BaseNetwork';
import { NetworkSelect } from '../../../../components/Templates/ImportFlow/components/NetworkSelect';

const meta = {
	title: 'Templates/DomainImportFlow/Components/NetworkSelect',
	component: NetworkSelect,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof NetworkSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

const NETWORK_OPTIONS = [
	{
		key: 'ETH_MAINNET',
		name: 'Ethereum Mainnet',
		icon: <EthereumLogo className="w-6 h-6" />,
		fee: 13.28,
	},
	{
		key: 'BASE_CHAIN',
		name: 'Base Chain',
		icon: <BaseNetworkIcon className="w-6 h-6" />,
		fee: 0.0328,
	},
];

export const Default: Story = {
	argTypes: {
		value: { control: 'text' },
		onChange: { action: 'onChange' },
		options: { control: 'object' },
		placeholder: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		value: '',
		options: NETWORK_OPTIONS,
		placeholder: 'Select Network',
		className: 'w-80',
	},
};

export const Controlled: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [value, setValue] = useState<string>('');
		return (
			<NetworkSelect
				value={value}
				onChange={setValue}
				options={NETWORK_OPTIONS}
				className="w-80"
			/>
		);
	},
};
