import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { NameDisplay } from '../../../pages/ParkingMode/NameDisplay';

const meta = {
	title: 'Pages/ParkingMode/NameDisplay',
	component: NameDisplay,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof NameDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		name: { control: 'text' },
		owner: { control: 'text' },
		status: { control: 'radio', options: ['for-bid', 'for-sale'] },
		onClickOwner: { action: 'onClickOwner' },
		className: { control: 'text' },
	},
	args: {
		name: '中文.com',
		owner: '0x872742426c502131B5C13015DEaE0B1BEC895315',
		status: 'for-bid',
		className: '',
	},
	tags: ['autodocs'],
};
