import React from 'react';
import { cn } from '../../../../utils/cn';

type UserAuthStateTileLabelProps = React.ComponentProps<'p'>;
const UserAuthStateTileLabel = ({ children, ...props }: UserAuthStateTileLabelProps) => {
	return (
		<p
			{...props}
			className={cn('text-white text-base font-medium font-primary', props.className)}>
			{children}
		</p>
	);
};

export default UserAuthStateTileLabel;
