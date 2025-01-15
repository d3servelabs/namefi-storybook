import React, { useMemo } from 'react';
import { Select, type Option } from './Select';

export interface NetworkOption {
	key: string;
	name: string;
	icon: React.ReactNode;
	fee?: number;
}

export interface NetworkSelectProps {
	value?: string;
	onChange?: (value: string) => void;
	options: NetworkOption[];
	placeholder?: React.ReactNode;
	className?: string;
	disabled?: boolean;
}

export const NetworkSelect = ({
	value,
	options: networkOptions,
	placeholder = 'Select Network',
	disabled,
	...props
}: NetworkSelectProps) => {
	const options = useMemo(() => {
		return networkOptions.map<Option<string>>((network) => ({
			value: network?.key,
			label: (
				<div className="flex items-center">
					<div className="mr-2">{network?.icon}</div>
					{network?.name}
				</div>
			),
			addon: typeof network?.fee !== 'undefined' && (
				<div>
					<span className="text-grey">Fees: </span>≈${network?.fee}
				</div>
			),
		}));
	}, [networkOptions]);
	const addon = useMemo(() => {
		if (!value) {
			return;
		}
		return options.find((option) => option.value === value)?.addon;
	}, [value, options]);

	return (
		<Select
			value={value}
			options={options}
			placeholder={placeholder}
			addon={addon}
			disabled={disabled}
			{...props}
		/>
	);
};
