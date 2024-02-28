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
	font-size: 21px;
	line-height: 34px;
`;

export const NamePotential = ({
	name,
	description,
	preview,
	children,
	className,
}: NamePotentialProps) => (
	<div className={cn('w-full py-28 pl-32 pr-24 bg-[#161616] flex justify-between', className)}>
		<div className="flex-1 pt-20 pr-20">
			<div className="text-6xl text-white font-semibold mb-9">{name}</div>
			<StyledMarkdown className="mb-24" content={description} />
			<div>{children}</div>
		</div>
		<PhoneMockup>{preview}</PhoneMockup>
	</div>
);
