import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@namefi/ui';

const meta: Meta<typeof Spinner> = {
	title: 'Core/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnerDefault: Story = {
	args: {},
};
