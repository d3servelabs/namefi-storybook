import React, { useMemo } from 'react';
import { ReverseRightIcon } from '../../../Core/icons/ReverseRight';
import { BookmarkIcon } from '../../../Core/icons/Bookmark';
import { LightningIcon } from '../../../Core/icons/Lightning';
import { DomainOwnedLayout } from '../components/DomainOwnedLayout';
import { type LinkChipProps } from '../components/LinkChip';

export interface InformationProps {
	links?: LinkChipProps[];
	onClickTransfer?: () => void;
	onClickListForSale?: () => void;
	onClickBorrow?: () => void;
	className?: string;
}

export const Information = ({
	links,
	onClickTransfer,
	onClickListForSale,
	onClickBorrow,
	className,
}: InformationProps) => {
	const shortcuts = useMemo(
		() => [
			{
				icon: <ReverseRightIcon />,
				onClick: onClickTransfer,
			},
			{
				icon: <BookmarkIcon />,
				onClick: onClickListForSale,
			},
			{
				icon: <LightningIcon />,
				onClick: onClickBorrow,
			},
		],
		[onClickTransfer, onClickListForSale, onClickBorrow],
	);
	return (
		<DomainOwnedLayout.Main
			title="You own this domain."
			description="You can manage, transfer, list for sale, or borrow against it."
			shortcuts={shortcuts}
			className={className}>
			<DomainOwnedLayout.Links title="View on" links={links} />
		</DomainOwnedLayout.Main>
	);
};
