import type { Meta, StoryObj } from '@storybook/react';
import { CopyIconButton } from '@namefi/ui';

const meta = {
	title: 'Core/Buttons/CopyIconButton',
	component: CopyIconButton,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CopyIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		value: { value: 'string' },
	},
	args: {
		value: 'This text is copied from Copy button',
	},
	tags: ['autodocs'],
};
