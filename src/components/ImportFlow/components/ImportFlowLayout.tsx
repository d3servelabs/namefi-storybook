import React from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { cn } from '../../../utils/cn';
import { ProgressBar } from '../../../components/DomainOwned';
import { LinkIcon } from '../../../components/Core/icons/Link';

export type ImportFlowLayoutMainProps = {
	icon?: React.ReactNode;
	title: React.ReactNode;
	description?: React.ReactNode;
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
	steps,
	actions,
	children,
	onBack,
	className,
}: ImportFlowLayoutMainProps) => {
	return (
		<div className={className}>
			<div
				className="flex items-center text-base text-primary-light leading-7 mb-6"
				onClick={onBack}>
				<div className="mr-2 text-base text-primary-500">
					<ArrowLeftIcon className="w-5 h-5" />
				</div>
				Back
			</div>
			{steps}
			<div>
				<div className="flex items-center">
					{icon && (
						<div className="text-5xl text-primary-500 stroke-[0.01] mr-3">{icon}</div>
					)}
					<div className="flex-1 w-full">
						<div className="text-xl font-semibold text-white tracking-wide">
							{title}
						</div>
						<div className="text-sm text-primary-light tracking-wide">
							{description}
						</div>
					</div>
				</div>
			</div>
			{children}
			{actions && <div className="mt-9">{actions}</div>}
		</div>
	);
};

export interface ImportFlowLayoutFieldProps {
	label: React.ReactNode;
	children: React.ReactNode;
	className?: string;
}

const Field = ({ label, children, className }: ImportFlowLayoutFieldProps) => {
	return <div className={cn('mb-12', className)}></div>;
};

export interface ImportFlowLayoutProgressProps {
	progress: number;
	description?: React.ReactNode;
	href?: string;
	className?: string;
}

const Progress = ({ progress, description, href, className }: ImportFlowLayoutProgressProps) => {
	return (
		<div className={cn('mb-12', className)}>
			<ProgressBar value={progress} />
			{description && (
				<a href={href} target="_blank" className="block text-[#d6d6d6] text-sm mt-2.5">
					{description}
					{href && <LinkIcon className="text-brand-blue text-lg stroke-[0.02] ml-2" />}
				</a>
			)}
		</div>
	);
};

export const ImportFlowLayout = {
	Main,
	Field,
	Progress,
};
