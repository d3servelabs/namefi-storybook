import type { Meta, StoryObj } from '@storybook/react';
import { NavLinks as NavLinksComponent } from '../../../../pages/LandingPage/components/NavLinks';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: NavLinksComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof NavLinksComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavLinks: Story = {};
