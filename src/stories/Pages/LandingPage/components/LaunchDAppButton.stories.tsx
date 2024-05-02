import type { Meta, StoryObj } from '@storybook/react';
import { LaunchDAppButton } from '../../../../pages/LandingPage/components/LaunchDAppButton';

const meta = {
	title: 'Pages/LandingPage/Components/LaunchDAppButton',
	component: LaunchDAppButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LaunchDAppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		onClick: { action: 'clicked' },
	},
};
