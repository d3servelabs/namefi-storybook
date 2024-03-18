import { Information, type InformationProps } from './Information';
import { Transfer, type TransferProps } from './Transfer';
import { ListForSale, type ListForSaleProps } from './ListForSale';
import { Borrow, type BorrowProps } from './Borrow';

export const DomainOwnedViews = {
	...Information,
	...Transfer,
	...ListForSale,
	...Borrow,
};

export namespace DomainOwnedViewsInterfaces {
	export type InformationViewProps = InformationProps;
	export type TransferViewProps = TransferProps;
	export type ListForSaleViewProps = ListForSaleProps;
	export type BorrowViewProps = BorrowProps;
}
