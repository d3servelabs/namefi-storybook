import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NamefiBrandText } from '../../../components/Core/NamefiBrandText';
import { cn } from '../../../utils/cn';
import { SocialLinks, type SocialLinkItem } from '../components/SocialLinks';
import { Button } from '../components/Button';
import { Subscription } from '../components/Subscription';
import { ScrollDownTip } from '../components/ScrollDownTip';

export type HeroProps = {
	socialLinks?: SocialLinkItem[];
	children?: React.ReactNode;
	className?: string;
};

export const Hero = ({ socialLinks = [], children, className }: HeroProps) => {
	return (
		<div
			className={cn(
				'min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-152px-120px)] pt-5 pb-12 px-6 flex flex-col justify-around items-center min-gap-y-4',
				className,
			)}>
			<div className="w-full flex md:hidden justify-end mb-5">
				<SocialLinks items={socialLinks} slice={[0, 2]} />
			</div>
			<div className="flex-1 w-full py-24 text-white tracking-wider text-3xl md:text-6xl font-bold font-third flex items-center md:justify-center">
				{children}
			</div>
			<div className="flex flex-col md:flex-row justify-center gap-4 mt-16 w-full">
				<div className="flex-1 hidden md:block md:w-[560px] max-w-full">
					<Subscription className="w-full" />
				</div>
				<div className="w-full md:hidden group">
					<Button type="primary" className="h-14 px-8 w-full">
						<span>Join Beta Test</span>
						<ArrowRight className="transition w-4.5 h-4.5 text-primary-500 group-hover:translate-x-2" />
					</Button>
				</div>
				<div className="w-full md:w-auto">
					<Button type="tonal" className="h-14 px-8 w-full">
						I'm an Investor
					</Button>
				</div>
			</div>
			<ScrollDownTip className="block md:hidden mt-12 py-3 text-sm font-normal tracking-wide">
				Why <NamefiBrandText className="text-sm">Namefi</NamefiBrandText>?
			</ScrollDownTip>
		</div>
	);
};
