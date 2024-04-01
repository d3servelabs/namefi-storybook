import React from 'react';
import { NamefiBrandText } from '../../../index';
import { BookmarkIcon } from '../../../Core/icons/Bookmark';
import { DomainOwnedLayout } from '../components/DomainOwnedLayout';
import { type LinkChipProps } from '../components/LinkChip';

export interface ListForSaleProps {
	links?: LinkChipProps[];
	className?: string;
}

export const ListForSale = ({ links, className }: ListForSaleProps) => {
	return (
		<DomainOwnedLayout.Main
			icon={<BookmarkIcon />}
			title={<div>List your <NamefiBrandText>Namefi</NamefiBrandText> domain for sale.</div>}
			description="You can list on multiple marketplaces."
			className={className}>
			<DomainOwnedLayout.Links title="List on" links={links} />
		</DomainOwnedLayout.Main>
	);
};
