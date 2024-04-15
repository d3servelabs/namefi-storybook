import type { Meta, StoryObj } from '@storybook/react';
import { PoweredBy as PoweredByComponent } from '../../../../pages/LandingPage/components/PoweredBy';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: PoweredByComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof PoweredByComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PoweredBy: Story = {};
