import React, { useState } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import { SocialLinks, type SocialLinkItem } from './SocialLinks';
import { LaunchDAppButton } from './LaunchDAppButton';
import { MenuIcon } from '../../../components/Core/icons/Menu';
import { NamefiBrandText } from '../../../components/Core/NamefiBrandText';
import { cn } from '../../../utils/cn';

export interface HeaderNavLink {
	title: React.ReactNode;
	href: string;
}

export interface HeaderProps {
	navLinks?: HeaderNavLink[];
	socialLinks?: SocialLinkItem[];
	onClickLaunchDApp?: () => void;
	onClickJoinBetaTest?: () => void;
	className?: string;
}

export const Header = ({
	navLinks = [],
	socialLinks = [],
	onClickLaunchDApp,
	onClickJoinBetaTest,
	className,
}: HeaderProps) => {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<>
			<header
				className={cn(
					'hidden md:flex namefi-header justify-between items-center h-20 rounded-full pl-6 backdrop-blur-lg',
					className,
				)}>
				<div className="ml-4 mr-10 text-primary-500 text-3xl flex items-center">
					<NamefiBrandText>Namefi</NamefiBrandText>
				</div>
				<div className="flex-1 w-full whitespace-nowrap overflow-hidden">
					<ul className="flex justify-around">
						{navLinks.slice(0, 3).map(({ title, href }, index) => (
							<li
								key={index}
								className="transition-all px-12 py-4 text-base text-black-200 font-primary">
								<a href={href} className="hover:text-brand-light">{title}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="ml-10 mr-9">
					<SocialLinks items={socialLinks} slice={[0, 3]} />
				</div>
				<div className="mr-3">
					<LaunchDAppButton onClick={onClickLaunchDApp} />
				</div>
			</header>
			<header className={cn('block md:hidden relative h-20', className)}>
				<div
					className={cn(
						'transition-all flex flex-col overflow-hidden absolute left-0 right-0',
						collapsed ? 'namefi-header h-20' : 'bg-brand-black h-screen',
					)}>
					<div className="shrink-0 flex justify-between items-center h-20 p-4">
						<div className="ml-1.5 text-primary-500 text-xl flex items-center">
							<NamefiBrandText>Namefi</NamefiBrandText>
						</div>
						<div
							className="p-2 flex items-center cursor-pointer"
							onClick={() => setCollapsed(!collapsed)}>
							{collapsed ? (
								<MenuIcon className="text-xl text-primary-500 stroke-[0.1]" />
							) : (
								<Cross1Icon className="w-5 h-5 text-primary-500" />
							)}
						</div>
					</div>
					<div className="flex flex-col items-center gap-y-16 py-16 overflow-y-auto">
						<ul className="flex flex-col items-center gap-y-4">
							{navLinks.map(({ title, href }, index) => (
								<li key={index}>
									<a
										className="transition-all block px-12 py-4 text-base text-black-200 font-primary hover:text-brand-light"
										href={href}>
										{title}
									</a>
								</li>
							))}
						</ul>
						<button
							type="button"
							onClick={onClickJoinBetaTest}	
							className="px-12 py-4 bg-primary-500 text-base text-brand-black font-primary">
							Join Beta Test
						</button>
						<SocialLinks items={socialLinks} className="gap-x-4" />
					</div>
				</div>
			</header>
		</>
	);
};
