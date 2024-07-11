import CustomLoader from './icons/CustomLoader';
import React from 'react';

export const NamefiSpinner = React.memo(
	React.forwardRef<SVGSVGElement>(function NamefiSpinner(props, ref) {
		return (
			<CustomLoader
				ref={ref}
				firstPath={{ className: 'animate-[spin_2s_ease-in-out_infinite] origin-center' }}
				secondPath={{
					className: 'animate-[spin_3s_ease-in-out_infinite_reverse] origin-center',
				}}
			/>
		);
	}),
	() => true,
);
