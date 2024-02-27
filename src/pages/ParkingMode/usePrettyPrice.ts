import { useMemo } from 'react';

export const usePrettyPrice = (price: number, precision: number = 2) =>
	useMemo(() => {
		return price.toFixed(precision).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}, [price]);
