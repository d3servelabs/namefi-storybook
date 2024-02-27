import React, { useCallback } from 'react';
import { Tab, TabItem } from './TabItem';

export interface TabsProps <TKey extends string = string> {
	options: Tab<TKey>[],
	value: TKey,
	onChange?: (value: TKey) => void
	className?: string
}

export const Tabs = <TKey extends string = string> ({ options, value, onChange }: TabsProps<TKey>) => {
	const handleClickTabItem = useCallback((key: TKey) => {
		onChange?.(key)
	}, [])
	return <div className="flex gap-x-6 mr-12 text-sm font-medium text-black-400">
		{options.map((option: Tab<TKey>) => {
			return <TabItem key={option.value} tab={option} active={option.value === value} onClick={handleClickTabItem} />
		})}
	</div>
}
