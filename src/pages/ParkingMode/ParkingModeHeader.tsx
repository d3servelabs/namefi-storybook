import React from 'react';
import { cn } from '../../utils/cn';
import NamefiLogo from '../../components/Core/icons/NamefiLogo';
import { DiscordIcon } from '../../components/Core/icons/Discord';
import { TwitterIcon } from '../../components/Core/icons/Twitter';
import { BaseLayoutHeader } from '../../components/Layouts/BaseLayout';
import { UserAuthStateDemo } from '../../components/Templates/UserAuthState/UserAuthStateDemo';

export interface ParkingModeHeaderProps {
	className?: string;
} 

export const ParkingModeHeader = ({ className }: ParkingModeHeaderProps) => {
	return (
		<div className={cn('px-0 md:px-11', className)}>
			<BaseLayoutHeader endSlot={<UserAuthStateDemo />} className="hidden md:block" />
			<div className="flex flex-wrap md:hidden p-4 justify-between items-center namefi-header">
				<NamefiLogo className={'w-22.5'} />
				<div className="flex gap-4">
					<div className="p-2 bg-[#313131] rounded-full flex justify-center items-center">
						<TwitterIcon className="text-xl text-white" />
					</div>
					<div className="p-2 bg-[#313131] rounded-full flex justify-center items-center">
						<DiscordIcon className="text-xl text-white" />
					</div>
				</div>
			</div>
		</div>
	);
};
