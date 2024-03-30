import { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EthereumLogo } from '../../../../components/Core/icons/EthereumLogo';
import BaseNetworkIcon from '../../../../components/Core/icons/BaseNetwork';
import { Select } from '../../../../components/ImportFlow/components/Select';

const meta = {
	title: 'Components/ImportFlow/Components/Select',
	component: Select,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const OPTIONS = [
	{
		value: 'ETH_MAINNET',
		label: 'Ethereum Mainnet',
		addon: 'Fees: ≈$13.28',
	},
	{
		value: 'BASE_CHAIN',
		label: 'Base Chain',
		addon: 'Fees: ≈$0.0328',
	},
];

export const Default: Story = {
	argTypes: {
		value: { control: 'text' },
		onChange: { action: 'onChange' },
		options: { control: 'object' },
		placeholder: { control: 'text' },
		addon: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		value: '',
		options: OPTIONS,
		placeholder: 'Select Network',
		addon: '',
		className: 'w-80',
	},
};

const NETWORK_OPTIONS = [
	{
		value: 'ETH_MAINNET',
		label: (
			<div className="flex items-center">
				<EthereumLogo className="w-6 h-6 mr-2" />
				Ethereum Mainnet
			</div>
		),
		addon: (
			<div>
				<span className="text-grey">Fees: </span>≈$13.28
			</div>
		),
	},
	{
		value: 'BASE_CHAIN',
		label: (
			<div className="flex items-center">
				<BaseNetworkIcon className="w-6 h-6 mr-2" />
				Base Chain
			</div>
		),
		addon: (
			<div>
				<span className="text-grey">Fees: </span>≈$0.0328
			</div>
		),
	},
];

export const ControlledPlainText: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [value, setValue] = useState<string>('');
		const addon = useMemo(() => {
			if (!value) {
				return;
			}
			return OPTIONS.find((option) => option.value === value)?.addon;
		}, [value]);
		return (
			<Select
				value={value}
				onChange={setValue}
				options={OPTIONS}
				placeholder="Select Network"
				addon={addon}
				className="w-80"
			/>
		);
	},
};


export const ControlledReactNode: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [value, setValue] = useState<string>('');
		const addon = useMemo(() => {
			if (!value) {
				return;
			}
			return OPTIONS.find((option) => option.value === value)?.addon;
		}, [value]);
		return (
			<Select
				value={value}
				onChange={setValue}
				options={NETWORK_OPTIONS}
				placeholder="Select Network"
				addon={addon}
				className="w-80"
			/>
		);
	},
};
