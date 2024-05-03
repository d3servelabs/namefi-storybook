import React from 'react';
import { type SocialLinkItem } from './components/SocialLinks';
import { Header, type NavLink } from './components/Header';
import { type FeatureCardProps } from './components/FeatureCard';
import { Hero } from './sections/Hero';
import { PoweredBy } from './sections/PoweredBy';
import { Features } from './sections/Features';
import { Supporting, type SupportingItem } from './sections/Supporting';
import { Assets, type AssetItem } from'./sections/Assets';
import { BackedBy, type BackerItem } from './sections/BackedBy';
import { FAQs, type FAQItem } from './sections/FAQs';
import { Footer } from './components/Footer';

export type LandingPageProps = {
	navLinks: NavLink[];
	socialLinks: SocialLinkItem[];
	onClickLaunchDApp: () => void;
	hero: React.ReactNode;
	features: FeatureCardProps[];
	supportings: SupportingItem[];
	assets: AssetItem[];
	backers: BackerItem[];
	faqs: FAQItem[];
};

export const LandingPage = ({
	navLinks,
	socialLinks,
	onClickLaunchDApp,
	hero = 'Trading domains on chain.',
	features = [],
	supportings = [],
	assets = [],
	backers = [],
	faqs= [],
}: LandingPageProps) => {
	return (
		<div className="relative w-full flex flex-col justify-center items-center bg-black-1000">
			<div className="max-w-[1400px] w-full md:py-9 md:px-4 sticky top-0 z-50">
				<Header
					navLinks={navLinks}
					socialLinks={socialLinks}
					onClickLaunchDApp={onClickLaunchDApp}
				/>
			</div>
			<div className="max-w-[1400px] w-full overflow-x-scroll">
				<Hero socialLinks={socialLinks} className="">
					{hero}
				</Hero>
				<div className="w-full flex flex-col justify-center items-center px-6">
					<PoweredBy className="mt-12 mb-24 md:mb-32" />
					<Features items={features} className="mb-16" />
					<Supporting items={supportings} className="mb-24 md:mb-48" />
					<Assets items={assets} className="mb-16 md:mb-48" />
					<BackedBy items={backers} className="mb-20 md:mb-32" />
					<FAQs items={faqs} className="mb-20 md:mb-32" />
					{/* <Footer socialLinks={{}} /> */}
				</div>
			</div>
		</div>
	);
};
