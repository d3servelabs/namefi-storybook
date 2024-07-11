import { useMemo } from 'react';

export const prettyPrice = (price: number, precision: number = 2) =>
	price.toFixed(precision).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const usePrettyPrice = (price: number, precision: number = 2) =>
	useMemo(() => prettyPrice(price, precision), [price, precision]);
