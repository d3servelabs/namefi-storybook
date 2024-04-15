import type { Meta, StoryObj } from '@storybook/react';
import { PoweredBy as PoweredByComponent } from '../../../pages/Landingpage/PoweredBy';

const meta = {
	title: 'Pages/Landingpage',
	component: PoweredByComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof PoweredByComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PoweredBy: Story = {};
