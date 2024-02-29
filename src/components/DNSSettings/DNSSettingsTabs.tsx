import React, { useCallback } from 'react';
import { Tabs, type Tab } from '../Core/Tabs';
import {cn} from "../../utils/cn";

export type DNSSettingsTabKey = 'records' | 'forward' | 'ns';

const DNS_SETTINGS_TABS_OPTOINS: Tab<DNSSettingsTabKey>[] = [
	{ value: 'records', label: 'DNS Records' },
	{ value: 'forward', label: 'URL Forwarding' },
	{ value: 'ns', label: 'Nameservers' },
];

export interface DNSSettingsTabsProps {
	value: DNSSettingsTabKey;
	onChange?: (value: DNSSettingsTabKey) => void;
	onSave?: () => void;
	className?: string;
}

export const DNSSettingsTabs = ({ value, onChange, onSave, className }: DNSSettingsTabsProps) => {
	const handleClickSave = useCallback(() => {
		onSave?.();
	}, [onSave]);
	return (
		<div className={cn('flex justify-between mb-3.5', className)}>
			<Tabs options={DNS_SETTINGS_TABS_OPTOINS} value={value} onChange={onChange} />
			<div className="flex text-brand-300">
				<div className="flex cursor-pointer" onClick={handleClickSave}>
					<span className="mr-1.5">Save</span>
					<img
						className="block w-[22px] cursor-pointer"
						src="/assets/arrow-right1.svg"
						alt="Arrow"
						role="img"
					/>
				</div>
			</div>
		</div>
	);
};
