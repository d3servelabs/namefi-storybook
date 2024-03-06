import type { Meta, StoryObj } from '@storybook/react';
import { IconCircleButton } from '../../../components/Core/Buttons/IconCircleButton';
import { ICON_NAMES } from '../../../components/Core/Icon';

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
		icon: { control: 'select', options: ICON_NAMES },
		onClick: { action: 'onClick' },
		disabled: { control: 'boolean' },
		className: { control: 'text' },
	},
	args: {
		icon: 'Add',
		disabled: false,
	},
	tags: ['autodocs'],
};
