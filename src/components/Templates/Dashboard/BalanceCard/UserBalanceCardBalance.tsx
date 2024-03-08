import { Balance, BalanceProps } from '../../../Core/Balance';
import React from 'react';

export const UserBalanceCardBalance = (balanceProps: Partial<BalanceProps>) => {
	return (
		<Balance
			color="#48e59b"
			fontSizeP="38.4px"
			fontSizeSpan="28.8px"
			approxBalance={true}
			{...balanceProps}
		/>
	);
};
