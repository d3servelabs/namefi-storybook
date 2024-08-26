import { cn } from '../../utils/cn';
import React, { ReactElement } from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export function BreadCrumbsRoot({
	children,
	className,
	activeIndex = (children?.length ?? 0) - 1,
}: Omit<React.ComponentProps<'div'>, 'children'> & {
	activeIndex?: number;
	children?: ReactElement[];
}) {
	return (
		<div className={cn('flex flex-row gap-2', className)}>
			{children?.map((crumb, index) => {
				return (
					<>
						<ChevronRightIcon className={'w-4.5 h-4.5 text-[#48E59B]'} />
						{React.cloneElement(crumb, { active: index === activeIndex })}
					</>
				);
			})}
		</div>
	);
}

export function Crumb({
	children,
	active,
	className,
	...props
}: React.ComponentProps<'a'> & { active?: boolean }) {
	return (
		<a
			{...props}
			className={cn(
				"font-['Roboto_Mono'] font-3.5 text-[#48E59B]/50 hover:text-[#48E59B]/80 active:text-[#48E59B] hover:underline ",
				active && 'text-[#48E59B] font-medium',
				className,
			)}>
			{children}
		</a>
	);
}

BreadCrumbsRoot.Crumb = Crumb;
export default BreadCrumbsRoot;
