import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { GetStarted } from '../../../../components/ImportFlow/views/GetStarted';

const meta = {
	title: 'Components/ImportFlow/Views/GetStarted',
	component: GetStarted,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof GetStarted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		networkOptions: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		networkOptions: [
			{ label: 'Ethereum', value: 'ethereum' },
			{ label: 'Polygon', value: 'polygon' },
		],
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};
