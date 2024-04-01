import React from 'react';
import { OwnedDomainsGrid, OwnedDomainsGridProps } from '../../components/OwnedDomainsGrid';
import {
	DomainCardDemo,
	DomainCardProps,
} from '../../components/Templates/DomainCard/DomainCardDemo';

import { DomainOwned } from '../../components/Templates/DomainOwned';

export type DomainOwnedContentProps = {
	domainCardProps: DomainCardProps;
	ownedDomainsProps: OwnedDomainsGridProps;
};
export const DomainOwnedContent = ({
	domainCardProps,
	ownedDomainsProps,
}: DomainOwnedContentProps) => {
	return (
		<section className="relative min-h-screen py-24">
			<div className=" w-full h-auto flex justify-center items-center gap-36 relative mb-20">
				<DomainCardDemo {...domainCardProps} />
				{/*<View />*/}
				<DomainOwned
					status={'TRANSFERRED'}
					view={'INFORMATION'}
					viewLinks={[
						{
							children: 'Etherscan',
							href: 'https://etherscan.io/',
						},
						{
							children: 'Blockscout',
							href: 'https://blockscout.com/',
						},
						{
							children: 'OpenSea',
							href: 'https://opensea.io/',
						},
						{
							children: 'Blur',
							href: 'https://blur.cash/',
						},
						{
							children: 'LooksRare',
							href: 'https://looksrare.org/',
						},
					]}
				/>
			</div>
			<OwnedDomainsGrid {...ownedDomainsProps} />
		</section>
	);
};
