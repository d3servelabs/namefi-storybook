import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@namefi/ui';

const meta = {
	title: 'Core/Card/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		children: 'Content goes here',
		className: 'w-[320px]',
	},
};
