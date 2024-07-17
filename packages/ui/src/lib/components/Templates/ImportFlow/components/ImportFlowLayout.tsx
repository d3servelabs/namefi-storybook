import React from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import  { cn }  from "@namefi/utils"
import {
	DomainOwnedLayout,
	type DomainOwnedLayoutProgressProps,
} from '../../DomainOwned/components/DomainOwnedLayout';
import InfoCircledSVG from '../../../../assets/InfoCircled.svg';

export type ImportFlowLayoutMainProps = {
	icon?: React.ReactNode;
	title: React.ReactNode;
	description?: React.ReactNode;
	illustration?: React.ReactNode;
	steps?: React.ReactNode;
	actions?: React.ReactNode;
	children?: React.ReactNode;
	onBack?: () => void;
	className?: string;
};

const Main = ({
	icon,
	title,
	description,
	illustration,
	steps,
	actions,
	children,
	onBack,
	className,
}: ImportFlowLayoutMainProps) => {
	return (
		<div className={className}>
			<div
				className="inline-flex items-center text-base text-primary-light leading-7 mb-6 cursor-pointer"
				onClick={onBack}>
				<div className="mr-2 text-base text-primary-500">
					<ArrowLeftIcon className="w-5 h-5" />
				</div>
				Back
			</div>
			{steps}
			<div className="flex items-start">
				<div className="flex items-center">
					{icon && (
						<div className="text-5xl text-primary-500 stroke-[0.01] mr-3">{icon}</div>
					)}
					<div className="flex-1 w-full">
						<div className="text-xl font-semibold text-white tracking-wide">
							{title}
						</div>
						<div className="text-sm text-primary-light tracking-wider">
							{description}
						</div>
					</div>
				</div>
				{illustration && <div>{illustration}</div>}
			</div>
			{children}
		</div>
	);
};

export interface ImportFlowLayoutActionsProps {
	children: React.ReactNode;
	className?: string;
}

const Actions = ({ children, className }: ImportFlowLayoutActionsProps) => {
	return <div className={cn('flex items-center', className)}>{children}</div>;
};

export interface ImportFlowLayoutFieldProps {
	label: React.ReactNode;
	tooltip?: React.ReactNode;
	children: React.ReactNode;
	className?: string;
}

const Field = ({ label, tooltip, children, className }: ImportFlowLayoutFieldProps) => {
	return (
		<div className={cn('mb-5', className)}>
			<div className="flex items-center text-base text-primary-500 leading-7 tracking-wide mb-1">
				{label}
				{tooltip && <img src={InfoCircledSVG} className="ml-2 w-5" />}
			</div>
			<div className="text-lg text-white">{children}</div>
		</div>
	);
};

export type ImportFlowLayoutProgressProps = DomainOwnedLayoutProgressProps;
const Progress = DomainOwnedLayout.Progress;

export const ImportFlowLayout = {
	Main,
	Actions,
	Field,
	Progress,
};
