import { GhostButton } from '../../../Core/Buttons/GhostButton';
import { TrashIcon } from '@radix-ui/react-icons';
import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"
import  { centerTruncateString }  from "@namefi/utils"
import TokenIcon from '../../../Core/icons/TokenIcon';
import { CheckCheck } from 'lucide-react';

function CartItem({
	domainName,
	years,
	price,
	trashButton,
}: {
	domainName: string;
	years: number;
	price: number;
	trashButton?: React.ReactNode;
}) {
	return (
		<>
			<div className="relative w-full flex justify-between">
				<div className="w-[120px] h-[120px] bg-brand-black rounded-lg p-1 drop-shadow-[0_2px_4px_rgba(202,202,202,0.25)] flex justify-center items-center">
					<p className="font-bold text-xs tracking-widest text-white text-nowrap">
						{centerTruncateString(domainName, 14)}
					</p>
				</div>
				<div className="w-[332px] flex justify-between items-start text-white font-primary font-normal ">
					<div className="min-w-[109px] flex flex-col gap-2  ">
						<p>{domainName}</p>
						<p>{years} Year</p>
						<div className={'flex items-center justify-start gap-0.5'}>
							<CheckCheck className={'text-primary w-4 h-4'} />
							<p className={"text-2.5lg text-[#D6D6D6] font-['Roboto']"}>
								WHOIS Privacy, AutoPark™, AuthENS™
							</p>
						</div>
					</div>
					<div className="relative flex gap-6 items-center ">
						<p className="flex gap-3 text-sm tracking-[0.02em]">
							<TokenIcon className={'w-5.25 h-5.25'} /> <span>{price}</span>
							<span>$NFSC</span>
						</p>
						{trashButton}
					</div>
				</div>
			</div>
		</>
	);
}

CartItem.TrashButton = TrashButton;

function TrashButton(props: ComponentProps<typeof GhostButton>) {
	return (
		<GhostButton
			{...props}
			className={cn(props.className, 'rounded-full aspect-square w-7 h-7 p-1')}>
			<TrashIcon className={'text-primary w-5 h-5'} />
		</GhostButton>
	);
}

export default CartItem;
