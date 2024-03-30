import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { Completed } from '../../../../components/ImportFlow/views/Completed';

const meta = {
	title: 'Components/ImportFlow/Views/Completed',
	component: Completed,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Completed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		domain: { control: 'object' },
		progressDescription: { control: 'object' },
		progressHref: { control: 'text' },
		onClickViewDomain: { action: 'onClickViewDomain' },
		className: { control: 'text' },
	},
	args: {
		domain: 'example.com',
		progressDescription: "Minting Completed.",
		progressHref: 'https://example.com',
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};
