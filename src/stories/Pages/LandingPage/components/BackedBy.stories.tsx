import type { Meta, StoryObj } from '@storybook/react';
import { BackedBy as BackedByComponent } from '../../../../pages/LandingPage/components/BackedBy';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: BackedByComponent,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof BackedByComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackedBy: Story = {};
