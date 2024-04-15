import type { Meta, StoryObj } from '@storybook/react';
import { SocialLinks as SocialLinksComponent } from '../../../../pages/LandingPage/components/SocialLinks';
import '../../../../index.css';
import '../../../../App.css';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: SocialLinksComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SocialLinksComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SocialLinks: Story = {};
