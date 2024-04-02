import React, { ComponentProps } from 'react';
import { SocialLinks } from './SocialLinks';
import { LaunchDapp } from './LaunchDapp';
import { NavLinks } from './NavLinks';
import namefiSvg from '../../../public/assets/namefi.svg';

export const Header = ({
	dAppHref,
	socialLinks,
}: {
	dAppHref: string;
	socialLinks: ComponentProps<typeof SocialLinks>;
}) => {
	return (
		<header className="namefi-cont namefi-header relative h-[80px] pl-6 pr-[10px] lg:rounded-[50px] ">
			<nav className="relative w-full h-full m-0 flex justify-between items-center">
				<div className="relative flex items-center gap-[6rem]">
					<img src={namefiSvg} width={90} alt="logo" role="svg" />
				</div>
				<NavLinks />
				<div className="relative flex items-center justify-end gap-8 h-[60px] ">
					<SocialLinks {...socialLinks} />
					<LaunchDapp href={dAppHref} />
				</div>
			</nav>
		</header>
	);
};
