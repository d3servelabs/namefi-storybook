import React from 'react';
import { type SocialLinkItem } from './components/SocialLinks';
import { Header, type NavLink } from './components/Header';
import { type FeatureCardProps } from './components/FeatureCard';
import { Hero } from './sections/Hero';
import { PoweredBy } from './sections/PoweredBy';
import { Features } from './sections/Features';
import { Supporting, type SupportingItem } from './sections/Supporting';
import { Assets, type AssetItem } from'./sections/Assets';
import { BackedBy } from './components/BackedBy';
import { Footer } from './components/Footer';
import { List as FaqList, FaqComponentProps } from './components/FAQ';

export type LandingPageProps = {
	navLinks: NavLink[];
	socialLinks: SocialLinkItem[];
	onClickLaunchDApp: () => void;
	hero: React.ReactNode;
	features: FeatureCardProps[];
	supportings: SupportingItem[];
	assets: AssetItem[];
	faqComponentProps: FaqComponentProps;
};

export const LandingPage = ({
	navLinks,
	socialLinks,
	onClickLaunchDApp,
	hero = 'Trading domains on chain.',
	features = [],
	supportings = [],
	assets = [],
	faqComponentProps,
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
					<BackedBy />
					<div className="relative w-full md:w-[1200px] flex flex-col justify-center items-center gap-[40px] md:gap-[64px] ">
						<h3 className="font-bold text-3xl text-primary-500 tracking-widest self-start ">
							FAQs
						</h3>
						<div className="w-full h-auto flex flex-col justify-center items-center">
							<FaqList {...faqComponentProps} />
						</div>
					</div>
					{/* <Footer socialLinks={{}} /> */}
				</div>
			</div>
		</div>
	);
};
