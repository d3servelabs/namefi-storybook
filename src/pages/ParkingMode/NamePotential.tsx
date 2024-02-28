import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { cn } from '../../utils/cn';

export interface NamePotentialProps {
	name: string;
	description: string;
	preview?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
}

const MarkdownContent = styled.div`
	font-family: 'Roboto Slab', serif;
	font-size: 21px;
	line-height: 34px;
	color: #d6d6d6;
	strong {
		font-weight: 600;
	}
	em {
		font-style: normal;
		color: #48e59b;
	}
`;

const PhoneContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	mask-image: url('/assets/iPhoneMask.svg');
	mask-size: 100%;
	mask-repeat: no-repeat;
`;

export const NamePotential = ({
	name,
	description,
	preview,
	children,
	className,
}: NamePotentialProps) => {
	const contentHTML = useMemo(
		() => ({ __html: DOMPurify.sanitize(marked.parse(description) as string) }),
		[description],
	);
	return (
		<div
			className={cn('w-full py-28 pl-32 pr-24 bg-[#161616] flex justify-between', className)}>
			<div className="flex-1 pt-20 pr-20">
				<div className="text-6xl text-white font-semibold mb-9">{name}</div>
				<MarkdownContent>
					<div className="mb-24" dangerouslySetInnerHTML={contentHTML}></div>
				</MarkdownContent>
				<div>{children}</div>
			</div>
			<div className="relative">
				<img className="block w-[373px]" src="/assets/iPhone.svg" />
				<PhoneContent>
					<div className="w-full h-full">{preview}</div>
				</PhoneContent>
			</div>
		</div>
	);
};
