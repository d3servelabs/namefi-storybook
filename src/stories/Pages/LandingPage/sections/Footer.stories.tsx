import type { Meta, StoryObj } from '@storybook/react';
import { Footer as FooterComponent } from '../../../../pages/LandingPage/sections/Footer';
import { TwitterIcon } from '../../../../components/Core/icons/Twitter';
import { DiscordIcon } from '../../../../components/Core/icons/Discord';
import { TelegramIcon } from '../../../../components/Core/icons/Telegram';
import { LinkedInIcon } from '../../../../components/Core/icons/LinkedIn';
import { GitHubIcon } from '../../../../components/Core/icons/GitHub';

const meta = {
	title: 'Pages/LandingPage/Sections/Footer',
	component: FooterComponent,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		navLinks: { control: { type: 'object' } },
		socialLinks: { control: { type: 'object' } },
		className: { control: { type: 'text' } },
	},
	args: {
		navLinks: [
			{ title: 'About us', href: '#' },
			{ title: 'Career', href: '#' },
			{ title: 'Contact us', href: '#' },
			{ title: 'Terms and conditions', href: '#' },
		],
		socialLinks: [
			{ icon: <TwitterIcon />, href: '#' },
			{ icon: <DiscordIcon />, href: '#' },
			{ icon: <TelegramIcon />, href: '#' },
			{ icon: <LinkedInIcon />, href: '#' },
			{ icon: <GitHubIcon />, href: '#' },
		],
		className: '',
	},
};
