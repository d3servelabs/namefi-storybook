import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WalletInput } from '../../../../components/Templates/DomainOwned/components/WalletInput';

const meta = {
	title: 'Templates/DomainOwned/Components/WalletInput',
	component: WalletInput,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof WalletInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		value: { control: 'text' },
		onChange: { action: 'onChange' },
		placeholder: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		value: '',
		placeholder: 'Paste wallet or ENS address',
		className: 'w-[420px]',
	},
};

export const Controlled: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [value, setValue] = useState<string>('');
		return (
			<WalletInput
				value={value}
				onChange={setValue}
				placeholder="Paste wallet or ENS address"
				className="w-[420px]"
			/>
		);
	},
};
