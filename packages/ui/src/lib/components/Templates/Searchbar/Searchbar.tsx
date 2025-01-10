'use client';

import * as React from 'react';
import { Search } from 'lucide-react';
import { Input, Button, ButtonText } from '../../Core';
import { cn } from '../../../utils';
import Suggestion from './Suggestion';
import Loading from './Loading';
import Result from './Result';
import NotFound from './NotFound';
import { useSearchbarContext } from './SearchbarContext';
import { suggestions } from './mockData';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchBar() {
	const { open, setOpen, value, setValue } = useSearchbarContext();

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
		return <Suggestion results={suggestions} />;
	};

	const textOptions = ['available domains...', '.com', '.net', '.org', '.tech'];

	const [visibleText, setVisibleText] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setVisibleText((prevIndex) => (prevIndex + 1) % textOptions.length);
		}, 3000);

		return () => clearInterval(interval); // Cleanup interval on unmount
	}, []);

	return (
		<div className="mx-auto my-auto w-full max-w-5xl space-y-4">
			<div className="relative mt-5" ref={inputRef}>
				<Search className="absolute left-[18px] top-[18px] z-10 h-5 w-5 text-[#EDFCF79E]" />
				<div className="relative">
					<Input
						className="h-14 pl-12 pr-32"
						value={value}
						onFocus={handleFocus}
						onChange={handleChange}
					/>
					{!value && (
						<div className="placeholder-container pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 transform">
							<span className="pr-1 text-[#EDFCF79E]">Search for</span>
							<AnimatePresence mode="wait">
								<motion.span
									key={visibleText}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.3 }}
									className="inline-block text-[#EDFCF79E]">
									{textOptions[visibleText]}
								</motion.span>
							</AnimatePresence>
						</div>
					)}
				</div>

				<Button className="absolute right-[6px] top-[6px] h-11 w-auto cursor-pointer bg-primary-500 px-12 py-3 ring-0 transition-all duration-200 ease-in-out enabled:hover:bg-[#2BEF91FF] enabled:active:bg-primary-500/30">
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
