'use client';

import * as React from 'react';
import { Search } from 'lucide-react';
import { Input, Button, ButtonText } from '../../Core';
import { cn } from '../../../utils';
import Suggestion from './Suggestion';
import Loading from './Loading';
import Result from './Result';
import NotFound from './NotFound';

export default function DomainSearch() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	const handleBlur = () => setTimeout(() => setOpen(false), 150);

	const inputRef = React.useRef<HTMLInputElement | null>(null);

	const handleFocus = () => {
		setOpen(true);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVal = e.target.value;
		setValue(newVal);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (!open) {
			return;
		}
		if (e.key === 'Escape') {
			setOpen(false);
		}
	};

	const getComponents = (loading, result) => {
		if (!open) {
			return;
		}
		if (loading) {
			return <Loading value={value} />;
		}
		if (value && result) {
			return <Result />;
		}
		if (value) {
			return <NotFound />;
		}
		return <Suggestion />;
	};

	return (
		<div className="mx-auto my-auto w-full max-w-3xl space-y-4">
			<div className="relative mt-5" ref={inputRef}>
				<Search className="absolute left-[18px] top-[18px] z-10 h-5 w-5 text-[#EDFCF79E]" />
				<Input
					placeholder="Search for available domains"
					className="h-14 pl-12 pr-32"
					value={value}
					onFocus={handleFocus}
					// onKeyDown={handleKeyDown}
					onChange={handleChange}
				/>

				<Button className="absolute right-[6px] top-[6px] h-11 w-auto cursor-pointer bg-primary-500 px-12 py-3 ring-0 transition-all duration-200 ease-in-out enabled:hover:bg-[#54ffad] enabled:active:bg-primary-500/30">
					<ButtonText className="text-[16px] font-medium text-[#000000CC]">
						Search
					</ButtonText>
				</Button>
			</div>

			{open && (
				<div
					style={{
						width: inputRef.current ? inputRef.current.offsetWidth : 'auto',
					}}
					className={cn(
						'absolute mt-2 scale-100 transform rounded-2xl bg-[#FFFFFF0A] px-10 py-5 shadow-lg transition-transform duration-200 ease-in-out',
					)}>
					{getComponents(false, true)}
				</div>
			)}
		</div>
	);
}
