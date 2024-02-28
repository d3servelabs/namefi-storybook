import { cn } from '@utils/cn';
import React, { useCallback } from 'react';

export interface Tab<TKey extends string = string> {
	value: TKey;
	label: React.ReactNode;
	disabled?: boolean;
}

export interface TabItemProps<TKey extends string = string> {
	tab: Tab<TKey>;
	active?: boolean;
	onClick: (value: TKey) => void;
}

export const TabItem = <TKey extends string = string>({
	tab,
	active,
	onClick,
}: TabItemProps<TKey>) => {
	const handleClick = useCallback(() => {
		if (tab.disabled) {
			return;
		}
		onClick(tab.value);
	}, [tab, onClick]);
	return (
		<a
			onClick={handleClick}
			className={cn(
				'transition flex items-center cursor-pointer',
				active && 'font-semibold text-primary-500',
			)}>
			{tab.label}
		</a>
	);
};
