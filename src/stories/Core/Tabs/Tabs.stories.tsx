import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../../components/Core/Tabs';

const meta = {
	title: 'Core/Tabs',
	component: Tabs,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		options: { control: 'object' },
		value: { control: 'text' },
		onChange: { action: 'onChange' },
		className: { control: 'text' },
	},
	args: {
		options: [
			{ label: 'Tab 1', value: 'tab1' },
			{ label: 'Tab 2', value: 'tab2' },
		],
		value: 'tab1',
		className: 'w-[320px]',
	},
	tags: ['autodocs'],
};
