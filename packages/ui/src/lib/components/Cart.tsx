import React from 'react';

interface CartProps {
	cartItems: number;
}

export const Cart = ({ cartItems = 0 }: CartProps) => {
	return (
		<div className="relative flex h-14 w-16 items-center justify-center">
			{cartItems > 0 && (
				<span className="absolute right-0 top-0 block h-7 min-w-7 rounded-full bg-[#ffffff0d] text-center text-lg font-semibold text-[#48e59b]">
					{cartItems}
				</span>
			)}
			<img className="w-[40px]" src="/assets/Cart.svg" alt="Demo Icon " role="img" />
		</div>
	);
};
