import React from 'react';
import styled from '@emotion/styled';
import { cn } from '../../utils/cn';
import { PhoneMockup } from './PhoneMockup';
import { Markdown } from './Markdown';

export interface NamePotentialProps {
	name: string;
	description: string;
	preview?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
}

const StyledMarkdown = styled(Markdown)`
	font-family: 'Roboto Slab', serif;
	line-height: 1.5em;
`;

export const NamePotential = ({
	name,
	description,
	preview,
	children,
	className,
}: NamePotentialProps) => (
	<div
		className={cn(
			'w-full py-8 px-0 sm:py-11 sm:px-12 md:py-16 md:pl-16 md:pr-12 xl:py-28 xl:pl-32 xl:pr-24 bg-none sm:bg-[#161616] flex flex-col md:flex-row flex-wrap gap-x-20 gap-y-24 justify-between relative',
			className,
		)}>
		<div className="flex-1 pt-32 sm:pt-0 md:pt-11 xl:pt-20 pb-72 sm:pb-0 px-8 sm:px-0 bg-[#161616] sm:bg-none">
			<div className="text-3xl md:text-4xl xl:text-6xl text-white font-semibold mb-8 sm:mb-3 md:mb-4 xl:mb-9">{name}</div>
			<StyledMarkdown className="text-sm sm:text-[9px] md:text-xs xl:text-2xl mb-32 sm:mb-14 md:mb-7 xl:mb-24" content={description} />
			<div>{children}</div>
		</div>
		<div className="m-auto"> 
			<PhoneMockup>{preview}</PhoneMockup>
		</div>
	</div>
);
