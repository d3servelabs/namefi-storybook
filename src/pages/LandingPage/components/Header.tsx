import React, { useState } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import { LaunchDapp } from './LaunchDapp';
import { MenuIcon } from '../../../components/Core/icons/Menu';
import { NamefiBrandText } from '../../../components/Core/NamefiBrandText';
import { cn } from '../../../utils/cn';

export interface NavLink {
	title: React.ReactNode;
	href: string;
}
export interface SocialLink {
	icon: React.ReactNode;
	href: string;
}

export interface HeaderProps {
	navLinks: NavLink[];
	socialLinks: SocialLink[];
	onClickLaunchDApp: () => void;
}

export const Header = ({ navLinks = [], socialLinks = [], onClickLaunchDApp }: HeaderProps) => {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<>
			<header className="hidden md:flex namefi-header justify-between items-center h-20 rounded-full pl-6">
				<div className="ml-4 mr-10 text-primary-500 text-3xl flex items-center">
					<NamefiBrandText>Namefi</NamefiBrandText>
				</div>
				<div className="flex-1 w-full whitespace-nowrap overflow-hidden">
					<ul className="flex justify-around">
						{navLinks.slice(0, 3).map(({ title, href }, index) => (
							<li
								key={index}
								className="px-12 py-4 text-base text-black-200 font-primary">
								<a href={href}>{title}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="ml-10 mr-9">
					<ul className="flex gap-x-3">
						{socialLinks.slice(0, 3).map(({ icon, href }, index) => (
							<li
								key={index}
								className="w-10 h-10 bg-black-brand flex justify-center items-center rounded-full text-xl text-[#eaeaea] stroke-[0.1]">
								<a href={href}>{icon}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="mr-3">
					<LaunchDapp href="TODO" />
				</div>
			</header>
			<header
				className={cn(
					'flex flex-col md:hidden transition overflow-hidden',
					collapsed ? 'namefi-header h-20' : 'bg-brand-black h-screen',
				)}>
				<div className="shrink-0 flex justify-between items-center h-20 p-4">
					<div className="text-primary-500 text-xl flex items-center">
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
									className="block px-12 py-4 text-base text-black-200 font-primary"
									href={href}>
									{title}
								</a>
							</li>
						))}
					</ul>
					<button
						type="button"
						className="px-12 py-4 bg-primary-500 text-base text-brand-black font-primary">
						Join Beta Test
					</button>
					<ul className="flex gap-x-4">
						{socialLinks.map(({ icon, href }, index) => (
							<li key={index}>
								<a
									className="w-10 h-10 bg-black-brand flex justify-center items-center rounded-full text-xl text-[#eaeaea] stroke-[0.1]"
									href={href}>
									<span>{icon}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</header>
		</>
	);
};
