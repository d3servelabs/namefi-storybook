import React from 'react';
import assert from 'assert';
import isEmail from 'validator/lib/isEmail';
import {
	SOCIAL_MEDIA_LINKS,
	TOS_LINK,
	EDUCATION_LINK,
	ABOUT_LINK,
	ABUSE_LINK,
	NAMEFI_HOME_LINK,
	NEWSLETTER_SUBSCRIPTION_LINK_WITH_EMAIL,
} from '../../../config/links';
import DiscordIcon from '../../common/Icon/Filled/Social/Discord';
import TwitterIcon from '../../common/Icon/Filled/Social/Twitter';
import TelegramIcon from '../../common/Icon/Filled/Social/Telegram';
import GithubIcon from '../../common/Icon/Filled/Social/Github';
import LinkedInIcon from '../../common/Icon/Filled/Social/LinkedIn';
import { Brand } from './Brand';
import { InlineInputForm } from './InlineInputForm';
import { cn } from '../../../utils/cn';

const EMAIL_VALIDATOR = (value: string) => {
	assert(isEmail(value), 'Invalid email');
};

const SOCIAL_MEDIA_BUTTONS = [
	{
		name: 'Discord',
		icon: <DiscordIcon />,
		href: SOCIAL_MEDIA_LINKS.DISCORD,
	},
	{
		name: 'Twitter',
		icon: <TwitterIcon />,
		href: SOCIAL_MEDIA_LINKS.TWITTER,
	},
	{
		name: 'GitHub',
		icon: <GithubIcon />,
		href: SOCIAL_MEDIA_LINKS.GITHUB,
	},
	{
		name: 'Telegram',
		icon: <TelegramIcon />,
		href: SOCIAL_MEDIA_LINKS.TELEGRAM,
	},
	{
		name: 'LinkedIn',
		icon: <LinkedInIcon />,
		href: SOCIAL_MEDIA_LINKS.LINKEDIN,
	},
] satisfies {
	name: string;
	icon: JSX.Element;
	href: string;
}[];

const COPYRIGHT_LINKS = [
	{ text: 'Contact Us', href: SOCIAL_MEDIA_LINKS.DISCORD },
	{ text: 'About', href: ABOUT_LINK },
	{ text: 'Abuse', href: ABUSE_LINK },
	{ text: 'Education', href: EDUCATION_LINK },
	{ text: 'Terms & Conditions', href: TOS_LINK },
] satisfies { text: string; href: string }[];

const subscribeUpdates = (email: string) => {
	// TODO: replace with actual subscription logic
	window.open(NEWSLETTER_SUBSCRIPTION_LINK_WITH_EMAIL(email), '_blank');
};

export interface FooterProps {
	className?: string;
}

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer
			role="footer"
			className={cn(
				'mt-[2.90375rem] flex flex-col gap-10 text-[#E5E7EB] lg:!gap-6',
				className,
			)}>
			<div className="flex flex-col gap-8 px-5 py-10 max-md:!hidden lg:!py-0">
				<h3 className="leading-[37.50px text-3xl font-bold">
					Join the <Brand /> Community
				</h3>
				<span role="subtitle" className="text-[1.3125rem] leading-9 text-[#f5fcf9]/80">
					Our vibrant community of domainers, builders, contributors, users, HODLers, and
					enthusiasts.
				</span>
			</div>
			<div
				role="community"
				className="flex flex-col gap-10 max-md:!hidden lg:!flex-row-reverse">
				<section
					role="newsletter"
					className="flex w-full flex-col gap-10 rounded-lg bg-white/5 p-10">
					<div className="flex flex-col gap-5 px-5">
						<h3 className="text-3xl font-bold leading-[2.34375rem]">
							Get our newsletter
						</h3>
						<span
							role="subtitle"
							className="text-[1.3125rem] leading-9 text-[#f5fcf9]/80">
							Subscribe to receive updates.
						</span>
					</div>
					<InlineInputForm
						validator={EMAIL_VALIDATOR}
						placeholder="Enter your email"
						onSubmit={subscribeUpdates}
					/>
				</section>
				<section
					role="social-media"
					className="grid w-full auto-rows-min grid-cols-2 gap-5 md:!grid-cols-3 lg:!grid-cols-2">
					{SOCIAL_MEDIA_BUTTONS.map(({ name, icon, href }) => (
						<a
							key={name}
							role="link"
							href={href}
							target="_blank"
							className="inline-flex h-16 items-center justify-center rounded-[36px] bg-white/5 py-1"
							rel="noreferrer">
							<div className="flex items-center justify-center gap-1 px-5 py-4">
								<span className="text-xl">{icon}</span>
								<span className="text-sm">{name}</span>
							</div>
						</a>
					))}
				</section>
			</div>
			<section
				role="copyright"
				className="text-tertiary flex flex-col gap-2.5 py-10 text-center text-lg font-normal md:!flex-row md:!justify-between">
				<a href={NAMEFI_HOME_LINK} target="_blank" rel="noreferrer">
					&copy; D3SERVE LABS, Inc.
				</a>
				<div role="links">
					{COPYRIGHT_LINKS.map(({ text, href }, index) => (
						<a
							key={index}
							role="link"
							href={href}
							target="_blank"
							className="border-deep border-r px-2 last:border-r-0"
							rel="noreferrer">
							{text}
						</a>
					))}
				</div>
			</section>
		</footer>
	);
};
