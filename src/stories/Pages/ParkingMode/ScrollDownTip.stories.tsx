import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { ScrollDownTip } from '../../../pages/ParkingMode/ScrollDownTip';

const meta = {
	title: 'Pages/ParkingMode/ScrollDownTip',
	component: ScrollDownTip,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ScrollDownTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		children: 'Show me the potential',
		className: '',
	},
	tags: ['autodocs'],
};
