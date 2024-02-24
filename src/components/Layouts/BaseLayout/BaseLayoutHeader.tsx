import React, { ReactNode } from 'react';

type AppLayoutHeaderProps = React.ComponentProps<'header'> & {
	content?: ReactNode;
	endSlot?: ReactNode;
};

export default function BaseLayoutHeader({ content, endSlot }: AppLayoutHeaderProps) {
	return (
		<header className=" namefi-header relative h-20 pl-6 pr-3 rounded-full w-full max-w-screen-xl m-auto mt-9">
			<nav className="relative w-full h-full m-0 flex justify-between items-center">
				<img src="/assets/namefi.svg" width={90} alt="logo" role="svg" />
				<div>{content}</div>
				<div>{endSlot}</div>
			</nav>
		</header>
	);
}
