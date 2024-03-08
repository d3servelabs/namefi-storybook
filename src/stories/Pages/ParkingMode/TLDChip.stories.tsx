import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { TLDChip } from '../../../pages/ParkingMode/TLDChip';

const meta = {
	title: 'Pages/ParkingMode/TLDChip',
	component: TLDChip,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof TLDChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		children: '.com',
		className: '',
	},
	tags: ['autodocs'],
};
