import React from 'react';
import { cn } from '../../../../utils/cn';
import { PhoneMockup } from './PhoneMockup';
import { Markdown } from './Markdown';
import {css} from "@emotion/css";

export interface NamePotentialProps {
	name: string;
	description: string;
	preview?: React.ReactNode;
	previewRef?: React.RefObject<HTMLDivElement>;
	children?: React.ReactNode;
	className?: string;
}

const markdownClasses = css`
	font-family: 'Roboto Slab', serif;
	line-height: 1.5em;
`

export const NamePotential = ({
	name,
	description,
	preview,
	previewRef,
	children,
	className,
}: NamePotentialProps) => (
	<div
		className={cn(
			'w-full min-w-full px-0 py-0 md:py-28 md:pl-32 md:pr-24 bg-none sm:bg-[#161616] flex flex-col md:flex-row flex-wrap gap-x-20 gap-y-24 justify-between relative',
			className,
		)}>
		<div className="flex-1 pt-40 md:pt-28 px-8 md:px-0 bg-[#161616] md:bg-none">
			<div className="text-3xl md:text-6xl text-white font-semibold mb-8 md:mb-9">{name}</div>
			<Markdown className={cn(markdownClasses,"text-sm md:text-2xl mb-32 md:mb-24")} content={description} />
			<div>{children}</div>
		</div>
		<div className="m-auto py-8" ref={previewRef}>
			<PhoneMockup>{preview}</PhoneMockup>
		</div>
	</div>
);
