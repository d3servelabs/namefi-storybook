import type { Meta, StoryObj } from '@storybook/react';
import { Footer as FooterComponent } from '../../../../pages/LandingPage/components/Footer';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: FooterComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {
	args: {
		socialLinks: {},
	},
};
