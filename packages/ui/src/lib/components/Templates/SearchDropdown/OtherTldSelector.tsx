import React from 'react';
import { cn } from '../../../utils/cn';
import { SolidButton } from '../../Core/Buttons/SolidButton';

export const OtherTldSelector = ({
	tlds,
	onTldClicked,
}: {
	tlds: string[];
	onTldClicked?: (tld: string) => void;
}) => {
	return (
		<div className={cn('w-full flex flex-wrap gap-1.5 ')}>
			{tlds.map((data) => (
				<SolidButton
					id={data}
					onClick={() => onTldClicked?.(data)}
					className="w-auto bg-[#1c1c1c] border-[0.85px] border-[#4b4b4b] hover:border-primary-60 hover:bg-primary-900 text-[#ffffffcc] font-normal text-sm px-4 py-1.75">
					.{data}
				</SolidButton>
			))}
		</div>
	);
};
