import React from 'react';
import {
	IconCircleButton,
	type IconCircleButtonProps,
} from '../../../components/Core/Buttons/IconCircleButton';
import { cn } from '../../../utils/cn';
import { LinkChip, type LinkChipProps } from './LinkChip';
import { ProgressBar } from './ProgressBar';
import { LinkIcon } from '../../../components/Core/icons/Link';

export type DomainOwnedLayoutMainProps = {
	icon?: React.ReactNode;
	title: React.ReactNode;
	description?: React.ReactNode;
	shortcuts?: IconCircleButtonProps[];
	children?: React.ReactNode;
	className?: string;
};

const Main = ({
	icon,
	title,
	description,
	shortcuts,
	children,
	className,
}: DomainOwnedLayoutMainProps) => {
	return (
		<div className={cn('py-12', className)}>
			<div className="mb-12">
				<div className="flex items-center pb-6 mb-3 pr-12">
					{icon && (
						<div className="text-5xl text-primary-500 stroke-[0.02] mr-3">{icon}</div>
					)}
					<div className="flex-1 w-full">
						<div className="text-xl font-semibold text-white tracking-wide">
							{title}
						</div>
						<div className="text-sm text-primary-light">{description}</div>
					</div>
				</div>
				{!!shortcuts?.length && (
					<div className="flex items-center space-x-4">
						{shortcuts.map(({ className, ...props }, index) => (
							<IconCircleButton
								key={index}
								className={cn('text-2xl', className)}
								{...props}
							/>
						))}
					</div>
				)}
			</div>
			{children}
		</div>
	);
};

export interface DomainOwnedLayoutLinksProps {
	title?: React.ReactNode;
	links?: LinkChipProps[];
	className?: string;
}

const Links = ({ title, links, className }: DomainOwnedLayoutLinksProps) => {
	return (
		<div className={cn('text-sm text-black-500', className)}>
			<div className="mb-3">{title}</div>
			<div className="flex flex-wrap gap-3">
				{links?.map((link, index) => (
					<LinkChip key={index} target="_blank" {...link} />
				))}
			</div>
		</div>
	);
};

export interface DomainOwnedLayoutProgressProps {
	progress: number;
	description?: React.ReactNode;
	href?: string;
	className?: string;
}

const Progress = ({ progress, description, href, className }: DomainOwnedLayoutProgressProps) => {
	return (
		<div className={cn('mb-12', className)}>
			<ProgressBar value={progress} className="my-2" />
			{description && (
				<a href={href} target="_blank" className="block text-[#d6d6d6] text-sm mt-2.5">
					{description}
					{href && <LinkIcon className="text-brand-blue text-lg stroke-[0.02] ml-2" />}
				</a>
			)}
		</div>
	);
};

export const DomainOwnedLayout = {
	Main,
	Links,
	Progress,
};
