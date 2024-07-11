import { Balance, BalanceProps } from '../../../Core/Balance';
import React from 'react';

export const UserBalanceCardBalance = (balanceProps: Partial<BalanceProps>) => {
	return (
		<Balance
			color="#48e59b"
			fontSizeP="2.4rem"
			fontSizeSpan="1.75rem"
			approxBalance={true}
			{...balanceProps}
		/>
	);
};
