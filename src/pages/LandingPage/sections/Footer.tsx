import React, { useState } from 'react';
import { NamefiBrandText } from '../../../components/Core/NamefiBrandText';
import { cn } from '../../../utils/cn';
import { Subscription, type SubscriptionInlineFormPayload } from '../components/Subscription';
import { SocialLinks, type SocialLinkItem } from '../components/SocialLinks';

export interface FooterNavLink {
	title: React.ReactNode;
	href: string;
}

export type FooterProps = {
	navLinks: FooterNavLink[];
	socialLinks: SocialLinkItem[];
	subscriptionLoading?: boolean;
	subscriptionSubmiited?: boolean;
	onSubscriptionSubmit?: (payload: SubscriptionInlineFormPayload) => void;
	className?: string;
};
export const Footer = ({
	navLinks = [],
	socialLinks = [],
	subscriptionLoading = false,
	subscriptionSubmiited = false,
	onSubscriptionSubmit,
	className,
}: FooterProps) => {
	const [subscriptionEmail, setSubscriptionEmail] = useState('');

	// Notes: Check `./Hero.tsx` for more details on the following note.

	return (
		<div className={cn('w-full bg-[#242424] rounded-t-[30px] p-9', className)}>
			<div className="w-full max-w-[1400px] flex flex-col mx-auto">
				<div className="w-full flex flex-wrap justify-between items-center gap-x-8 gap-y-4 mb-4 order-1">
					<NamefiBrandText className="text-white text-xl md:text-3xl font-bold tracking-widest">
						Namefi
					</NamefiBrandText>
					<div className="max-w-[576px] w-full hidden md:block">
						<Subscription
							display="inline-form"
							email={subscriptionEmail}
							onEmailChange={setSubscriptionEmail}
							loading={subscriptionLoading}
							submitted={subscriptionSubmiited}
							onSubmit={onSubscriptionSubmit}
						/>
					</div>
				</div>
				<div className="w-full flex justify-center md:justify-start items-center md:mb-16 order-3 md:order-2">
					<SocialLinks items={socialLinks} />
				</div>
				<div className="w-full flex flex-wrap justify-between items-center gap-x-8 gap-y-4 order-2 md:order-3">
					<div className="text-grey-lighter text-[10px] md:text-base font-normal tracking-wide">
						D3SERVE LABS, Inc. All Rights Reserved.
					</div>
					<nav
						className="w-full md:w-auto flex flex-col md:flex-row flex-wrap 
					items-center gap-x-8 gap-y-2 md:gap-12 text-grey text-xs md:text-lg font-normal tracking-wide mb-6 md:mb-0">
						{navLinks.map(({ title, href }, index) => (
							<a
								key={index}
								href={href}
								target="_blank"
								className="block py-2 hover:text-grey-lighter md:w-auto">
								{title}
							</a>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};
