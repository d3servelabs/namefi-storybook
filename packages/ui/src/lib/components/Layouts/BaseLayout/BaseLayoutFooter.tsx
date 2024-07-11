import React, { ReactElement, ReactNode } from 'react';
import BaseLayoutFooterLink from './BaseLayoutFooterLink';
import NamefiWhiteLogo from "../../Core/icons/NamefiWhiteLogo";
import {cn} from "../../../utils/cn";

type AppLayoutFooterProps = React.ComponentProps<'div'> & {
	lowKey?:boolean
	links: ReactNode | ReactElement<typeof BaseLayoutFooterLink> | ReactElement<typeof BaseLayoutFooterLink>[];
};

export default function BaseLayoutFooter({lowKey = true, links,className,...props }: AppLayoutFooterProps) {
	return (
		<div {...props} className={cn("w-full min-h-[100px] bg-neutral-800 rounded-tl-[2rem] rounded-tr-[2rem] grid items-center justify-center lg:justify-between grid-cols-1 lg:grid-cols-2 px-[clamp(2rem,6.25vw,7.5rem)] max-w-[1700px] mx-auto", lowKey && 'bg-transparent border-t-[1px] border-t-[#5A5A5A]', className)}>
			<div className="justify-start items-center gap-6 flex">
				<div className="flex-col justify-start items-start gap-9 inline-flex">
					{lowKey ||<NamefiWhiteLogo className={'h-9'} />}
				</div>
				<div className="text-neutral-300 text-base text-[16px] font-normal font-['Roboto'] leading-relaxed tracking-tight">
					D3SERVE LABS, Inc. All Rights Reserved.
				</div>
			</div>
			<div className="flex flex-row flex-wrap justify-center gap-4 lg:justify-end items-start lg:gap-12 ">
				{links}
			</div>
		</div>
	);
}
