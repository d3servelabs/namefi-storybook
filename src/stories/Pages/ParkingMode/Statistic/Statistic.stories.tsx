import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { Statistic } from '../../../../pages/ParkingMode/Statistic';

const meta = {
	title: 'Pages/ParkingMode/Statistic',
	component: Statistic,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Statistic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		title: { control: 'text' },
		tip: { control: 'text' },
		children: { control: 'text' },
		description: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		title: 'Title',
		tip: 'Tips!',
		children: '100',
		description: 'Perfect',
		className: '',
	},
	tags: ['autodocs'],
};
