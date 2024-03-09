import React from 'react';
import Linkify from 'linkify-react';
import { LinkIcon } from '../../../Core/icons/Link';

// TODO: support extra TLDs

const LINKIFY_OPTIONS = {
	render: ({ attributes, content }) => {
		const { href, ...props } = attributes;
		return (
			<a href={href} target="_blank" {...props}>
				{content} <LinkIcon className="text-primary-500" />
			</a>
		);
	},
};

export interface LinkifyContentProps {
	content: string;
}

export const LinkifyContent = ({ content }) => (
	<Linkify options={LINKIFY_OPTIONS}>{content}</Linkify>
);
