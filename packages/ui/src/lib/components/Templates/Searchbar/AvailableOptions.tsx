import { useState } from 'react';
import { cn } from '../../../utils';

const defaultOptions = [
	{ name: '.com', active: false },
	{ name: '.net', active: false },
	{ name: '.xyz', active: false },
	{ name: '.io', active: false },
];

export default function AvailableOptions() {
	const [options, setOptions] = useState(defaultOptions);

	const handleClick = (name) => {
		setOptions((prevOptions) => {
			return prevOptions.map((option) => ({
				...option,
				active: option.name === name,
			}));
		});
	};

	return (
		<div className="space-x-2.5">
			{options.map(({ name, active }) => (
				<span
					key={name}
					onClick={() => handleClick(name)}
					className={cn(
						'cursor-pointer rounded-full bg-[#A9F2CE0A] px-4 py-2.5 font-primary text-[16px] text-primary-500 transition-all duration-200 ease-in-out hover:bg-[#51e39a29] active:bg-[#102d1f29]',
						active ? 'bg-[#48E59B3D]' : '',
					)}>
					{name}
				</span>
			))}
		</div>
	);
}
