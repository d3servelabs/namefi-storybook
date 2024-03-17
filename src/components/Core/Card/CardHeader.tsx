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
				<div className="flex mb-2">
					<img
						onClick={handleClickBack}
						className="block w-[22px] cursor-pointer"
						src="/assets/arrow-left.svg"
						alt="Arrow"
						role="img"
					/>
				</div>
			)}
			<div className="text-white text-lg font-bold font-['Roboto'] leading-8 tracking-wide mb-3 w-full">
				{children}
			</div>
		</div>
	);
};
