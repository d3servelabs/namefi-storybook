import React, { useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import StyledDiv from "../../../Core/StyledDiv";
import {css} from "@emotion/css";

const MarkdownContent = StyledDiv(css`
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
`);

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
