import React from 'react';
import { cn } from '../../../../utils/cn';
import NamefiLogo from '../../../Core/icons/NamefiLogo';
import { DiscordIcon } from '../../../Core/icons/Discord';
import { TwitterIcon } from '../../../Core/icons/Twitter';
import { BaseLayoutHeader } from '../../../Layouts/BaseLayout';
import UserAuthStateDemo, { type UserAuthStateProps } from '../../UserAuthState/Demo';

export { type UserAuthStateProps };

export interface ParkingModeHeaderProps {
	className?: string;
	twitterLink?: string;
	discordLink?: string;
	userAuthStateProps?: UserAuthStateProps;
}

export const ParkingModeHeader = ({
	className,
	twitterLink,
	discordLink,
	userAuthStateProps,
}: ParkingModeHeaderProps) => {
	return (
		<div className={cn('px-0 md:px-11', className)}>
			<BaseLayoutHeader
				endSlot={<UserAuthStateDemo {...userAuthStateProps} />}
				className="hidden md:block"
			/>
			<div className="namefi-header flex flex-wrap items-center justify-between p-4 md:hidden">
				<NamefiLogo className={'w-22.5'} />
				<div className="flex gap-4">
					<a
						className="flex items-center justify-center rounded-full bg-[#313131] p-2"
						href={twitterLink}
						target="_blank"
						rel="noreferrer">
						<TwitterIcon className="text-xl text-white" />
					</a>
					<a
						className="flex items-center justify-center rounded-full bg-[#313131] p-2"
						href={discordLink}
						target="_blank"
						rel="noreferrer">
						<DiscordIcon className="text-xl text-white" />
					</a>
				</div>
			</div>
		</div>
	);
};
