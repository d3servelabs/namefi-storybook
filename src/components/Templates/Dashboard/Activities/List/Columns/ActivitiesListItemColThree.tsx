import React, { ComponentProps } from 'react';
import { cn } from '../../../../../../utils/cn';
import { LoadingAnimation } from '../../../../../Core/LoadingAnimation';
// import GlobeIcon from '../../../../../../assets/globe.svg';
import LinkIcon from '../../../../../../assets/link.svg';
import {GlobeIcon} from "lucide-react";

function ActivitiesListItemColThree({ children, className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn('h-full flex items-center justify-start', className)}>
			{children}
		</div>
	);
}

function ActivitiesListItemColThreePendingOperation({
	children,
	...props
}: ComponentProps<typeof ActivitiesListItemColThree>) {
	return (
		<ActivitiesListItemColThree {...props}>
			<div className="w-[175px] flex items-center h-full ">
				<LoadingAnimation />
			</div>
			<button>
				<img className="w-4" src={LinkIcon} alt="link image" />
			</button>
		</ActivitiesListItemColThree>
	);
}

function ActivitiesListItemColThreeWaitingForRegistrar({
	children,
	...props
}: ComponentProps<typeof ActivitiesListItemColThree>) {
	return (
		<ActivitiesListItemColThree {...props} className={cn('gap-1',props.className)}>
			{/*<img className="w-6 h-6 p-1" src={GlobeIcon} alt="globe image" role="img" />*/}
			<GlobeIcon className={'text-primary w-6 h-6 p-1'}/>
			<p className="text-[#c6eedb] text-sm">Waiting on registrar</p>
		</ActivitiesListItemColThree>
	);
}

export default Object.assign(ActivitiesListItemColThree, {
	WaitingForRegistrar: ActivitiesListItemColThreeWaitingForRegistrar,
	PendingOperation: ActivitiesListItemColThreePendingOperation,
});
