import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { ParkingModeFooter } from '../../../pages/ParkingMode/ParkingModeFooter';

const meta = {
	title: 'Pages/ParkingMode/ParkingModeFooter',
	component: ParkingModeFooter,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ParkingModeFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		links: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		children: 'D3SERVE LABS, Inc. All Rights Reserved.',
		links: [
			{ text: 'Contact Us', href: 'https://discord.namefi.gg' },
			{ text: 'Private Terms' },
			{ text: 'Terms & Conditions' },
		],
		className: 'w-[1500px]',
	},
	tags: ['autodocs'],
};
