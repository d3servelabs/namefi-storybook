import React, { ComponentProps, useMemo } from 'react';
import { AlertTriangle, CheckCheck, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export type StatusChipProps = ComponentProps<'div'> & {
	color: ('info' | 'warning' | 'error' | 'success') | string;
	icon?: 'info' | 'warning' | 'error' | 'success' ;
};

export default function StatusChip({ color, children, icon, className }: StatusChipProps) {
	return (
		<div
			className={cn(
				'flex gap-1 items-center justify-start text-3.5lg whitespace-nowrap break-keep',
				color === 'info'
					? 'text-blue-200'
					: color === 'warning'
						? 'text-pending'
						: color === 'success'
							? 'text-primary-light'
							: color === 'error'
								? 'text-error-light'
								: undefined,
				className,
			)}>
			<StatusChipIcon icon={(icon ?? color) as any} color={color} /> <span>{children}</span>
		</div>
	);
}

function StatusChipIcon({ icon,color }: Pick<StatusChipProps, 'icon'|'color'>) {
	const colorClass = useMemo(() => {
		switch (color) {
			case 'info':
				return 'text-blue-500';
			case 'warning':
				return 'text-occupied';
			case 'success':
				return 'text-primary-500';
			case 'error':
				return 'text-error-500';
			default:
				return undefined;
		}
	}, [color]);
	switch (icon) {
		case 'success':
			return <CheckCheck  className={cn('w-6 h-6 text-primary-500',colorClass)} color={colorClass === undefined? color:undefined} />;
		case 'info':
			return <Info  className={cn('w-6 h-6 text-blue-500',colorClass)} color={colorClass === undefined? color:undefined} />;
		case 'warning':
			return <AlertTriangle  className={cn('w-6 h-6 text-occupied',colorClass)} color={colorClass === undefined? color:undefined} />;
		case 'error':
			return <X  className={cn('w-6 h-6 text-error-500',colorClass)} color={colorClass === undefined? color:undefined} />;
		default:
			return <></>;
	}
}
