import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@namefi/ui';

const meta = {
	title: 'Components/Chip',
	component: Chip,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ChipUnselected: Story = {
	args: {
		selected: false,
		children: 'chip',
	},
};
export const ChipSelected: Story = {
	args: {
		selected: true,
		children: 'chip',
	},
};
