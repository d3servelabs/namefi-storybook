import type { Meta, StoryObj } from '@storybook/react';
import { IconCircleButton } from '@namefi/ui';
import { AddIcon } from '@namefi/ui';

const meta = {
	title: 'Core/Buttons/IconCircleButton',
	component: IconCircleButton,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof IconCircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		icon: { control: 'object' },
		onClick: { action: 'onClick' },
		disabled: { control: 'boolean' },
		className: { control: 'text' },
	},
	args: {
		icon: <AddIcon />,
		disabled: false,
	},
	tags: ['autodocs'],
};
