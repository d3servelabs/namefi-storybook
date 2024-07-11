import type { Meta, StoryObj } from '@storybook/react';
import { ComingSoon } from '@namefi/ui';

const meta = {
	title: 'Components/ComingSoon',
	component: ComingSoon,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ComingSoon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		onClickDiscord: { action: 'onChange' },
		className: { control: 'text' },
	},
	args: {
		className: 'min-w-[480px]',
	},
	tags: ['autodocs'],
};
