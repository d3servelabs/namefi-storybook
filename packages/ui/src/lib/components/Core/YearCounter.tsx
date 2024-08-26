import React from 'react';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import {cn} from "../../utils/cn";

export type YearCounterProps = {
	onYearsChanged?: (year: number) => void;
	years: number;
};
export default function YearCounter({ onYearsChanged, years }: YearCounterProps) {
	return (
		<div className="w-full h-14 flex justify-between items-center">
			<button
				disabled={years === 1}
				className={cn("block p-1 enabled:hover:bg-emerald-500/20 enabled:active:bg-emerald-500/40 rounded-full text-emerald-400 disabled:text-neutral-600 disabled:cursor-not-allowed")}
				onClick={() => onYearsChanged?.(Math.max(years - 1, 1))}>
				<MinusIcon className={'w-8 h-8 '}/>
			</button>
			<div className=' font-light font-["Roboto_Mono"] text-white flex items-center justify-between gap-2'>
				<p className="text-8lg leading-none">{years}</p>
				<p className=" text-4lg leading-none self-end mb-1">
					year{years > 1 ? 's' : ''}
				</p>
			</div>
			<button
				className="block p-1 hover:bg-emerald-500/20 active:bg-emerald-500/40 rounded-full"
				onClick={() => onYearsChanged?.(years + 1)}>
				<PlusIcon className={'w-8 h-8 text-emerald-400'} />
			</button>
		</div>
	);
}
