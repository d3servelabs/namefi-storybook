import type { Meta, StoryObj } from '@storybook/react';
import { Header as HeaderComponent } from '../../../../pages/LandingPage/components/Header';
import { TwitterIcon } from '../../../../components/Core/icons/Twitter';
import { DiscordIcon } from '../../../../components/Core/icons/Discord';
import { TelegramIcon } from '../../../../components/Core/icons/Telegram';
import { LinkedInIcon } from '../../../../components/Core/icons/LinkedIn';
import { GitHubIcon } from '../../../../components/Core/icons/GitHub';
import '../../../../index.css';
import '../../../../App.css';

const meta: Meta<typeof HeaderComponent> = {
	title: 'Pages/LandingPage/Components',
	component: HeaderComponent,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
	argTypes: {
		navLinks: {
			control: {
				type: 'object',
			},
		},
		socialLinks: {
			control: {
				type: 'object',
			},
		},
		onClickLaunchDApp: {
			action: 'onClickLaunchDApp',
		},
	},
	args: {
		navLinks: [
			{ title: 'Feature', href: '#feature' },
			{ title: 'NFT & $NFSC', href: '#assets' },
			{ title: 'FAQs', href: '#faq' },
			{ title: 'About us', href: '#about' },
			{ title: 'Contact us', href: '#contact' },
		],
		socialLinks: [
			{ icon: <TwitterIcon />, href: '#' },
			{ icon: <DiscordIcon />, href: '#' },
			{ icon: <TelegramIcon />, href: '#' },
			{ icon: <LinkedInIcon />, href: '#' },
			{ icon: <GitHubIcon />, href: '#' },
		]
	},
};
