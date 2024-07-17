import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"

export default function ActivitiesHeaderTabItem({
	children,
	selected,
	showBadge,
	className,
	...props
}: ComponentProps<'button'> & {
	showBadge?: boolean;
	selected?: boolean;
}) {
	return (
		<button {...props} className={cn( className)}>
			<span className={cn('relative',selected || 'opacity-20')}>{children}
				{showBadge && (
					<span className="absolute block w-2 h-2 rounded-full bg-warning -top-1 -right-1" />
				)}
			</span>

		</button>
	);
};
