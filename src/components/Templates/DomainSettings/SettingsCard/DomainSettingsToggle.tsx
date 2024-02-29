import { cn } from '../../../../utils/cn';
import React, { useId } from 'react';

export default function DomainSettingsToggle({
	checked,
	onCheckedChange,
	children,
	className,
	...props
}: React.ComponentProps<'div'> & {
	children: React.ReactNode;
	checked?: boolean;
	onCheckedChange?: React.ComponentProps<'input'>['onChange'];
}) {
	const id = useId();

	return (
		<div
			{...props}
			className={cn('w-full flex flex-row justify-between items-center py-1 ', className)}>
			<span
				className={`text-emerald-400 text-sm font-medium font-['Roboto'] leading-[14px] tracking-wide`}>
				{children}
			</span>


			<div className={cn(' h-[18px] w-8 rounded-full')}>
				<label className="relative block w-full h-full rounded-full">
					<input
						id={`${id}-input`}
						checked={checked}
						onChange={onCheckedChange}
						className={cn('w-0 h-0 opacity-0 peer hidden')}
						type="checkbox"
					/>
					<span
						id={`${id}-track`}
						className={cn(
							'absolute top-0 left-0 w-full h-full rounded-full bg-[#313131] cursor-pointer peer-checked:bg-[#c6eedb33]',
							'bg-[#797979AF] peer-checked:bg-[#48E59BA0]'
						)}></span>
					<span
						id={`${id}-thumb`}
						className={cn(
							`inset-[2px] rounded-full duration-300 peer-checked:translate-x-[.9rem] absolute w-[14px] h-[14px] bg-[#d6d6d6] peer-checked:bg-[#E8FFD2]`,
							'bg-[#D6D6D6] peer-checked:bg-[#E8FFD2]'
						)}
					/>
				</label>
			</div>
		</div>
	);
}
