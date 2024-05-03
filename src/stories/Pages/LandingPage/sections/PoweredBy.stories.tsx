import type { Meta, StoryObj } from '@storybook/react';
import { PoweredBy } from '../../../../pages/LandingPage/sections/PoweredBy';

const meta = {
	title: 'Pages/LandingPage/Sections/PoweredBy',
	component: PoweredBy,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof PoweredBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
