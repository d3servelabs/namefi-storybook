import React from 'react';
import * as CartActions from './CartActions';
import * as AgreeToTerms from './AgreeToTerms';
import CartDetails from './CartDetails';
import CartItem from './CartItem';
import CartHeader from './CartHeader';
import CartRoot from './CartRoot';

export type CartProps = {
	checkedOut?: boolean;
	isConnectWalletError?: boolean;
	signInError?: boolean;
	isConnectWallet?: boolean;
	domainName?: string;
	years?: number;
	price?: number;
	balance?: number;
};

export const Demo = ({ checkedOut, isConnectWallet, domainName, years, price }: CartProps) => {
	return (
		<CartRoot>
			<CartHeader />
			{!!(domainName && price && years) && (
				<CartItem domainName={domainName} price={price} years={years} />
			)}
			<CartDetails availableTokens={100} price={20} networkFeeETH={0.001} networkFeeUSD={3.2} />

			{!checkedOut && (
				<AgreeToTerms.Root>
					<AgreeToTerms.Checkbox></AgreeToTerms.Checkbox>
					<AgreeToTerms.Label>I agree to the terms and conditions</AgreeToTerms.Label>
				</AgreeToTerms.Root>
			)}
			<CartActions.Root>
				<CartActions.BackButton></CartActions.BackButton>
				<CartActions.CheckoutButton></CartActions.CheckoutButton>
			</CartActions.Root>
		</CartRoot>
	);
};
