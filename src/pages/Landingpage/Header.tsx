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
		<header className="namefi-cont namefi-header relative min-h-[80px] pl-6 pr-[10px] lg:rounded-[50px] flex flex-col justify-center max-lg:py-3">
			<nav className="relative w-full h-full m-0 flex flex-row flex-wrap justify-between items-center max-lg:gap-2">
				<div className="relative flex items-center order-0">
					<img src={namefiSvg} width={90} alt="logo" role="svg" />
				</div>
				<div className={'order-3 lg:order-1 max-lg:w-full  '}>
					<NavLinks />
				</div>
				<div className="relative flex items-center justify-end gap-8 order-2">
					<SocialLinks {...socialLinks} />
					<LaunchDapp href={dAppHref} />
				</div>
			</nav>
		</header>
	);
};
