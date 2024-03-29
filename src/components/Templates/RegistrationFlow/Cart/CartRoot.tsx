import React, {ComponentProps} from 'react';
import {cn} from "../../../../utils/cn";


export default function CartRoot({
className,children,...props
}: ComponentProps<'div'>) {
	return (
		<div {...props} className={cn("relative flex flex-col gap-9 items-center w-[500px] ")}>
			{children}
		</div>
	);
};

