import React, { ComponentProps } from 'react';

const Body: React.FC<ComponentProps<'div'>> = ({ children, ...props }) => {
	return (
		<div className="flex flex-col gap-16" {...props}>
			{children}
		</div>
	);
};
export default Body;