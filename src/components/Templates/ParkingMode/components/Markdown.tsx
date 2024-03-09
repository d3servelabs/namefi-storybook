import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const MarkdownContent = styled.div`
	color: #d6d6d6;
	font-weight: 300;
	strong {
		color: #fff;
		font-weight: 600;
	}
	em {
		color: #48e59b;
		font-style: normal;
	}
`;

export interface MarkdownProps {
	content?: string;
	className?: string;
}

export const Markdown = ({ content = '', className }: MarkdownProps) => {
	const contentHTML = useMemo(
		() => ({ __html: DOMPurify.sanitize(marked.parse(content) as string) }),
		[content],
	);
	return (
		<MarkdownContent className={className}>
			<div dangerouslySetInnerHTML={contentHTML}></div>
		</MarkdownContent>
	);
};
