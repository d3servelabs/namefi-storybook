import React, { ComponentProps } from 'react';

const Root: React.FC<ComponentProps<'div'>> = ({ children, ...props }) => {
	return (
		<div className=" w-48 h-full flex flex-col pt-9 gap-9" {...props}>
			{children}
		</div>
	);
};
export default Root;