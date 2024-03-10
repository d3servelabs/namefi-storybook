import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { ValueStatistic } from '../../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/Components/Statistic/Variants/ValueStatistic',
	component: ValueStatistic,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ValueStatistic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		title: { control: 'text' },
		tip: { control: 'text' },
		value: { control: 'number' },
		unit: { control: 'text' },
		exchangeRate: { control: 'number' },
		className: { control: 'text' },
	},
	args: {
		title: 'Value',
		tip: 'Lorem ipsum dolor sit amet',
		value: 100,
		unit: '$NFSC',
		exchangeRate: 1,
		className: '',
	},
	tags: ['autodocs'],
};
