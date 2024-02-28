import type { Meta, StoryObj } from '@storybook/react';
import { CardHeader } from '../../../../components/Core/Card';

const meta = {
	title: 'Core/Card/CardHeader',
	component: CardHeader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		onBack: { action: 'onBack' },
    children: { control: 'text' }, 
		className: { control: 'text' },
	},
	args: {
    children: 'Card Title',
    className: 'w-[320px]',
  },
};
