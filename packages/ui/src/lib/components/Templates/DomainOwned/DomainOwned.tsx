import React from 'react';
import { Information } from './views/Information';
import { Transfer, type TransferProps, type TransferStatus } from './views/Transfer';
import { ListForSale } from './views/ListForSale';
import { Borrow } from './views/Borrow';
import { LinkChipProps } from './components/LinkChip';

export type { TransferStatus };

export type DomainOwnedView = 'INFORMATION' | 'TRANSFER' | 'LIST_FOR_SALE' | 'BORROW';

export type DomainOwnedProps = TransferProps & {
	view: DomainOwnedView;
	onChangeView?: (view: DomainOwnedView) => void;
	listForSaleLinks?: LinkChipProps[];
	borrowLinks?: LinkChipProps[];
};

export const DomainOwned = ({
	view,
	onChangeView,
	viewLinks,
	listForSaleLinks,
	borrowLinks,
	className,
	...props
}: DomainOwnedProps) => {
	switch (view) {
		case 'INFORMATION': {
			return (
				<Information
					links={viewLinks}
					onClickTransfer={() => onChangeView?.('TRANSFER')}
					onClickListForSale={() => onChangeView?.('LIST_FOR_SALE')}
					onClickBorrow={() => onChangeView?.('BORROW')}
					className={className}
				/>
			);
		}
		case 'TRANSFER': {
			return <Transfer viewLinks={viewLinks} className={className} {...props} />;
		}
		case 'LIST_FOR_SALE': {
			return <ListForSale links={listForSaleLinks} className={className} />;
		}
		case 'BORROW': {
			return <Borrow links={borrowLinks} className={className} />;
		}
		default: {
			return null;
		}
	}
};
