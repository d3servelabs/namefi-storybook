import React, { useMemo } from 'react';

export const useShortAddress = (address: string) =>
	useMemo(() => {
		if (!address) return '';
		return `${address.slice(0, 6)}...${address.slice(-4)}`;
	}, [address]);
