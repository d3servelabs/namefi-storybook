import React, { ComponentProps, ReactNode } from 'react';
import { LoadingAnimation } from '../../../../Core/LoadingAnimation';
import { Tuple } from '../../../../../utils/Tuple';
import { cn } from '../../../../../utils/cn';
import {ReactSingleNode} from "../../../../../utils/React";
import GlobeIcon from '/assets/globe.svg'
import LinkIcon from '/assets/link.svg'

function ActivitiesListItem({
	className,
	children,
	...props
}: ComponentProps<'div'> & { children: Tuple<ReactNode, 3> }) {
	return (
		<div
			{...props}
			className={cn(
				'flex justify-between w-[574px] h-6 font-primary font-normal text-white ',
				className,
			)}>
			{children}
		</div>
	);
}

export function ActivitiesListItemCol1({ className, children, ...props }: ComponentProps<'div'>) {
	return (
		<p {...props} className={cn('text-base tracking-wider min-w-[110px]')}>
			{children}
		</p>
	);
}

export function ActivitiesListItemCol2({
	className,
	children,
	...props
}: Omit<ComponentProps<'div'>,'children'> & { children: ReactSingleNode }) {
	return (
		<p
			{...props}
			className={cn('text-center text-base tracking-wider min-w-[153px]', className)}>
			{typeof children === 'string' && children.length > 14 ? (
				<>
					{children.substring(5)}&bull;&bull;&bull;{children.substring(-5)}
				</>
			) : (
				children
			)}
		</p>
	);
}

export function ActivitiesListItemCol3({
	loading,
	waitingForRegistrar,
	children,
	className,
	...props
}: ComponentProps<'div'> & { loading?:boolean; waitingForRegistrar?:boolean }) {
	return (
		<div
			{...props}
			className={cn('w-[200px] h-full flex items-center justify-between', className)}>
			{loading ? (
				<>
					<div className="w-[175px] flex items-center h-full ">
						<LoadingAnimation />
					</div>
					<button>
						<img className="w-4" src={LinkIcon} alt="link image" />
					</button>
				</>
			) : waitingForRegistrar ? (
				<>
					<img
						className="w-5"
						src={GlobeIcon}
						alt="globe image"
						role="img"
					/>
					<p className="text-[#c6eedb] text-sm">Waiting on registrar</p>
				</>
			) : (
				children
			)}
		</div>
	);
}

ActivitiesListItem.Columns = {
	One: ActivitiesListItemCol1,
	Two: ActivitiesListItemCol2,
	Three: ActivitiesListItemCol3,
};

export default ActivitiesListItem