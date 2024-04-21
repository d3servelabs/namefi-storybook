import type { Meta, StoryObj } from '@storybook/react';
import { LaunchDApp as LaunchDAppComponent } from '../../../../pages/LandingPage/components/LaunchDApp';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: LaunchDAppComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof LaunchDAppComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LaunchDApp: Story = {};
