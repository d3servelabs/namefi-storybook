import React from 'react';
import  { cn }  from "@namefi/utils"
import ShortAddress from '../../Core/ShortAddress';

export default function DomainOwner({
	ownerAddress,
	className,
	...props
}: React.ComponentProps<'div'> & {
	ownerAddress?: string;
}) {
	return (
		<div {...props} className={cn(className)}>
			<p className="text-[#acacac] text-xs tracking-widest ">Owned by</p>
			<p className="text-[#ededed] text-sm tracking-widest ">
				<ShortAddress address={ownerAddress} />
			</p>
		</div>
	);
}
