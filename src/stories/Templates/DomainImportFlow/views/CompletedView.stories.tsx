import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { Completed } from '../../../../components/Templates/ImportFlow/views/Completed';

const meta = {
	title: 'Templates/DomainImportFlow/Views/Completed',
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
		progressURL: { control: 'text' },
		onClickViewDomain: { action: 'onClickViewDomain' },
		onBack: { action: 'onBack' },
		className: { control: 'text' },
	},
	args: {
		domain: 'example.com',
		progressDescription: "Minting Completed.",
		progressURL: 'https://example.com',
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};
