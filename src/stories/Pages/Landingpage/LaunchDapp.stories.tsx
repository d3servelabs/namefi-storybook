import type { Meta, StoryObj } from '@storybook/react';
import { LaunchDapp as LaunchDappComponent } from '../../../pages/Landingpage/LaunchDapp';

const meta = {
	title: 'Pages/Landingpage',
	component: LaunchDappComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof LaunchDappComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LaunchDapp: Story = {};
