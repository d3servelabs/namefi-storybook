import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { ParkingModeHeader } from '../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/Components/ParkingModeHeader',
	component: ParkingModeHeader,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof ParkingModeHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		className: { control: 'text' },
	},
	args: {
		className: 'w-[1480px] max-w-screen',
	},
	tags: ['autodocs'],
};
