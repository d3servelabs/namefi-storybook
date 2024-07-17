import React, { memo } from 'react';
import  { cn }  from "@namefi/utils"

export interface SocialLinkItem {
	icon: React.ReactNode;
	href: string;
}

export interface SocialLinksProps {
	items?: SocialLinkItem[];
	slice?: [number, number];
	className?: string;
}

export const SocialLinks = memo(
	({ items = [], slice = [0, Infinity], className }: SocialLinksProps) => {
		return (
			<div className={cn('flex gap-x-3', className)}>
				{items.slice(...slice).map(({ icon, href }, index) => (
					<div key={index}>
						<a
							className="w-10 h-10 bg-black-brand flex justify-center items-center rounded-full text-xl text-[#eaeaea] stroke-[0.1]"
							href={href}>
							<span>{icon}</span>
						</a>
					</div>
				))}
			</div>
		);
	},
	(prev, next) =>
		(['items', 'className'] satisfies (keyof SocialLinksProps)[]).every((key) =>
			Object.is(prev[key], next[key]),
		) &&
		Object.is(prev.slice?.[0], next.slice?.[0]) &&
		Object.is(prev.slice?.[1], next.slice?.[1]),
);
