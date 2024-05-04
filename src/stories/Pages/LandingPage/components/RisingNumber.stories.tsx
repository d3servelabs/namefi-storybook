import type { Meta, StoryObj } from '@storybook/react';
import { RisingNumber } from '../../../../pages/LandingPage/components/RisingNumber';

const meta = {
	title: 'Pages/LandingPage/Components/RisingNumber',
	component: RisingNumber,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof RisingNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		value: { control: { type: 'number' } },
		start: { control: { type: 'number' } },
		duration: { control: { type: 'number' } },
		increment: { control: { type: 'number' } },
		className: { control: { type: 'text' } },
	},
	args: {
		value: 329,
		start: 0,
		duration: 1200,
		increment: 7,
		className: 'text-white text-4xl',
	},
};
