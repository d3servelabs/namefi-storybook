import React from 'react';
import { cn } from '../../../../utils/cn';
import NamefiLogo from '../../../Core/icons/NamefiLogo';
import { DiscordIcon } from '../../../Core/icons/Discord';
import { TwitterIcon } from '../../../Core/icons/Twitter';
import { BaseLayoutHeader } from '../../../Layouts/BaseLayout';
import { UserAuthStateDemo, type UserAuthStateProps } from '../../../Templates/UserAuthState/UserAuthStateDemo';

export { type UserAuthStateProps }

export interface ParkingModeHeaderProps {
	className?: string;
	twitterLink?: string;
	discordLink?: string;
	userAuthStateProps?: UserAuthStateProps;
} 

export const ParkingModeHeader = ({ className, twitterLink, discordLink, userAuthStateProps }: ParkingModeHeaderProps) => {
	return (
		<div className={cn('px-0 md:px-11', className)}>
			<BaseLayoutHeader endSlot={<UserAuthStateDemo {...userAuthStateProps} />} className="hidden md:block" />
			<div className="flex flex-wrap md:hidden p-4 justify-between items-center namefi-header">
				<NamefiLogo className={'w-22.5'} />
				<div className="flex gap-4">
					<a className="p-2 bg-[#313131] rounded-full flex justify-center items-center" href={twitterLink} target="_blank">
						<TwitterIcon className="text-xl text-white" />
					</a>
					<a className="p-2 bg-[#313131] rounded-full flex justify-center items-center" href={discordLink} target="_blank">
						<DiscordIcon className="text-xl text-white" />
					</a>
				</div>
			</div>
		</div>
	);
};
