import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@namefi/ui';

const meta: Meta<typeof Badge> = {
	title: 'Core/Badge',
	component: Badge,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeDefault: Story = {
	args: {
		variant: 'default',
		children: 'Badge',
	},
};

export const BadgeSuccess: Story = {
	args: {
		variant: 'success',
		children: 'Badge',
	},
};

export const BadgeWarning: Story = {
	args: {
		variant: 'warning',
		children: 'Badge',
	},
};

export const BadgeDisabled: Story = {
	args: {
		variant: 'disabled',
		children: 'Badge',
	},
};
