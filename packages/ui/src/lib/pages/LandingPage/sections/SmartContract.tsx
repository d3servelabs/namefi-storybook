import React from 'react';
import { NamefiBrandText } from '../../../components/Core/NamefiBrandText';
import  { cn }  from "@namefi/utils"

export interface SmartContractProps {
	address: string;
	href: string;
	className?: string;
}

export const SmartContract = ({ address, href, className }: SmartContractProps) => {
	return (
		<div id="smart-contract" className={cn('w-full', className)}>
			<a
				className="transition block bg-[#121212] hover:bg-black-700 rounded-2.5 py-3 px-6 md:rounded-5 md:py-8 md:px-12"
				href={href}
				target="_blank">
				<div className="flex justify-between items-center mb-6 md:mb-16">
					<div className="text-primary-500 text-xs font-slab font-medium leading-loose md:text-xl">
						<NamefiBrandText className="text-[1em]">Namefi</NamefiBrandText>'s smart
						contract
					</div>
					<div className="text-grey text-[10px] font-light tracking-wider md:text-lg">
						Tap to view &lt;/&gt;
					</div>
				</div>
				<div className="text-white text-xs text-center font-primary font-light tracking-wider break-all mb-8 md:text-xl md:mb-16">
					{address}
				</div>
				<div className="text-brand-light text-[10px] text-center font-primary md:text-lg">
					We ♥️ opensource
				</div>
			</a>
		</div>
	);
};
