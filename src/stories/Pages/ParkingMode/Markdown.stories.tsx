import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { Markdown } from '../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/Components/Markdown',
	component: Markdown,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Markdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		content: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		content:
			'The name **"Namefi"** signifies the _act of naming something_, with the idea that it becomes just as _essential, connecting people_ and contributing to a better _future_ for the internet.',
		className: 'text-sm',
	},
	tags: ['autodocs'],
};
