import React, { useCallback } from 'react';

export interface CardHeaderProps {
	children: React.ReactNode;
	className?: string;
	onBack?: () => void;
}

export const CardHeader = ({ children, className, onBack }: CardHeaderProps) => {
	const handleClickBack = useCallback(() => {
		onBack?.();
	}, [onBack]);
	return (
		<div className={className}>
			{onBack && (
				<div className="mb-2 flex">
					<img
						onClick={handleClickBack}
						className="block w-[22px] cursor-pointer"
						src="/assets/arrow-left.svg"
						alt="Arrow"
						role="img"
					/>
				</div>
			)}
			<div className="mb-3 w-full font-['Roboto'] text-lg font-bold leading-8 tracking-wide text-white">
				{children}
			</div>
		</div>
	);
};
