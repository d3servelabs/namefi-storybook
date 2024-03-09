import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import '../../../index.css';
import '../../../App.css';
import { PriceInput } from '../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/Components/PriceInput',
	component: PriceInput,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof PriceInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		exchangeRate: { control: 'number' },
		value: { control: 'number' },
		minimum: { control: 'number' },
		maximum: { control: 'number' },
		onChange: { action: 'onChange' },
	},
	args: {
		exchangeRate: 1,
		value: 100,
		minimum: 0,
		maximum: 99999999,
	},
	tags: ['autodocs'],
};

export const Controlled: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [value, setValue] = useState<number | null>(100);
		return <PriceInput exchangeRate={1} value={value} onChange={setValue} />;
	},
};
