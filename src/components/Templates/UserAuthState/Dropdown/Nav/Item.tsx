import React, { ComponentProps, useState } from 'react';
import { cn } from '../../../../../utils/cn';

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
				'table-row align-middle hover:bg-primary-20/60 active:bg-primary-20 even:border-t-[2px] border-neutral-400/30 cursor-pointer',
				className,
			)}>
			<td className={'min-w-[10%] max-w-[25%] rounded-l-5'}></td>
			<td className={'w-9'}>
				<div
					className={
						'w-9 h-9 p-1.5 my-auto  text-primary bg-primary-20 rounded-full relative'
					}>
					{icon}
				</div>
			</td>
			<td className={'w-min'}>
				<div className={'pl-4 py-5 h5 text-white relative'}>{children}</div>
			</td>

			<td className={'min-w-[10%] max-w-[25%]  rounded-r-5'}></td>
		</a>
	);
}

export default NavItem;
