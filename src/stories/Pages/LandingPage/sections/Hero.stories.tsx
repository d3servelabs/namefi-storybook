import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Hero } from '../../../../pages/LandingPage/sections/Hero';
import {
	AsterismIcon,
	TwitterIcon,
	DiscordIcon,
	TelegramIcon,
	LinkedInIcon,
	GitHubIcon,
} from '../../../..';

const meta = {
	title: 'Pages/LandingPage/Sections/Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		socialLinks: { control: 'object' },
		subscriptionLoading: { control: 'boolean' },
		subscriptionSubmiited: { control: 'boolean' },
		onSubscriptionSubmit: { action: 'onSubscriptionSubmit' },
		onClickJoinBetaTest: { action: 'onClickJoinBetaTest' },
		onClickInvestor: { action: 'onClickInvestor' },
		children: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		socialLinks: [
			{ icon: <TwitterIcon />, href: '#' },
			{ icon: <DiscordIcon />, href: '#' },
			{ icon: <TelegramIcon />, href: '#' },
			{ icon: <LinkedInIcon />, href: '#' },
			{ icon: <GitHubIcon />, href: '#' },
		],
		subscriptionLoading: false,
		subscriptionSubmiited: false,
		children: (
			<>
				<div className="block md:hidden">
					<div className="mb-3">
						<p className="mb-3">
							Trading <span className="font-normal italic">any domains</span>
						</p>
						<p className="mb-3">
							on-chain <AsterismIcon className="text-[#FEF55680] stroke-[0.01]" />,
						</p>
					</div>
					<div className="text-primary text-sm font-light">
						100x more liquid, get paid in secs.
					</div>
				</div>
				<div className="hidden md:block">Trading domains on chain.</div>
			</>
		),
		className: '',
	},
};

export const Minimal: Story = {
	argTypes: {} as any,
	args: {} as any,
	render: () => {
		return (
			<Hero
				socialLinks={[
					{ icon: <TwitterIcon />, href: '#' },
					{ icon: <DiscordIcon />, href: '#' },
					{ icon: <TelegramIcon />, href: '#' },
					{ icon: <LinkedInIcon />, href: '#' },
					{ icon: <GitHubIcon />, href: '#' },
				]}
				onClickJoinBetaTest={action('onClickJoinBetaTest')}>
				Trading domains on chain.
			</Hero>
		);
	},
};

export const Controlled: Story = {
	argTypes: {} as any,
	args: {} as any,
	render: () => {
		const [isSubscriptionLoading, setIsSubscriptionLoading] = useState(false);
		const [isSubscriptionSubmitted, setIsSubscriptionSubmitted] = useState(false);
		const handleSubscriptionSubmit = useCallback(async () => {
			setIsSubscriptionLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 2000));
			action('onSubscriptionSubmit');
			setIsSubscriptionLoading(false);
			setIsSubscriptionSubmitted(true);
		}, []);
		return (
			<Hero
				socialLinks={[
					{ icon: <TwitterIcon />, href: '#' },
					{ icon: <DiscordIcon />, href: '#' },
					{ icon: <TelegramIcon />, href: '#' },
					{ icon: <LinkedInIcon />, href: '#' },
					{ icon: <GitHubIcon />, href: '#' },
				]}
				subscriptionLoading={isSubscriptionLoading}
				subscriptionSubmiited={isSubscriptionSubmitted}
				onSubscriptionSubmit={handleSubscriptionSubmit}
				onClickJoinBetaTest={action('onClickJoinBetaTest')}
				onClickInvestor={action('onClickInvestor')}>
				Trading domains on chain.
			</Hero>
		);
	},
};
