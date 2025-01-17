import React, { ReactNode } from 'react';
import StyledDiv from "../../../Core/StyledDiv";
import { css } from "@emotion/css";

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
	content?: ReactNode;
	className?: string;
}

export const Markdown = ({ content = null, className }: MarkdownProps) => {
	return (
		<MarkdownContent className={className}>
			{content}
		</MarkdownContent>
	);
};
