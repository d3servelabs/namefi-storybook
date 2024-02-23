import React, { ReactElement, ReactNode } from 'react';
import { AppLayoutFooterLink } from './AppLayoutFooterLink';
import { Logo } from '../Logo';


type AppLayoutFooterProps = React.ComponentProps<'div'> & {
	links:
		| ReactNode
		| ReactElement<typeof AppLayoutFooterLink>
		| ReactElement<typeof AppLayoutFooterLink>[];
};

export function AppLayoutFooter({ links }: AppLayoutFooterProps) {
	return (
		<div className="w-full min-h-[100px] bg-neutral-800 rounded-tl-[2rem] rounded-tr-[2rem] grid items-center justify-center lg:justify-between grid-cols-1 lg:grid-cols-2 px-[clamp(2rem,6.25vw,7.5rem)] max-w-[1700px] mx-auto">
			<div className="justify-start items-center gap-6 flex">
				<div className="flex-col justify-start items-start gap-9 inline-flex">
					<Logo></Logo>
				</div>
				<div className="text-neutral-300 text-base text-[16px] font-normal font-['Roboto'] leading-relaxed tracking-tight">
					Built by D3SERVE LABS Inc.
				</div>
			</div>
			<div className="flex flex-row flex-wrap justify-center gap-4 lg:justify-end items-start lg:gap-12 ">
				{links}
			</div>
		</div>
	);
}
