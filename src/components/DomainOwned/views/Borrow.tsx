import React from 'react';
import { NamefiBrandText } from '../../../components';
import { LightningIcon } from '../../../components/Core/icons/Lightning';
import { DomainOwnedLayout } from '../components/DomainOwnedLayout';
import { type LinkChipProps } from '../components/LinkChip';

export interface BorrowProps {
	links?: LinkChipProps[];
	className?: string;
}

export const Borrow = ({ links, className }: BorrowProps) => {
	return (
		<DomainOwnedLayout.Main
			icon={<LightningIcon />}
			title={<div>Borrow against your <NamefiBrandText>Namefi</NamefiBrandText> domain.</div>}
			description="Our current beta version redirects you to a 3rd party, please manage your own risk."
			className={className}>
			<DomainOwnedLayout.Links title="Borrow on" links={links} />
		</DomainOwnedLayout.Main>
	);
};
