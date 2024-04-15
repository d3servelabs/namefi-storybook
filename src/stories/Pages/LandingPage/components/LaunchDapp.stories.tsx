import type { Meta, StoryObj } from '@storybook/react';
import { LaunchDapp as LaunchDappComponent } from '../../../../pages/LandingPage/components/LaunchDapp';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: LaunchDappComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof LaunchDappComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LaunchDapp: Story = {};
