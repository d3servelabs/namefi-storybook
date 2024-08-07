import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"

const Heading: React.FC<ComponentProps<'h2'>> = ({ className, children, ...props }) => {
	return (
		<h2
			className={cn('font-semibold text-base leading-7 tracking-wider text-white', className)}
			{...props}>
			{children}
		</h2>
	);
};
const Paragraph: React.FC<ComponentProps<'p'>> = ({ className, children, ...props }) => {
	return (
		<p
			className={cn('font-normal text-xs tracking-wider leading-5 text-brand-300', className)}
			{...props}>
			{children}
		</p>
	);
};

const Typography = {
	Heading,
	Paragraph,
};

export default Typography;
