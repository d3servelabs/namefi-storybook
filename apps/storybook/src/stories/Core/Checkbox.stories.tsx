import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@namefi/ui';

const meta = {
	title: 'Core/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		value: { control: 'boolean' },
		onChange: { action: 'onChange' },
		className: { control: 'text' },
	},
	args: {
		value: false,
	},
};
