import React, { ComponentProps, useState } from 'react';
import  { cn }  from "@namefi/utils"
import { ArrowRight } from 'lucide-react';

function NavItem({
	children,
	icon,
	className,
	...props
}: ComponentProps<'a'> & { icon: React.ReactNode }) {
	return (
		<a
			{...props}
			className={cn(
				'table-row align-middle group even:border-t-[2px] border-neutral-400/30 cursor-pointer',
				className,
			)}>
			<td className={'rounded-l-5'}></td>
			<td className={'w-9'}>
				<div
					className={
						'w-9 h-9 p-1.5 my-auto  text-primary bg-primary-20 rounded-full relative'
					}>
					{icon}
				</div>
			</td>
			<td className={'w-min'}>
				<div
					className={'pl-4 py-5 h5 text-white relative text-nowrap'}>
					{children}{' '}
					<ArrowRight width={22} height={22} className={'inline text-primary invisible group-hover:visible group-hover:translate-x-1 duration-500 transition-all'} />

				</div>
			</td>

			<td className={'rounded-r-5'}></td>
		</a>
	);
}

export default NavItem;